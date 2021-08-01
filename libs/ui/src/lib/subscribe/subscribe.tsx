/* eslint-disable-next-line */
export interface SubscribeProps {}

export function Subscribe(props: SubscribeProps) {
  return (
    <form>
      <input
        placeholder="ENTER YOUR EMAIL"
        className="border border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent p-2 rounded-sm mr-1.5"
      />
      <button className="bg-indigo-700 hover:bg-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-700 focus:ring-opacity-50 py-2 px-3.5 rounded-sm text-white">
        SUBSCRIBE
      </button>
    </form>
  );
}

export default Subscribe;
