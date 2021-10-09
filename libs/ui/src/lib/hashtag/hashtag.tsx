export interface HashtagProps {
  children: string;
}

export function Hashtag({ children }: HashtagProps) {
  return (
    <button className="border-1 py-1 px-3 rounded-3xl">
      <div className="text-sm leading-tight">#{children}</div>
    </button>
  );
}
