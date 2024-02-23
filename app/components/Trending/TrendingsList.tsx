"use client"

import React, { useState } from 'react';
import RepositoryCard from '../Repository/RepositoryCard';
import { RepositoryType } from 'app/type/github';
import { useTrendingContext } from "../../context/TrendingContext";
import Filter from '../Filter/Filter';
import styles from './TrendingsList.module.css'

const TrendingsList = () => {
  const { data } = useTrendingContext();

  const [filter, setFilter] = useState({
    star: false,
    language: "all"
  });

  return (
    <div className={styles.container}>
      <Filter filter={filter} setFilter={setFilter} />
      {data?.map((item: RepositoryType, index: number) =>
        <RepositoryCard
          key={item.id}
          repository={item}
          index={index}
          filter={filter}
        />
      )}
    </div>
  );
}

export default TrendingsList;
