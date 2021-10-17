import Image from 'next/image';
import cardPatternImage from '../../../.storybook/assets/card_pattern.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ActionCardProps {}

export function ActionCard(props: ActionCardProps) {
  return (
    <div className="bg-gray-900 px-9 py-5 h-72 flex flex-col justify-between relative">
      <div className="text-white">
        <div className="font-bold text-2xl">UX</div>
        <div>540 marks</div>
      </div>

      <div className="flex">
        <button className="bg-white px-4 py-2 rounded-3xl">more</button>
      </div>

      <div className="absolute bottom-0 right-0 w-1/2 h-2/3">
        <Image src={cardPatternImage} layout="fill"></Image>
      </div>
    </div>
  );
}

export default ActionCard;
