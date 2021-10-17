import Image, { ImageLoaderProps } from 'next/image';
import { CardOwner, ShadowCardHeader, Tag } from './shadow-card-header';
import { ShadowCardSummary } from './shadow-card-summary';
import { ShadowCardBottom } from './shadow-card-bottom';

type UrlInfo = {
  cardImageUrl: string;
  description: string;
  siteName: string;
  title: string;
  logoImageUrl: string;
};

export interface ShadowCardProps {
  urlInfo: UrlInfo;
  cardOwner: CardOwner;
  tags: Tag[];
  bookmarkersCount: number;
  readersCount: number;
}

export function SmallShadowCard({ urlInfo, cardOwner, tags, bookmarkersCount, readersCount }: ShadowCardProps) {
  const cardImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div className="group transform transition ease-in duration-150 shadow-offset-black hover:shadow-none hover:translate-x-1 hover:translate-y-1 min-w-min">
      <ShadowCardHeader cardOwner={cardOwner} tags={tags} />
      <div className="p-4 group-hover:bg-customGray-dark">
        <div className="flex justify-between -mx-2">
          <div className="mx-2 flex flex-col justify-between overflow-hidden flex-1">
            <ShadowCardSummary
              description={urlInfo.description}
              siteName={urlInfo.siteName}
              title={urlInfo.title}
              logoImageUrl={urlInfo.logoImageUrl}
            />
          </div>

          {/* Card Image */}
          <div className="mx-2 flex justify-end flex-1 sm:max-h-24">
            <Image
              loader={cardImageLoader}
              src={urlInfo.cardImageUrl}
              alt={`${urlInfo.siteName} Open Graph`}
              width={120}
              height={90}
              quality={100}
              objectFit="cover"
            />
          </div>
        </div>
        <ShadowCardBottom bookmarkersCount={bookmarkersCount} readersCount={readersCount} />
      </div>
    </div>
  );
}
