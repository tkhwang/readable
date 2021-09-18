import { Avatar, DropdownMenu } from '@readable/ui';
import { ReactComponent as Logo } from '../assets/logo.svg';

export const CollectionHeader = () => {
  return (
    <div className="p-3 flex justify-between items-center">
      <Logo></Logo>
      <div>
        {/* TODO(지나): 이미지 변경 필요 */}
        <DropdownMenu
          renderMenuButton={() => (
            <Avatar
              profileImage={
                'https://user-images.githubusercontent.com/68647194/130825774-869b3444-daa9-4101-a306-605d210d0aea.jpg'
              }
            />
          )}
        >
          menu
        </DropdownMenu>
      </div>
    </div>
  );
};
