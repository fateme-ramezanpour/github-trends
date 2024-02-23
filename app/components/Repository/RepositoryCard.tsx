"use client"
import React from 'react';
import { RepositoryType } from 'app/type/github';
import RepositoryVote from './RepositoryVote';
import styles from './Repository.module.css';

interface StarCardType {
  repository: RepositoryType,
  index: number,
  filter: {
    star: boolean,
    language: string
  }
}

const RepositoryCard = ({ repository, index, filter }: StarCardType) => {

  const showCard = (!filter.star || repository.stared) &&
    (filter.language === 'all' || filter.language === repository.language)

  return (
    <>
      {showCard &&
        <article data-testid="repository-card" className={styles.card}>
          <div>
            <h2>
              <a
                href={repository.html_url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Visit ${repository.name} on GitHub`}
              >
                {repository.name}
              </a>
            </h2>
            <p className={styles.description}>
              {repository.description}
            </p>
            <div className={styles.language}>
              {repository.language}
            </div>
          </div>
          <div>
            <RepositoryVote
              index={index}
              repository={repository} />
          </div>
        </article>
      }
    </>

  );
}

export default RepositoryCard;
