import React from 'react'
import Image from 'next/image'
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li>
            <a
              href="https://github.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Visit github (opens in a new tab)"
            >
              <Image
                src={'/icon.png'}
                alt="Github logo"
                width={32}
                height={32} 
                className={styles.logo}/>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header