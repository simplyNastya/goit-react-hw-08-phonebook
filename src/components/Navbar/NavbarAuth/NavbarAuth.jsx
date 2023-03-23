import { NavLink, Outlet } from 'react-router-dom';
import styles from './navbarAuth.module.css';

const NavbarAuth = () => {
  return (
    <>
      <ul className={styles.list}>
        <NavLink to="/register" className={styles.link}>
          Register
        </NavLink>
        <NavLink to="/login" className={styles.link}>
          Login
        </NavLink>
      </ul>
      {/* <Outlet /> */}
    </>
  );
};

export default NavbarAuth;
