import { DEFAULT_CARD_COVER_IMAGE_URL } from '@readable/shared/util-common';
import { Profile } from '@readable/ui';

export const CollectionProfile = () => {
  return <Profile backgroundImageUrl={'/images/pattern/dot.svg'} profileImageUrl={DEFAULT_CARD_COVER_IMAGE_URL} />;
};
