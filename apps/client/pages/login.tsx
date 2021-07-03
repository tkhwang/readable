import { useGetUsersViewModel } from '@readable/components/GetUser/useGetUsersViewModel.query';
import { SocialLoginButton } from '@readable/components/SocialLoginButton';
import React from 'react';

function Login() {
  return (
    <div className="w-full p-4">
      <main role="main" className="w-full flex flex-col h-screen content-center justify-center">
        <div
          onClick={() => {
            console.log('hihihi');
          }}
          className="w-full sm:w-1/2 lg:w-1/3 bg-gray-50 rounded-xl m-auto"
        >
          <img
            src="https://user-images.githubusercontent.com/365500/122947722-572c6280-d3b5-11eb-9b18-f8e0e2f79e3b.png"
            alt="symbol"
            style={{ width: '300 px' }}
          />
          <div className="bg-white rounded shadow px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
            <SocialLoginButton provider="google" />
            <SocialLoginButton provider="facebook" />
            <SocialLoginButton provider="github" />
          </div>
        </div>
      </main>
    </div>
  );
}

export default Login;
