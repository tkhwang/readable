import Image, { ImageLoaderProps } from 'next/image';
import { CardOwner, ShadowCardHeader, Tag } from './shadow-card-header';
import { ShadowCardSummary } from './shadow-card-summary';
import { ShadowCardBottom } from './shadow-card-bottom';
import { DEFAULT_CARD_COVER_IMAGE_URL } from '../../../const';

type UrlInfo = {
  cardImageUrl?: string;
  description: string;
  siteName: string;
  title: string;
  logoImageUrl?: string;
};

export interface ShadowCardProps {
  urlInfo: UrlInfo;
  cardOwner: CardOwner;
  tags: Tag[];
  bookmarkersCount: number;
  readersCount: number;
}

export function ShadowCard({ urlInfo, cardOwner, tags, bookmarkersCount, readersCount }: ShadowCardProps) {
  const cardImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="group transform transition ease-in duration-150 shadow-offset-black hover:shadow-none hover:translate-x-1 hover:translate-y-1">
      <ShadowCardHeader cardOwner={cardOwner} tags={tags} />
      <div className="p-4 group-hover:bg-customGray-dark">
        <div className="flex justify-between -mx-2">
          <div className="mx-2 flex flex-col justify-between overflow-hidden flex-1">
            <ShadowCardSummary
              description={urlInfo.description}
              siteName={urlInfo.title}
              title={urlInfo.title}
              logoImageUrl={urlInfo.logoImageUrl}
            />
            <ShadowCardBottom bookmarkersCount={bookmarkersCount} readersCount={readersCount} />
          </div>

          {/* Card Image */}
          <div className="mx-2 flex justify-end flex-shrink-0 sm:w-52 md:w-full w-40 flex-1">
            <Image
              loader={cardImageLoader}
              src={urlInfo.cardImageUrl ?? DEFAULT_CARD_COVER_IMAGE_URL}
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
