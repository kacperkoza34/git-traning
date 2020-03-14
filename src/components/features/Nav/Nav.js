import React from 'react';
import styles from './Nav.module.scss';
import {NavLink} from 'react-router-dom';
import { navConfig } from './NavConfig';
<<<<<<< HEAD
function Nav() {
  return (
    <div className={styles.nav}>
      <ul> {
        navConfig.map( ({title, link}) =>(
          <li>
            <NavLink to={link} key={link}>{title}</NavLink>
          </li>
      )
      )
      }
      </ul>
    </div> );
}
=======

function Nav() {
   return (
      <div className={styles.nav}>
       <ul> {navConfig.map( ({title, link}) =>(
          <li>
            <NavLink to={link} key={link}>{title}</NavLink>
          </li> )
         )
        }
      </ul>
      </div> );
  }
>>>>>>> 431586e420ce7fbfaff71da46f9ba0bf87f410f7
export default Nav;
