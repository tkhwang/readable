import Image, { ImageLoaderProps } from 'next/image';

export interface ShadowCardSummaryProps {
  description: string;
  siteName: string;
  title: string;
  logoImageUrl: string;
}

export function ShadowCardSummary({ description, siteName, title, logoImageUrl }: ShadowCardSummaryProps) {
  const logoImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <div>
      <div className="flex items-center mb-3">
        <div className="w-5 h-5 mr-3 rounded-sm overflow-hidden flex-shrink-0">
          <Image
            loader={logoImageLoader}
            src={logoImageUrl}
            alt={`${siteName} Favicon`}
            objectFit="cover"
            width={20}
            height={20}
          />
        </div>
        <div className="text-xs line-clamp-1">{siteName}</div>
      </div>

      <div className="sm:text-xl font-bold mb-2 line-clamp-2 leading-snug">{title}</div>
      <div className="sm:block hidden line-clamp-2 max-h-10 text-gray-400">{description}</div>
    </div>
  );
}
