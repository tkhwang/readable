// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface LoadingProps {}

export function Loading(props: LoadingProps) {
  return (
    <div className="relative h-20 py-5">
      <div className="absolute w-4 h-4 rounded-full bg-yellow-400 animate-bigBounce" />
      <div className="text-yellow-400 text-lg font-light align-text-top ml-8 tracking-widest">NOW LOADING</div>
    </div>
  );
}

export default Loading;
