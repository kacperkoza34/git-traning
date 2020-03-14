import React from 'react';
import styles from './Nav.module.scss';
//import {NavLink} from 'react-router-dom';
//import { navConfig } from './NavConfig';

function Nav() {
  return (
    <div className={styles.nav}>
      <ul>
        <li>Start</li>
        <li>O mnie</li>
        <li>Portfolio</li>
        <li>Kontakt</li>
      </ul>
    </div>
  );
}

export default Nav;
