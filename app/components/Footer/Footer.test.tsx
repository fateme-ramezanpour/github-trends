import { render, screen } from '@testing-library/react';
import Footer from './Footer';

describe('render Footer component', () => {
  it('render copyright text', () => {
    render(<Footer />);
    expect(
      screen.getByText('© 2024 Your Company Name. All rights reserved.')
    ).toBeInTheDocument();
  });
})