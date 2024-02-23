"use client"
import React from 'react';
import Button from '../Base/Button/Button';
import { BsStarFill } from "react-icons/bs";
import { RepositoryType } from 'app/type/github';
import { useTrendingContext } from '../../context/TrendingContext'
import styles from './Repository.module.css';

interface RepositoryVoteType {
  repository: RepositoryType,
  index: number
}

const RepositoryVote = ({ index, repository }: RepositoryVoteType) => {

  const { starRepository } = useTrendingContext();

  return (
    <Button
      name='star-vote'
      onClick={() => starRepository(index)}
      >
      <div className={styles.star}>
        <BsStarFill
          data-testid="star-icon"
          className={`${styles.starIcon} ${repository.stared ? styles.clicked : ''}`}
        />
        <span className={styles.starText}>Star</span>
        <span className={styles.starCount} data-testid="star-count">
          {repository.stargazers_count}
        </span>
      </div>
    </Button>
  );
}

export default RepositoryVote;
