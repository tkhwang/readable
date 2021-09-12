import Image from 'next/image';
import CardImage from '../../../assets/card_sample.svg';
import { BookmarkIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { BookmarkIcon as BookmarkOutlineIcon, BadgeCheckIcon } from '@heroicons/react/outline';
import { Avatar } from '@readable/ui';
import ProfileImage from '../../../assets/Fernando_Pidrilio.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ShadowCardProps {}

export function ShadowCard(props: ShadowCardProps) {
  return (
    <div className="shadow-offset-black overflow-hidden">
      {/* Header */}
      <div className="flex p-4 bg-gray-900 justify-between items-center">
        <div className="flex items-center">
          <Avatar profileImage={ProfileImage} />
          <div className="text-white ml-2">
            <div className="text-xs">@20min</div>
            <div className="text-xs font-thin">10min ago</div>
          </div>
        </div>
        <div className="flex space-x-5">
          <div>
            <BookmarkIcon className="text-gray-400 w-5 h-5" />
          </div>
          <div>
            <DotsVerticalIcon className="text-gray-400 w-5 h-5"></DotsVerticalIcon>
          </div>
        </div>
      </div>
      {/* Contents */}
      <div className="p-4 bg-red-400 opacity-90">
        <div className="flex justify-between -mx-2 ">
          <div className="mx-2">
            <div className="text-white font-light text-xs">UX Design</div>
            <div className="text-white font-bold break-words overflow-hidden line-clamp-3">
              Announcing Coinbase’s successful transition to React Native test test test
            </div>
            <div className="text-white text-xs mt-2">#design</div>
          </div>
          <div className="w-44 h-44 relative flex-shrink-0 mx-2 overflow-hidden rounded-sm ">
            <Image src={CardImage} alt="" layout="fill"></Image>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="py-3 px-4 bg-red-400 flex flex-wrap justify-between items-center text-white text-xs">
        <div className="flex items-center">
          <div className="border-2 w-5 h-5" />
          <div className="ml-3">Siteinspire</div>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex items-center">
            <BookmarkOutlineIcon className="w-5 h-5 " />
            <div className="ml-1">2,890 marks</div>
          </div>

          <div className="flex items-center">
            <BadgeCheckIcon className="w-5 h-5 " />
            <div className="ml-1">1,594 reads</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShadowCard;
