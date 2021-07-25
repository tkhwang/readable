import Link from 'next/link';
import React from 'react';
import { EmailLoginForm } from '../email-form';
import { LoginDivider } from '../divider';
import { SocialLoginForm } from '../social-form';

export const LoginTemplate = () => {
  return (
    <section className="bg-gradient-to-b from-gray-100 to-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">
          {/* Page header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-20">
            <h1 className="h1">Read and share anything readable in Readable.</h1>
          </div>

          {/* Form */}
          <div className="max-w-sm mx-auto">
            <EmailLoginForm />
            <LoginDivider />
            <SocialLoginForm />
            <div className="text-gray-600 text-center mt-6">Don’t you have an account?</div>
          </div>
        </div>
      </div>
    </section>
  );
};
