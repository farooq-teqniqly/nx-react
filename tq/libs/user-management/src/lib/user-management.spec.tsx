import { render } from '@testing-library/react';

import UserManagement from './user-management';

describe('UserManagement', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<UserManagement />);
    expect(baseElement).toBeTruthy();
  });
});
