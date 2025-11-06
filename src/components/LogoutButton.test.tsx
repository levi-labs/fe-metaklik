import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { useRouter } from 'next/navigation';
import LogoutButton from './LogoutButton';

// Mock Next.js navigation
vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

describe('LogoutButton Component', () => {
  const mockPush = vi.fn();

  beforeEach(() => {
    vi.clearAllMocks();
    (useRouter as any).mockReturnValue({ push: mockPush });
    // Set a test cookie
    document.cookie = 'auth-token=test-token; path=/';
  });

  it('should render logout button', () => {
    render(<LogoutButton />);

    const logoutButton = screen.getByRole('button', { name: /logout/i });
    expect(logoutButton).toBeInTheDocument();
  });

  it('should clear auth cookie and redirect to homepage on click', async () => {
    render(<LogoutButton />);

    const logoutButton = screen.getByRole('button', { name: /logout/i });
    fireEvent.click(logoutButton);

    await waitFor(() => {
      // Check if cookie was cleared
      expect(document.cookie).not.toContain('auth-token=test-token');

      // Check if redirected to homepage
      expect(mockPush).toHaveBeenCalledWith('/');
    });
  });
});
