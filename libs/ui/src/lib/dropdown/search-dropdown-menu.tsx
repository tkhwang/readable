import { FormWithUnderline } from '../form/form-with-underline';
import { useRouter } from 'next/router';

export interface SearchDropdownMenuProps {
  onClose: () => void;
}

export function SearchDropdownMenu({ onClose }: SearchDropdownMenuProps) {
  const router = useRouter();

  const handleSubmit = (inputValue: string) => {
    router.push({
      pathname: '/search',
      query: { query: inputValue },
    });

    onClose();
  };

  return (
    <div className="border-b-2 border-black absolute z-40 w-full py-4 px-24 bg-white ">
      <FormWithUnderline handleSubmit={handleSubmit} />
      <div className="py-4 font-bold">
        <div className="my-4 text-xl">Popular Searches</div>
        <div className="flex text-indigo-700">
          <div className="px-4 py-1 mr-4">Data Science</div>
          <div className="px-4 py-1 mr-4">Data Science</div>
          <div className="px-4 py-1 mr-4">Data Science</div>
          <div className="px-4 py-1 mr-4">Data Science</div>
        </div>
      </div>
    </div>
  );
}
