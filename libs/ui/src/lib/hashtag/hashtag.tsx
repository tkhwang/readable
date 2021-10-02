export interface HashtagProps {
  children: string;
}

export function Hashtag({ children }: HashtagProps) {
  return (
    <button className="border-2 py-1 px-4 rounded-3xl bg-gray-700">
      <div className="text-gray-300 text-sm font-light">#{children}</div>
    </button>
  );
}
