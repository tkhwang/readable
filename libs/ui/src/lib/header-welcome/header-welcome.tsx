import { DotsVerticalIcon } from '@heroicons/react/solid';
import Link from 'next/link';

/* eslint-disable-next-line */
export type HeaderWelcomeProps = {};

export function HeaderWelcome(props: HeaderWelcomeProps) {
  return (
    <header className="fixed w-full bg-indigo-700 py-4 px-6 flex justify-between items-center">
      <div className="flex items-center">
        {/* TODO(zlrlo): 이미지 변경 필요  */}
        <img
          src="https://user-images.githubusercontent.com/68647194/127772307-cf53bb0e-e6db-481a-8808-372cca0f2b42.png"
          alt="logo"
        />
        <div className="ml-2 text-white text-lg font-medium">Readable</div>
      </div>

      <div className="flex items-center">
        <Link href="/login">
          <a className="bg-white rounded-sm px-4 py-2 font-bold text-indigo-900 mr-5">Sign in</a>
        </Link>
        <DotsVerticalIcon className="h-5 w-5 text-white" />
      </div>
    </header>
  );
}

export default HeaderWelcome;
