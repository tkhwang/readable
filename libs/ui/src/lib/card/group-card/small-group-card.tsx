import { ArrowCircleRightIcon } from '@heroicons/react/solid';
import Image from 'next/image';

export interface SmallGroupCardProps {
  previewImageUrlList: string[];
}

export function SmallGroupCard({ previewImageUrlList }: SmallGroupCardProps) {
  return (
    <div className="md:p-6 sm:p-4 p-6 flex flex-col justify-between sm:h-screen-23w sm:max-h-72 sm:space-y-0 space-y-20">
      <div className="flex items-baseline flex-col sm:space-y-1 space-y-2">
        <div className="flex justify-between items-center w-full">
          <div className="md:text-xl sm:text-base text-2xl font-semibold">UX Design</div>
          <button className="block">
            <ArrowCircleRightIcon className="w-5 h-5" />
          </button>
        </div>

        <div className="md:text-sm sm:text-xs text-sm">540 marks</div>
      </div>

      <div className="flex space-x-1 w-full sm:h-screen-10w sm:max-h-32 h-28">
        <div className="w-1/2 relative transition-width duration-500 ease-in-out hover:w-full">
          <Image src={previewImageUrlList[0]} layout="fill" objectFit="cover"></Image>
        </div>
        <div className="w-1/4 relative transition-width duration-500 ease-in-out hover:w-full">
          2<Image src={previewImageUrlList[1]} layout="fill" objectFit="cover"></Image>
        </div>
        <div className="w-1/4 relative transition-width duration-500 ease-in-out hover:w-full">
          <Image src={previewImageUrlList[2]} layout="fill" objectFit="cover"></Image>
        </div>
      </div>
    </div>
  );
}
