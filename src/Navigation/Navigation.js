import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';
const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Главная
    </NavLink>
    <NavLink
      exact
      to="/contacts"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Контакты
    </NavLink>
  </nav>
);
export default Navigation;
