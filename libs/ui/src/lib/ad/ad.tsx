/* eslint-disable-next-line */
export interface AdProps {}

export function Ad(props: AdProps) {
  return (
    <div className="bg-gray-50 rounded-xl border my-3 w-full">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:py-12 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
          <span className="block text-indigo-600 overflow-ellipsis">Made with Tailwind CSS!</span>
        </h2>
      </div>
    </div>
  );
}

export default Ad;
