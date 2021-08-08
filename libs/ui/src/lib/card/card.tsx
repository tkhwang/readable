import { DotsVerticalIcon } from '@heroicons/react/solid';
import Link from 'next/link';

/* eslint-disable-next-line */
export type CardProps = {};

export function Card(props: CardProps) {
  return (
    <div className="max-w-md bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-44 w-full object-cover md:w-48"
            src="https://user-images.githubusercontent.com/68647194/125168170-056e3f80-e1df-11eb-8af8-de5395e38480.JPG"
            alt="Man looking at item at a store"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Case study</div>
          <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">
            Finding customers for your new business
          </a>
          <p className="mt-2 text-gray-500">
            Getting a new business off the ground is a lot of hard work. Here are five ideas you can use to find your
            first customers.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Card;
