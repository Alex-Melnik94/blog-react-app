import styles from './Navigation.module.scss';
import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav className={styles.nav}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.activeNavLink : styles.navLink
        }
      >
        All Posts
      </NavLink>
      <NavLink
        to="/create"
        className={({ isActive }) =>
          isActive ? styles.activeNavLink : styles.navLink
        }
      >
        + Create New Post
      </NavLink>
    </nav>
  );
};

export default Navigation;
