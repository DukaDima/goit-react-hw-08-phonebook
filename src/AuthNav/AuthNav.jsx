import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './AuthNav.module.css';

export default function AuthNav() {
  return (
    <div>
      <nav>
        <NavLink
          to="/register"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Регистрация
        </NavLink>
        <NavLink
          to="/login"
          className={styles.link}
          activeClassName={styles.activeLink}
        >
          Логин
        </NavLink>
      </nav>
    </div>
  );
}
