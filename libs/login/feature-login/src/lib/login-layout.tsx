import { LOGIN_BG_SPRING_URL, LOGIN_BG_STAR_URL } from '@readable/shared/util-common';
import Image from 'next/image';

interface LoginLayoutProps {
  children: JSX.Element;
}

export const LoginLayout = ({ children }: LoginLayoutProps) => {
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

          <div className="relative md:p-10 sm:p-7 p-5 bg-white border-2 border-black">{children}</div>
        </div>
      </div>
    </div>
  );
};
