import Image, { ImageLoaderProps } from 'next/image';

export interface GroupCardImageProps {
  previewImageUrlList: string[];
}

export function GroupCardImage({ previewImageUrlList }: GroupCardImageProps) {
  const previewImageLoader = ({ src, width, quality }: ImageLoaderProps) => {
    return `${src}?w=${width}&q=${quality || 75}`;
  };

  return (
    <>
      {previewImageUrlList.length === 3 && (
        <div className="flex space-x-1 sm:flex-basis-380px w-full sm:h-screen-16.25w h-28 max-h-52">
          <div className="w-1/2 relative transition-width duration-500 ease-in-out hover:w-full">
            <Image loader={previewImageLoader} src={previewImageUrlList[0]} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="w-1/4 relative transition-width duration-500 ease-in-out hover:w-full">
            2<Image loader={previewImageLoader} src={previewImageUrlList[1]} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="w-1/4 relative transition-width duration-500 ease-in-out hover:w-full">
            <Image loader={previewImageLoader} src={previewImageUrlList[2]} layout="fill" objectFit="cover"></Image>
          </div>
        </div>
      )}
      {previewImageUrlList.length === 2 && (
        <div className="flex space-x-1 sm:flex-basis-380px w-full sm:h-screen-16.25w h-28 max-h-52">
          <div className="w-1/2 relative transition-width duration-500 ease-in-out hover:w-full">
            <Image loader={previewImageLoader} src={previewImageUrlList[0]} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="w-1/2 relative transition-width duration-500 ease-in-out hover:w-full">
            2<Image loader={previewImageLoader} src={previewImageUrlList[1]} layout="fill" objectFit="cover"></Image>
          </div>
        </div>
      )}
      {previewImageUrlList.length === 1 && (
        <div className="flex space-x-1 sm:flex-basis-380px w-full sm:h-screen-16.25w h-28 max-h-52">
          <div className="w-full relative">
            <Image loader={previewImageLoader} src={previewImageUrlList[0]} layout="fill" objectFit="cover"></Image>
          </div>
        </div>
      )}
    </>
  );
}
