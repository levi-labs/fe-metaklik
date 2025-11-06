import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter, useSearchParams } from 'next/navigation';
import SignInForm from './SignInForm';

// Mock Next.js navigation hooks
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
  useSearchParams: vi.fn(),
}));

describe('SignInForm Component', () => {
  const mockPush = vi.fn();
  const mockSearchParams = {
    get: vi.fn(),
  };

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as any).mockReturnValue({ push: mockPush });
    (useSearchParams as any).mockReturnValue(mockSearchParams);
    // Clear cookies before each test
    document.cookie = 'auth-token=; max-age=0';
  });

  it('should render sign in form', () => {
    render(<SignInForm />);

    expect(screen.getByText('Sign In to MetaKlik')).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/password/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /sign in$/i })).toBeInTheDocument();
  });

  it('should set auth cookie and redirect to dashboard on form submit', async () => {
    mockSearchParams.get.mockReturnValue(null);
    render(<SignInForm />);

    const submitButton = screen.getByRole('button', { name: /sign in$/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      // Check if cookie was set
      expect(document.cookie).toContain('auth-token=demo-token-123');

      // Check if redirected to dashboard
      expect(mockPush).toHaveBeenCalledWith('/dashboard');
    });
  });

  it('should redirect to callback URL after sign in', async () => {
    mockSearchParams.get.mockReturnValue('/dashboard/links');
    render(<SignInForm />);

    const submitButton = screen.getByRole('button', { name: /sign in$/i });
    fireEvent.click(submitButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/dashboard/links');
    });
  });

  it('should render Sign Up link', () => {
    render(<SignInForm />);

    const signUpLink = screen.getByText(/sign up/i);
    expect(signUpLink).toBeInTheDocument();
    expect(signUpLink.closest('a')).toHaveAttribute('href', '/maintenance');
  });

  it('should render Forgot Password link', () => {
    render(<SignInForm />);

    const forgotPasswordLink = screen.getByText(/forgot your password/i);
    expect(forgotPasswordLink).toBeInTheDocument();
    expect(forgotPasswordLink.closest('a')).toHaveAttribute(
      'href',
      '/maintenance'
    );
  });

  it('should render Google Sign In button', () => {
    render(<SignInForm />);

    const googleButton = screen.getByRole('button', {
      name: /sign in with google/i,
    });
    expect(googleButton).toBeInTheDocument();
  });

  it('should redirect to maintenance on Google Sign In', async () => {
    render(<SignInForm />);

    const googleButton = screen.getByRole('button', {
      name: /sign in with google/i,
    });
    fireEvent.click(googleButton);

    await waitFor(() => {
      expect(mockPush).toHaveBeenCalledWith('/maintenance');
    });
  });
});
