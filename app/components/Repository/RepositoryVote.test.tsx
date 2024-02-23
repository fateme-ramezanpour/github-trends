import { render, screen, fireEvent } from '@testing-library/react';
import RepositoryVote from './RepositoryVote';
import { useTrendingContext } from "../../context/TrendingContext";
import { mockRepository } from '../../mock/repository';

jest.mock('../../context/TrendingContext', () => ({
  ...jest.requireActual('../../context/TrendingContext'),
  useTrendingContext: jest.fn(),
}));


describe('RepositoryVote Component', () => {
  const mockStarRepository = jest.fn();
  beforeEach(() => {
    (useTrendingContext as jest.Mock).mockReturnValue({
      starRepository: mockStarRepository
    })
  });

  it('will call mock star repository function', () => {
    render(
      <RepositoryVote index={0} repository={mockRepository} />
    );
    fireEvent.click(screen.getByTestId('star-vote'));
    expect(mockStarRepository).toHaveBeenCalledWith(0);
  });

  it('will show golden star', () => {
    render(
      <RepositoryVote
        index={0}
        repository={{ ...mockRepository, stared: true }} />
    );
    expect(screen.getByTestId('star-icon')).toHaveClass('clicked');
  });

  it('will show star count', () => {
    render(
      <RepositoryVote index={0} repository={mockRepository} />
    );
    const starCount = mockRepository.stargazers_count;
    expect(screen.getByTestId('star-count').textContent).toBe(starCount);
  });

});
