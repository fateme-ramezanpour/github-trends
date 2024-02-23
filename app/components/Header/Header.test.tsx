import { render, screen } from '@testing-library/react';
import Header from '../Header/Header';

describe('render Header component', () => {
  it('render icon', () => {
    render(<Header />);
    
    const logoImage = screen.getByAltText('Github logo');
    expect(logoImage).toBeInTheDocument();
  });
})