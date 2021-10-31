import {
  DEFAULT_BADGE_1K_IMAGE_URL,
  DEFAULT_BADGE_HEART_IMAGE_URL,
  DEFAULT_PROFILE_IMAGE_URL,
  DEFAULT_PROFILE_PATTERN_URL,
} from '@readable/shared/util-common';
import { Profile } from '@readable/ui';

export const CollectionProfile = () => {
  return (
    <Profile
      backgroundImageUrl={DEFAULT_PROFILE_PATTERN_URL}
      badges={[{ imageUrl: DEFAULT_BADGE_HEART_IMAGE_URL }, { imageUrl: DEFAULT_BADGE_1K_IMAGE_URL }]}
      profileImageUrl={DEFAULT_PROFILE_IMAGE_URL}
    />
  );
};
