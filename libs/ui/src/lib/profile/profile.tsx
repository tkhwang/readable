import styled from 'styled-components';
import 'tailwindcss/tailwind.css';

/* eslint-disable-next-line */
export interface ProfileProps {}


export function Profile(props: ProfileProps) {
  return (
    
      <div className="py-8 px-8 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-2 sm:py-4 sm:flex sm:items-center sm:space-y-0 sm:space-x-6">
  <img className="block mx-auto h-24 rounded-full sm:mx-0 sm:flex-shrink-0" src="https://user-images.githubusercontent.com/68647194/123543522-e8228580-d789-11eb-8cb6-433b29a9d469.jpeg" alt="Woman's Face" />
  <div className="text-center space-y-2 sm:text-left">
    <div className="space-y-0.5">
      <p className="text-lg text-black font-semibold">
        Zinna Lee
      </p>
      <p className="text-gray-500 font-medium">
        Web Developer
      </p>
    </div>
    <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
  </div>
</div>

    
  );
}

export default Profile;
