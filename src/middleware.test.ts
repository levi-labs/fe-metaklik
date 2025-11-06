import { describe, it, expect, vi } from 'vitest';
import { NextRequest, NextResponse } from 'next/server';
import { middleware } from './middleware';

describe('Middleware Authentication', () => {
  it('should redirect to signin when accessing dashboard without auth token', () => {
    const request = new NextRequest(new URL('http://localhost:3000/dashboard'));
    const response = middleware(request);

    expect(response.status).toBe(307); // Redirect status
    expect(response.headers.get('location')).toContain('/signin');
    expect(response.headers.get('location')).toContain('callbackUrl=%2Fdashboard');
  });

  it('should allow access to dashboard when auth token exists', () => {
    const request = new NextRequest(new URL('http://localhost:3000/dashboard'));
    request.cookies.set('auth-token', 'test-token-123');

    const response = middleware(request);

    // Should continue to the next middleware/page
    expect(response.status).not.toBe(307);
  });

  it('should redirect to dashboard when accessing signin with auth token', () => {
    const request = new NextRequest(new URL('http://localhost:3000/signin'));
    request.cookies.set('auth-token', 'test-token-123');

    const response = middleware(request);

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toContain('/dashboard');
  });

  it('should allow access to signin when no auth token', () => {
    const request = new NextRequest(new URL('http://localhost:3000/signin'));
    const response = middleware(request);

    // Should continue to signin page
    expect(response.status).not.toBe(307);
  });

  it('should redirect with correct callback URL for nested dashboard routes', () => {
    const request = new NextRequest(
      new URL('http://localhost:3000/dashboard/links/123')
    );
    const response = middleware(request);

    expect(response.status).toBe(307);
    expect(response.headers.get('location')).toContain('/signin');
    expect(response.headers.get('location')).toContain(
      'callbackUrl=%2Fdashboard%2Flinks%2F123'
    );
  });

  it('should allow access to non-protected routes', () => {
    const request = new NextRequest(new URL('http://localhost:3000/'));
    const response = middleware(request);

    // Should continue normally
    expect(response.status).not.toBe(307);
  });
});
