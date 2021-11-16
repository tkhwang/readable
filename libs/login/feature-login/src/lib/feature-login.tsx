import { LOGIN_COVER_URL } from '@readable/shared/util-common';
import Image from 'next/image';
import { SocialLoginButton } from './social-login-button';

export const FeatureLogin = () => {
  return (
    <div className="flex flex-col justify-center h-full">
      <div className="max-w-6xl m-auto md:p-10 sm:p-7 p-5 flex sm:flex-row flex-col sm:space-x-10 sm:space-y-0 space-y-4 bg-white">
        <div className="flex flex-col justify-center">
          <Image src={LOGIN_COVER_URL} width={662} height={496} />
        </div>
        <div className="flex flex-col sm:justify-between sm:space-y-0 space-y-4">
          <div className="space-y-2">
            <div className="text-5xl font-bold text-black">Welcome! </div>
            <div className="text-gray-500">Read and share anything readable in ‘Readable’</div>
          </div>

          <div>
            <SocialLoginButton provider="google" />
          </div>
        </div>
      </div>
    </div>
  );
};
