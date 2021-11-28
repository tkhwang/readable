import { LOGIN_BG_SPRING_URL, LOGIN_BG_STAR_URL, LOGIN_COVER_URL } from '@readable/shared/util-common';
import Image from 'next/image';
import { SocialLoginButton } from './social-login-button';

export const FeatureLogin = () => {
  return (
    <div className="relative flex flex-col justify-center h-full overflow-hidden">
      <div className="mx-10">
        <div className="relative max-w-6xl m-auto">
          {/* background image */}
          <div className="absolute -top-24 -right-32 w-56 h-60">
            <Image src={LOGIN_BG_STAR_URL} layout="fill" />
          </div>

          <div className="absolute -bottom-60 -left-72">
            <Image src={LOGIN_BG_SPRING_URL} width={626} height={403} />
          </div>

          <div className="relative md:p-10 sm:p-7 p-5 flex sm:flex-row flex-col sm:space-y-0 space-y-4 bg-white border-2 border-black">
            <div className="flex flex-col justify-center rounded-sm overflow-hidden">
              <Image src={LOGIN_COVER_URL} width={662} height={496} />
            </div>
            <div className="flex flex-col sm:justify-between sm:space-y-0 space-y-4 flex-shrink-0 sm:ml-10 ">
              <div>
                <div className="lg:text-5xl md:text-4xl sm:text-2xl text-2xl font-bold text-black">
                  Use Readable <br /> for free!
                </div>
                <div className="lg:text-xl lg:my-3 sm:my-2 sm:text-sm text-xs my-2 text-gray-500">
                  Read and share anything readable <br />
                  in ‘Readable’
                </div>
              </div>

              <div>
                {/* TODO(zlrlo): 커스텀 버튼으로 변경하기 */}
                <SocialLoginButton provider="google" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
