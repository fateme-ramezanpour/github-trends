"use client"

import React from 'react';
import RepositoryCard from '../Repository/RepositoryCard';
import { RepositoryType } from 'app/type/github';
import { useTrendingContext } from "../../context/TrendingContext";
import Filter from '../Filter/Filter';
import styles from './TrendingsList.module.css'
import NoData from '../Base/NoData/NoData';

const TrendingsList = () => {
  const { data } = useTrendingContext();

  return (
    <div className={styles.container}>
      <Filter />
      {data?.map((item: RepositoryType, index: number) =>
        <RepositoryCard
          key={item.id}
          repository={item}
          index={index}
        />
      )}
      {data?.length === 0 && <NoData />}
    </div>
  );
}

export default TrendingsList;
