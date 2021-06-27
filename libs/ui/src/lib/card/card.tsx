import styled from 'styled-components';
import 'tailwindcss/tailwind.css';

/* eslint-disable-next-line */
export interface CardProps {}

export function Card(props: CardProps) {
  return (
  <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4">
    <div className="flex-shrink-0">
    <img className="h-12 w-12" src="https://user-images.githubusercontent.com/68647194/123543522-e8228580-d789-11eb-8cb6-433b29a9d469.jpeg" alt="ChitChat Logo" />
  </div>
  <div>
    <div className="text-xl font-medium text-black">ChitChat</div>
    <p className="text-gray-500">You have a new message!</p>
  </div>
</div>

  );
}

export default Card;
