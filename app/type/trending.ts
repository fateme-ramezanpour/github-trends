import { RepositoryType } from 'app/type/github';

export interface TrendingContextType {
  data: RepositoryType[] | null,
  setData: React.Dispatch<React.SetStateAction<RepositoryType[] | null>>,
  starRepository: (index: number) => void,
  languages: string[],
  filterData: (filter: { star: boolean, language: string }) => void,
}