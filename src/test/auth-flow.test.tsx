import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import SignInForm from '@/components/signin/SignInForm';
import LogoutButton from '@/components/LogoutButton';
import { middleware } from '@/middleware';
import { NextRequest } from 'next/server';

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe('Authentication Flow Integration Tests', () => {
  const mockPush = vi.fn();
  const mockSearchParams = {
    get: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as any).mockReturnValue({ push: mockPush });
    (useSearchParams as any).mockReturnValue(mockSearchParams);
    document.cookie = 'auth-token=; max-age=0';
  });

  describe('Complete Authentication Flow', () => {
    it('should complete full flow: access dashboard -> redirect to signin -> login -> redirect to dashboard', async () => {
      // Step 1: Try to access dashboard without auth
      const dashboardRequest = new NextRequest(
        new URL('http://localhost:3000/dashboard')
      );
      const redirectResponse = middleware(dashboardRequest);

      // Should redirect to signin with callback URL
      expect(redirectResponse.status).toBe(307);
      expect(redirectResponse.headers.get('location')).toContain('/signin');
      expect(redirectResponse.headers.get('location')).toContain(
        'callbackUrl=%2Fdashboard'
      );

      // Step 2: User is on signin page with callback URL
      mockSearchParams.get.mockReturnValue('/dashboard');
      render(<SignInForm />);

      // Step 3: User submits login form
      const submitButton = screen.getByRole('button', { name: /sign in$/i });
      fireEvent.click(submitButton);

      // Step 4: Should set cookie and redirect back to dashboard
      await waitFor(() => {
        expect(document.cookie).toContain('auth-token=demo-token-123');
        expect(mockPush).toHaveBeenCalledWith('/dashboard');
      });

      // Step 5: Now user can access dashboard
      const authenticatedRequest = new NextRequest(
        new URL('http://localhost:3000/dashboard')
      );
      authenticatedRequest.cookies.set('auth-token', 'demo-token-123');
      const allowedResponse = middleware(authenticatedRequest);

      // Should allow access (not redirect)
      expect(allowedResponse.status).not.toBe(307);
    });

    it('should handle logout flow correctly', async () => {
      // Step 1: User is logged in
      document.cookie = 'auth-token=demo-token-123; path=/';

      // Step 2: User can access dashboard
      const dashboardRequest = new NextRequest(
        new URL('http://localhost:3000/dashboard')
      );
      dashboardRequest.cookies.set('auth-token', 'demo-token-123');
      const allowedResponse = middleware(dashboardRequest);
      expect(allowedResponse.status).not.toBe(307);

      // Step 3: User clicks logout
      render(<LogoutButton />);
      const logoutButton = screen.getByRole('button', { name: /logout/i });
      fireEvent.click(logoutButton);

      // Step 4: Cookie is cleared and redirected to home
      await waitFor(() => {
        expect(document.cookie).not.toContain('auth-token=demo-token-123');
        expect(mockPush).toHaveBeenCalledWith('/');
      });

      // Step 5: Cannot access dashboard anymore
      const unauthRequest = new NextRequest(
        new URL('http://localhost:3000/dashboard')
      );
      const blockedResponse = middleware(unauthRequest);
      expect(blockedResponse.status).toBe(307);
      expect(blockedResponse.headers.get('location')).toContain('/signin');
    });

    it('should redirect authenticated users away from signin page', () => {
      const signinRequest = new NextRequest(
        new URL('http://localhost:3000/signin')
      );
      signinRequest.cookies.set('auth-token', 'demo-token-123');

      const response = middleware(signinRequest);

      expect(response.status).toBe(307);
      expect(response.headers.get('location')).toContain('/dashboard');
    });
  });

  describe('Protected Routes', () => {
    it('should protect nested dashboard routes', () => {
      const nestedRoutes = [
        '/dashboard/links',
        '/dashboard/links/123',
        '/dashboard/settings',
      ];

      nestedRoutes.forEach((route) => {
        const request = new NextRequest(new URL(`http://localhost:3000${route}`));
        const response = middleware(request);

        expect(response.status).toBe(307);
        expect(response.headers.get('location')).toContain('/signin');
        expect(response.headers.get('location')).toContain(
          `callbackUrl=${encodeURIComponent(route)}`
        );
      });
    });
  });
});
