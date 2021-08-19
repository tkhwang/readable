import { Subscribe, WelcomeHeader } from '@readable/ui';

/* eslint-disable-next-line */
export type ComingSoonPageProps = {};

export const FeatureComingSoon = (props: ComingSoonPageProps) => {
  return (
    <>
      <div className="h-screen">
        <WelcomeHeader />
        <main className="bg-indigo-600 flex flex-col items-center justify-center h-full">
          <div className="flex-shrink h-80 p-12 flex flex-col items-center justify-center">
            <h1 className="text-5xl font-extrabold text-white mb-1">Coming Soon</h1>
            <h2 className="text-white mb-10">Read and share anything readable in ‘Readable’</h2>
            <Subscribe />
          </div>
          <div className="flex w-96 h-80">
            {/* TODO(zlrlo): 이미지 변경 필요 */}
            <img
              src="https://user-images.githubusercontent.com/68647194/127771019-d360b9e7-0a55-43fc-84f1-e5a76abc5d7a.png"
              alt=""
            />
          </div>
        </main>
      </div>
    </>
  );
};
