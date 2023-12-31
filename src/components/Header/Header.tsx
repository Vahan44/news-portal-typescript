import React, { useState } from 'react'
import styles from './Header.module.css'
import Search from '../Search'
import { SearchProps } from '../Search/Search.interface'
import { Link } from 'react-router-dom'

const Header: React.FC<SearchProps> = ({ items }) => {
  const [isUserMenuOpen, setUserMenuOpen] = useState<boolean>(false)

  const toggleUserMenu = (): void => {
    setUserMenuOpen(!isUserMenuOpen);
  }

  return (
    <header className={styles.header}>
      <nav className={styles.menu}>
        <ul className={styles.mainMenu}>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
        </ul>

        <Search items={items} />

        <div className={styles.userContainer}>
          <img
            src="https://avatars.githubusercontent.com/u/98681?v=4"
            alt="user name"
            className={styles.userImage}
            onClick={toggleUserMenu}
          />

          {
            isUserMenuOpen ? (
              <div className={styles.userMenu}>
                <ul>
                  <li>
                    <a href='#'>Profile</a>
                  </li>
                  <li>
                    <a href='#'>Settings</a>
                  </li>
                  <li>
                    <a href='#'>Sign Out</a>
                  </li>
                </ul>
              </div>
            ) : null
          }
        </div>
      </nav>
    </header>
  )
}

export default Header