'use client';

import SignInForm from '@/components/signin/SignInForm';
import SignInCarousel from '@/components/signin/SignInCarousel';

const SignInPage = () => {
  return (
    <div className="min-h-screen">
      <div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden min-h-screen w-full">
        {/* Left Column: Login Form */}
        <SignInForm />

        {/* Right Column: Onboarding Content */}
        <SignInCarousel />
      </div>
    </div>
  );
};

export default SignInPage;
