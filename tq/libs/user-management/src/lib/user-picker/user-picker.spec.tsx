import { render } from '@testing-library/react';

import UserPicker from './user-picker';

describe('UserPicker', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserPicker />);
    expect(baseElement).toBeTruthy();
  });
});
