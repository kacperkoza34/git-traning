import React from 'react';
import styles from './Nav.module.scss';
import {NavLink} from 'react-router-dom';
import { navConfig } from './NavConfig';

function Nav() {
  return (
    <div className={styles.nav}>
      <ul> {
        navConfig.map( ({title, link}) =>(
          <div>
            <button>Do nothing</button>
            <li>
              <NavLink to={link} key={link}>{title}</NavLink>
            </li>
          </div>
      )
      )
      }
      </ul>
    </div> );
}

export default Nav;
