import { render } from '@testing-library/react';

import BookmarkFeatureFeed from './bookmark-feature-feed';

describe('BookmarkFeatureFeed', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookmarkFeatureFeed />);
    expect(baseElement).toBeTruthy();
  });
});
