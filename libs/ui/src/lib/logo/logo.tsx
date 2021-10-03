import Image from 'next/image';
import LogoImage from '../../../assets/readable-logo.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LogoProps {}

export function Logo() {
  return (
    <div className="relative w-8 h-8">
      <Image src={LogoImage} alt="logo" layout="fill" />
    </div>
  );
}

export default Logo;
