import profileBackground from '../../../assets/profile_bg.svg';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface ProfileProps {}

export function Profile(props: ProfileProps) {
  return (
    <div className="relative">
      <div className="bg-green-300 h-72" />
      <div style={{ backgroundImage: `url(${profileBackground})` }} className="w-full h-72 absolute top-0" />
      <div className="absolute top-0 p-5 border-2 w-full h-full">
        <div className="flex bg-white space-x-4 w-3/5 min-w-min p-5">
          <div className="border-2 w-32 flex-shrink-0">사진</div>
          <div className="border-2 flex flex-col justify-between w-full">
            <div className="flex flex-col">
              <div className="text-2xl font-bold">@20min</div>
              <div className="text-xs">Product designer at @Readable</div>
            </div>
            <div className="flex">
              {/* <div>follower</div>
            <div>following</div>
            <div>follow</div> */}
            </div>
          </div>
        </div>

        <div className="absolute right-5 bottom-0 border-t-2 border-l-2 border-r-2 border-black border-dashed p-7 bg-green-700 text-white flex flex-col justify-end h-44 w-64 shadow-offset-black">
          <p className="text-right">I have 3 Interests</p>
          <p className="text-right">I got 2,890 bookmarks</p>
          <p className="text-right">I read 1,598 readable</p>
        </div>
      </div>
    </div>
  );
}

export default Profile;
