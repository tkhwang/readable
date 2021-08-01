import { render } from '@testing-library/react';

import FeatureCommingSoon from './feature-comming-soon';

describe('FeatureCommingSoon', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<FeatureCommingSoon />);
    expect(baseElement).toBeTruthy();
  });
});
