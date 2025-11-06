'use client';

import SignInForm from '@/components/signin/SignInForm';
import SignInCarousel from '@/components/signin/SignInCarousel';
import { Suspense } from 'react';

const SignInPage = () => {
  return (
    <div className='min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-2 overflow-hidden min-h-screen w-full'>
        {/* Left Column: Login Form */}
        <Suspense fallback={<div>Loading...</div>}>
          <SignInForm />
        </Suspense>

        {/* Right Column: Onboarding Content */}
        <SignInCarousel />
      </div>
    </div>
  );
};

export default SignInPage;
