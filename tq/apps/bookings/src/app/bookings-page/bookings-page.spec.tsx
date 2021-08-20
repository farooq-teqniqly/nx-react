import { render } from '@testing-library/react';

import BookingsPage from './bookings-page';

describe('BookingsPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookingsPage />);
    expect(baseElement).toBeTruthy();
  });
});
