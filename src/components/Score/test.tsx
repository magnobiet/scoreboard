import { render, screen } from '@testing-library/react';
import Score, { Side } from '.';

describe('<Score />', () => {
  it('should render the Home score', () => {
    render(<Score side={Side.Home} score={123} />);

    const score = screen.getByText('123');

    expect(score).toHaveStyle({ backgroundColor: Side.Home });

    expect(score).toBeInTheDocument();
  });

  it('should render the Guest score', () => {
    render(<Score side={Side.Guest} score={456} />);

    const score = screen.getByText('456');

    expect(score).toHaveStyle({ backgroundColor: Side.Guest });

    expect(score).toBeInTheDocument();
  });
});
