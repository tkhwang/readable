import { render } from '@testing-library/react';

import ClientFeatureHome from './client-feature-home';

describe('ClientFeatureHome', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ClientFeatureHome />);
    expect(baseElement).toBeTruthy();
  });
});
