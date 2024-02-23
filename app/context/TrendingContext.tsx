"use client"
import React, { createContext, useContext, useState, useEffect } from "react";
import { RepositoryType } from 'app/type/github';
import { TrendingContextType } from "app/type/trending";
import {
  githubLastWeekTrend,
  githubStarAdd,
  githubStarDelete,
  isUserStared
} from '../action/github';

const TrendingContext = createContext<TrendingContextType | undefined>(undefined);

export const TrendingContextProvider = (
  { children }: { children: React.ReactNode }
) => {
  const [allData, setAllData] = useState<RepositoryType[] | null>(null);
  const [data, setData] = useState<RepositoryType[] | null>(null);
  const [languages, setLanguages] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await githubLastWeekTrend();
      const staredData = data.map((repo: RepositoryType) => ({
        ...repo,
        stared: isUserStared(repo.id),
        stargazers_count: localStargazersCount(repo)
      }));

      setLanguages(getAllLanguages(data));
      setAllData(staredData);
      setData(staredData);
    };
    fetchData();
  }, []);

  const filterData = (filter: { star: boolean, language: string }) => {
    const newData = allData?.filter(repo => {
      if (filter.star && !repo.stared) return false;
      if (filter.language !== "all" && repo.language !== filter.language) return false;
      return true;
    });
    setData(newData || []);
  }

  const getAllLanguages = (data: RepositoryType[] | null) => {
    if (!data) return [];
    const uLang = new Set<string>();
    data.map(repo => { if (repo.language) uLang.add(repo.language) })

    return Array.from(uLang);
  }

  const localStargazersCount = (repo: RepositoryType) => {
    if (isUserStared(repo.id)) {
      return repo.stargazers_count + 1
    } else {
      return repo.stargazers_count
    }
  }

  const starRepository = (index: number) => {
    if (!data) return;

    const newData = [...data];
    if (data[index].stared) {
      newData[index].stared = false;
      newData[index].stargazers_count += -1;
      githubStarDelete(data[index].id);
    } else {
      newData[index].stared = true;
      newData[index].stargazers_count += 1;
      githubStarAdd(data[index].id);
    }
    setData(newData);
  }

  const value: TrendingContextType = {
    data,
    setData,
    starRepository,
    languages,
    filterData
  };

  return (
    <TrendingContext.Provider value={value}>
      {children}
    </TrendingContext.Provider>
  );
};

export const useTrendingContext = () => {
  const context = useContext(TrendingContext);
  if (!context) {
    throw new Error('useTrendingContext must be used within a TrendingContextProvider');
  }
  return context;
};
