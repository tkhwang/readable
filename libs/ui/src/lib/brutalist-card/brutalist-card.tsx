import cardImage from '../../../assets/card-cover.svg';

export interface BrutalistCardProps {}

export function BrutalistCard(props: BrutalistCardProps) {
  return (
    <div className="flex p-6 font-mono">
      <div className="flex-none w-40 relative">
        <img
          src={cardImage}
          alt=""
          className="absolute inset-0 w-full h-full object-cover border border-black shadow-offset-lime"
        />
      </div>
      <form className="flex-auto pl-6">
        <div className="flex flex-wrap items-baseline pl-52 -mt-6 -mr-6 -ml-52 py-6 pr-6 bg-black text-white">
          <h1 className="w-full flex-none text-2xl leading-7 mb-2 font-bold">Retro Shoe</h1>
          <div className="text-2xl leading-7 font-bold">$89.00</div>
          <div className="text-sm font-medium ml-3">In stock</div>
        </div>

        <div className="flex items-baseline py-8">
          <div className="space-x-3.5 flex text-center text-sm leading-none font-bold text-gray-500">
            <label>
              <input className="w-6 text-black shadow-underline" name="size" type="radio" value="xs" checked />
              XS
            </label>
            <label>
              <input className="w-6" name="size" type="radio" value="s" />S
            </label>
            <label>
              <input className="w-6" name="size" type="radio" value="m" />M
            </label>
            <label>
              <input className="w-6" name="size" type="radio" value="l" />L
            </label>
            <label>
              <input className="w-6" name="size" type="radio" value="xl" />
              XL
            </label>
          </div>
          <div className="ml-auto text-xs underline">Size Guide</div>
        </div>
        <div className="flex space-x-3 text-sm font-bold uppercase mb-4">
          <div className="flex-auto flex space-x-3">
            <button
              className="w-1/2 flex items-center justify-center bg-lime-300 text-black border border-black shadow-offset-black"
              type="submit"
            >
              Buy now
            </button>
            <button
              className="w-1/2 flex items-center justify-center border border-black shadow-offset-black"
              type="button"
            >
              Add to bag
            </button>
          </div>
          <button
            className="flex-none flex items-center justify-center w-9 h-9 border border-black"
            type="button"
            aria-label="like"
          >
            <svg width="20" height="20" fill="currentColor">
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
              />
            </svg>
          </button>
        </div>
        <p className="text-xs leading-5 text-gray-500">Free shipping on all continental US orders.</p>
      </form>
    </div>
  );
}

export default BrutalistCard;
