import { render } from '@testing-library/react';
import H1 from './H1';

describe('render H1 component', () => {
  it('render text', () => {
    const { getByText } = render(
      <H1>test</H1>
    );
    expect(getByText('test')).toBeInTheDocument();
  });
})