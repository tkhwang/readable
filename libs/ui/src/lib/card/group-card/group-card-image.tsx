import cardPreview from '../../../../.storybook/assets/card_cover_default.svg';
import Image from 'next/image';

export interface GroupCardImageProps {}

export function GroupCardImage(props: GroupCardImageProps) {
  return (
    <div className="flex space-x-1 md:w-96 md:h-52 sm:w-64 h-32 w-full">
      <div className="w-1/2 relative transition-width duration-500 ease-in-out hover:w-full">
        <Image src={cardPreview} layout="fill" objectFit="cover"></Image>
      </div>
      <div className="w-1/4 relative transition-width duration-500 ease-in-out hover:w-full">
        2<Image src={cardPreview} layout="fill" objectFit="cover"></Image>
      </div>
      <div className="w-1/4 relative transition-width duration-500 ease-in-out hover:w-full">
        <Image src={cardPreview} layout="fill" objectFit="cover"></Image>
      </div>
    </div>
  );
}
