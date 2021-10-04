import { SearchIcon } from '@heroicons/react/solid';
import { useRef } from 'react';

export type FormWithUnderlineProps = {
  inputValue?: string;
  handleSubmit?: (inputValue: string) => void;
};

export function FormWithUnderline({ inputValue, handleSubmit }: FormWithUnderlineProps) {
  const inputRef = useRef<HTMLInputElement>(null);

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (inputRef.current) {
      handleSubmit && handleSubmit(inputRef.current.value ?? '');
    }
  };

  return (
    <form onSubmit={onSubmit} className="w-full">
      <div className="flex items-center border-b border-gray-500">
        <button className="flex-shrink-0  py-1 px-2" type="button">
          <SearchIcon className="w-10 h-10 text-gray-500" />
        </button>
        <input
          ref={inputRef}
          className="appearance-none bg-transparent border-none w-full  mr-3 py-1 px-2 leading-tight focus:outline-none text-3xl font-bold"
          type="text"
          placeholder="Search"
          aria-label="Search Keyword"
          value={inputValue}
        />
      </div>
    </form>
  );
}
