import styles from './AppBar.module.scss';
import React from 'react';
import Navigation from '../Navigation/Navigation';

const AppBar = () => {
  return (
    <header className={styles.container}>
      <Navigation />
    </header>
  );
};

export default AppBar;
