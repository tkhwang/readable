import Image from 'next/image';

export interface GroupCardImageProps {
  previewImageUrlList: string[];
}

export function GroupCardImage({ previewImageUrlList }: GroupCardImageProps) {
  return (
    <div className="flex space-x-1 sm:flex-basis-380px w-full sm:h-full h-28">
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
  );
}
