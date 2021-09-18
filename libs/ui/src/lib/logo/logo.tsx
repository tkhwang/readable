import Image from 'next/image';
import LogoImage from '../../../assets/readable-logo.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LogoProps {}

export function Logo() {
  return (
    <div className="flex items-center">
      <div className="relative w-11 h-11">
        <Image src={LogoImage} alt="logo" layout="fill" />
      </div>
      <div className="text-white text-xl font-semibold hidden lg:block">Readable</div>
    </div>
  );
}

export default Logo;
