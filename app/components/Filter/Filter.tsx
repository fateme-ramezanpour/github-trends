"use client"

import React, { useState } from 'react';
import { useTrendingContext } from "../../context/TrendingContext";
import styles from './Filter.module.css'

const Filter = () => {
  const { languages, filterData } = useTrendingContext();
  const [filter, setFilter] = useState({ star: false, language: "all" });

  const filterStarApply = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = { ...filter, star: e.target.value === 'stared' };
    setFilter(newFilter)
    filterData(newFilter)
  }

  const filterLanguageApply = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newFilter = { ...filter, language: e.target.value };
    setFilter(newFilter)
    filterData(newFilter)
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
