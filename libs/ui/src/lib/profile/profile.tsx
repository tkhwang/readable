import { ProfileCard } from './profile-card';
import { ProfileDashboard } from './profile-dashboard';
export interface ProfileProps {
  backgroundImageUrl: string;
  profileImageUrl: string;
  bedgeImageUrl: string;
}

export function Profile({ backgroundImageUrl, profileImageUrl, bedgeImageUrl }: ProfileProps) {
  return (
    <div
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
      className="w-full bg-indigo-500 flex md:flex-row flex-col justify-between pl-4 md:pr-8 pr-4 md:space-x-4 pt-5"
    >
      <div className="md:w-7/12 md:mb-9">
        <ProfileCard profileImageUrl={profileImageUrl} bedgeImageUrl={bedgeImageUrl} />
      </div>

      <div className="md:w-5/12 w-full flex md:flex-col md:justify-end">
        <ProfileDashboard bedgeImageUrl={bedgeImageUrl} />
      </div>
    </div>
  );
}

export default Profile;
