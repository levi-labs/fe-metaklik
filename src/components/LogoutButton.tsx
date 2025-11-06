'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = () => {
    // Delete auth cookie
    document.cookie = 'auth-token=; path=/; max-age=0';

    // Redirect to home
    router.push('/');
  };

  return (
    <button
      onClick={handleLogout}
      className='px-4 py-2 bg-red-600 text-white rounded-md hover:bg-red-700 transition-colors text-sm font-medium'
    >
      Logout
    </button>
  );
}
