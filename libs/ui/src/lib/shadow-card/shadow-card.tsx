import CardImage from '../../../assets/card_sample.svg';
import { BookmarkIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { BookmarkIcon as BookmarkOutlineIcon, BadgeCheckIcon } from '@heroicons/react/outline';
import Avatar from '../avatar/avatar';
import Image, { ImageLoaderProps } from 'next/image';

export interface ShadowCardProps {
  cardImageUrl?: string;
  description: string;
  siteName: string;
  profileImageUrl?: string;
  tags?: { id: string; name: string }[];
  index: number;
}

export function ShadowCard({ cardImageUrl, description, siteName, profileImageUrl, tags, index }: ShadowCardProps) {
  const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const COLOR_NUMBER = 8;
  const randomNumber = index % COLOR_NUMBER;

  return (
    <div className="shadow-offset-black overflow-hidden">
      {/* Header */}
      <div className="flex p-4 bg-gray-900 justify-between items-center">
        <div className="flex items-center">
          <Avatar profileImage={profileImageUrl} />
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
      <div
        className={`p-4 opacity-90 ${randomNumber === 0 && 'bg-gray-400'} ${randomNumber === 1 && 'bg-red-400'} ${
          randomNumber === 2 && 'bg-yellow-400'
        } ${randomNumber === 3 && 'bg-green-400'} ${randomNumber === 4 && 'bg-blue-400'} ${
          randomNumber === 5 && 'bg-indigo-400'
        } ${randomNumber === 6 && 'bg-purple-400'} ${randomNumber === 7 && 'bg-pink-400'}`}
      >
        <div className="flex -mx-2">
          {/* 내용 영역 */}
          <div className="w-3/5 mx-2">
            <div className="text-white font-light text-xs">UX Design</div>
            <div className="text-white font-bold break-word overflow-hidden line-clamp-3 mb-2">{description}</div>
            <div className="flex flex-wrap">
              {tags?.map(({ id, name }) => (
                <div key={id} className="text-white text-xs px-0.5">
                  #{name}
                </div>
              ))}
            </div>
          </div>
          {/* 이미지 영역 */}
          <div className="flex-1 mx-2 flex justify-end">
            <div className="overflow-hidden rounded-sm">
              {/* TODO(zlrlo): default 이미지 작업 필요함 */}
              <Image
                loader={myLoader}
                src={cardImageUrl ?? CardImage}
                alt=""
                width={176}
                height={176}
                quality={100}
                objectFit="cover"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div
        className={`py-3 px-4 flex flex-wrap justify-between items-center text-white text-xs ${
          randomNumber === 0 && 'bg-gray-400'
        } ${randomNumber === 1 && 'bg-red-400'} ${randomNumber === 2 && 'bg-yellow-400'} ${
          randomNumber === 3 && 'bg-green-400'
        } ${randomNumber === 4 && 'bg-blue-400'} ${randomNumber === 5 && 'bg-indigo-400'} ${
          randomNumber === 6 && 'bg-purple-400'
        } ${randomNumber === 7 && 'bg-pink-400'}`}
      >
        <div className="flex items-center">
          <div className="border-2 rounded-md w-5 h-5" />
          <div className="ml-2">{siteName}</div>
        </div>
        <div className="flex items-center space-x-5">
          {/* TODO(zlrlo): 북마크 수, 읽은 사람 수 작업 필요 */}
          {/* <div className="flex items-center">
            <BookmarkOutlineIcon className="w-5 h-5 " />
            <div className="ml-1">2,890 marks</div>
          </div>

          <div className="flex items-center">
            <BadgeCheckIcon className="w-5 h-5 " />
            <div className="ml-1">1,594 reads</div>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default ShadowCard;
