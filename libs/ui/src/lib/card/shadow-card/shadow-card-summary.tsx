import Image, { ImageLoaderProps } from 'next/image';
import { DEFAULT_FAVICON_IMAGE_URL } from '../../../const';

export interface ShadowCardSummaryProps {
  description: string;
  siteName: string;
  title: string;
  logoImageUrl?: string;
}

export function ShadowCardSummary({ description, siteName, title, logoImageUrl }: ShadowCardSummaryProps) {
  const logoImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div>
      <div className="flex items-center mb-3">
        <div className="mr-3 w-5 h-5 relative rounded-sm overflow-hidden">
          <Image
            loader={logoImageLoader}
            src={logoImageUrl ?? DEFAULT_FAVICON_IMAGE_URL}
            alt={`${siteName} Favicon`}
            layout="fill"
            objectFit="cover"
          />
        </div>
        <div className="text-xs line-clamp-1">{siteName}</div>
      </div>

      <div className="sm:text-xl font-bold mb-2 line-clamp-2 leading-snug">{title}</div>
      <div className="sm:block hidden line-clamp-2 max-h-10 text-gray-400">{description}</div>
    </div>
  );
}
