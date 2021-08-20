import { render } from '@testing-library/react';

import BookablesPage from './bookables-page';

describe('BookablesPage', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<BookablesPage />);
    expect(baseElement).toBeTruthy();
  });
});
