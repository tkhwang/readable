import { render } from '@testing-library/react';

import DataAccessLogin from './data-access-login';

describe('DataAccessLogin', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<DataAccessLogin />);
    expect(baseElement).toBeTruthy();
  });
});
