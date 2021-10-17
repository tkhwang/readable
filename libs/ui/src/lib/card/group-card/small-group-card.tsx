import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import cardPreview from '../../../../.storybook/assets/card_cover_default.svg';
import Image from 'next/image';

export interface SmallGroupCardProps {}

export function SmallGroupCard(props: SmallGroupCardProps) {
  return (
    <div className="p-6 flex flex-col justify-between h-full">
      <div className="flex items-baseline flex-col space-y-2">
        <div className="flex justify-between items-center w-full">
          <div className="text-2xl font-semibold">UX Design</div>
          <button className="block">
            <ArrowCircleRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="text-sm">540 marks</div>
      </div>

      <div className="flex space-x-1 w-full h-32">
        <div className="w-1/2 relative transition-width duration-500 ease-in-out hover:w-full">
          <Image src={cardPreview} layout="fill" objectFit="cover"></Image>
        </div>
        <div className="w-1/4 relative transition-width duration-500 ease-in-out hover:w-full">
          2<Image src={cardPreview} layout="fill" objectFit="cover"></Image>
        </div>
        <div className="w-1/4 relative transition-width duration-500 ease-in-out hover:w-full">
          <Image src={cardPreview} layout="fill" objectFit="cover"></Image>
        </div>
      </div>
    </div>
  );
}
