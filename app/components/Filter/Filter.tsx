"use client"

import React from 'react';
import { filterType } from 'app/type/filter';
import { useTrendingContext } from "../../context/TrendingContext";
import styles from './Filter.module.css'

interface FilterType {
  filter: filterType,
  setFilter: React.Dispatch<React.SetStateAction<filterType>>
}

const Filter = ({ filter, setFilter }: FilterType) => {
  const { languages } = useTrendingContext();

  const filterStarApply = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      star: e.target.value === 'stared'
    })
  }

  const filterLanguageApply = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFilter({
      ...filter,
      language: e.target.value
    })
  }

  return (
    <div className={styles.filterContainer}>
      <div className={styles.selectContainer}>
        <select
          name="star"
          aria-label="Filter with star"
          onChange={filterStarApply}>
          <option value="all">All repositories</option>
          <option value="stared">Starred repositories</option>
        </select>
        <select
          name="language"
          aria-label="Filter with language"
          onChange={filterLanguageApply}>
          <option value="all">All Languages</option>
          {languages.map((language: string) =>
            <option key={language} value={language}>{language}</option>
          )}
        </select>
      </div>
    </div>
  );
}

export default Filter;
