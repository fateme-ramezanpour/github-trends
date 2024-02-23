import { render } from '@testing-library/react';
import RepositoryCard from './RepositoryCard';
import { mockRepository } from '../../mock/repository';
import { useTrendingContext } from '../../context/TrendingContext';

jest.mock('../../context/TrendingContext', () => ({
  ...jest.requireActual('../../context/TrendingContext'),
  useTrendingContext: jest.fn(),
}));

describe('RepositoryCard Component', () => {

  beforeEach(() => {
    (useTrendingContext as jest.Mock).mockReturnValue({
      data: [mockRepository],
    });
  });

  describe('when star filter is off', () => {
    it('render repository card', () => {
      const { getByText, getByRole, getByTestId } = render(
        <RepositoryCard
          repository={mockRepository}
          index={0}
          filter={{star: false, language: 'all'}} />
      );

      expect(getByTestId("repository-card")).toBeInTheDocument();
      expect(getByText(mockRepository.name)).toBeInTheDocument();
      expect(getByText(mockRepository.description)).toBeInTheDocument();
      expect(getByText(mockRepository.stargazers_count)).toBeInTheDocument();
      expect(getByRole('link')).toHaveAttribute('href', mockRepository.html_url);
    });
  })

  describe('when star filter is on', () => {
    it('will render reposity', () => {
      const { getByTestId } = render(
        <RepositoryCard
          repository={{ ...mockRepository, stared: true }}
          index={0}
          filter={{star: true, language: 'all'}} />
      );

      expect(getByTestId("repository-card")).toBeInTheDocument();
    });

    it('will not render reposity', () => {
      const { queryByText } = render(
        <RepositoryCard
          repository={{ ...mockRepository, stared: false }}
          index={0}
          filter={{star: true, language: 'all'}} />
      );

      expect(queryByText("repository-card")).toBeNull();
    });
  })

});
