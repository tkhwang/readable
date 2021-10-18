import Image from 'next/image';
import LogoImage from '../../../.storybook/assets/readable-logo.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LogoProps {}

export function Logo() {
  return (
    <div className="relative w-6 h-6">
      <Image src={LogoImage} alt="logo" layout="fill" />
    </div>
  );
}

export default Logo;
