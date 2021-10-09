import { BookmarkAltIcon, BookmarkIcon, DotsVerticalIcon } from '@heroicons/react/solid';
import { BadgeCheckIcon } from '@heroicons/react/outline';
import { Avatar } from '../avatar/avatar';
import Image, { ImageLoaderProps } from 'next/image';
import { Hashtag } from '../hashtag/hashtag';

type UrlInfo = {
  cardImageUrl: string;
  description: string;
  siteName: string;
  title: string;
  logoImageUrl: string;
};

type CardOwner = {
  profileImageUrl: string;
  name: string;
};

type Tag = {
  id: string;
  name: string;
};
export interface ShadowCardProps {
  urlInfo: UrlInfo;
  cardOwner: CardOwner;
  tags: Tag[];
  bookmarkersCount: number;
  readersCount: number;
}

export function ShadowCard({ urlInfo, cardOwner, tags, bookmarkersCount, readersCount }: ShadowCardProps) {
  const logoImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  const cardImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="group transform transition ease-in duration-150 shadow-offset-black hover:shadow-none hover:translate-x-1 hover:translate-y-1">
      {/* Header */}
      <div className="flex py-4 px-5 bg-customGray-dark justify-between items-center">
        <div className="flex items-center">
          <Avatar profileImage={cardOwner.profileImageUrl} size="xs" />
          <div className="ml-2 flex items-center text-xs flex-shrink-0">
            <div>@{cardOwner.name}</div>
            <div className="sm:block hidden text-gray-400 ml-1 flex-shrink-0">marked 10min ago</div>
          </div>
        </div>
        <div className="flex space-x-4 items-center">
          <div className="space-x-2 hidden lg:block">
            {tags?.slice(0, 2).map(({ id, name }) => {
              return <Hashtag key={id}>{name}</Hashtag>;
            })}
          </div>
          <div>
            <DotsVerticalIcon className="text-gray-400 w-5 h-5"></DotsVerticalIcon>
          </div>
          <div>
            <BookmarkIcon className="text-indigo-600 w-5 h-5" />
          </div>
        </div>
      </div>
      {/* Contents */}
      <div className="p-4 group-hover:bg-customGray-dark">
        <div className="flex justify-between -mx-2">
          {/* Summary of the site */}
          <div className="mx-2 flex flex-col justify-between overflow-hidden flex-1">
            <div>
              <div className="flex items-center mb-3">
                <div className="mr-3 w-5 h-5 relative rounded-sm overflow-hidden">
                  <Image
                    loader={logoImageLoader}
                    src={urlInfo.logoImageUrl}
                    alt={`${urlInfo.siteName} Favicon`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
                <div className="text-xs line-clamp-1">{urlInfo.siteName}</div>
              </div>

              <div className="sm:text-xl font-bold mb-2 line-clamp-2 leading-snug">{urlInfo.title}</div>
              <div className="sm:block hidden line-clamp-2 max-h-10 text-gray-400">{urlInfo.description}</div>
            </div>

            <div className="flex text-xs pt-4">
              <div className="hidden sm:flex mr-2">
                <div>Jul 1, 2020</div>
                <div className="ml-1">&#183;</div>
              </div>
              <div className="flex items-center mr-2">
                <BookmarkAltIcon className="w-3 h-3" />
                <div className="ml-1 flex items-center">
                  {bookmarkersCount} <div className="hidden md:block ml-1">marks</div>
                </div>
                <div className="ml-1">&#183;</div>
              </div>
              <div className="flex items-center">
                <BadgeCheckIcon className="w-3 h-3" />
                <div className="ml-1 flex items-center">
                  {readersCount} <div className="hidden md:block ml-1">reads</div>
                </div>
              </div>
            </div>
          </div>

          {/* Card Image */}
          <div className="mx-2 flex justify-end flex-shrink-0 sm:w-52 md:w-full w-40 flex-1">
            <Image
              loader={cardImageLoader}
              src={urlInfo.cardImageUrl}
              alt={`${urlInfo.siteName} Open Graph`}
              width={320}
              height={180}
              quality={100}
              objectFit="cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShadowCard;
