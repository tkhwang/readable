import { render } from '@testing-library/react';

import FeedFeatureBookmark from './feed-feature-bookmark';

describe('FeedFeatureBookmark', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeedFeatureBookmark />);
    expect(baseElement).toBeTruthy();
  });
});
