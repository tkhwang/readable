import Image from 'next/image';


export interface ProfileProps {
  backgroundImageUrl: string;
  profileImageUrl: string;
}

export function Profile({ backgroundImageUrl, profileImageUrl }: ProfileProps) {
  return (
    <div style={{ backgroundImage: `url(${backgroundImageUrl})` }} className="w-full h-80 bg-green-600 flex px-4 pt-5">
      <div className="lg:w-2/3 w-full z-10">
        <div className="bg-white shadow-offset-black p-5 flex space-x-5 text-black">
          <div className="w-32 h-32 relative flex-shrink-0">
            <Image src={profileImageUrl} layout="fill" objectFit="cover"></Image>
          </div>
          <div className="flex flex-col justify-between w-full">
            <div>
              <div className="text-2xl font-bold">@20min</div>
              <div className="text-xs">Product designer at @Readable</div>
            </div>

            <div className="flex justify-between">
              <div className="flex space-x-9">
                <div className="flex flex-col">
                  <div className="text-xs">follower</div>
                  <div>999</div>
                </div>
                <div className="flex flex-col">
                  <div className="text-xs">follower</div>
                  <div>999</div>
                </div>
              </div>

              <div className="border-1 border-black text-xs px-4 py-2 rounded-3xl">Follwer</div>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:flex hidden flex-col justify-end pr-3 w-1/3 relative ">
        <div className="w-72 h-52 absolute right-0 border-2 border-black border-dashed bg-green-700 shadow-offset-black"></div>
      </div>
    </div>
  );
}

export default Profile;
