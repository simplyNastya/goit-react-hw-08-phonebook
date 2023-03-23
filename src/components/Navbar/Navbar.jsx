import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import { isUserLogin } from 'redux/auth/auth-selectors';

import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <>
      <header className={styles.headerSection}>
        <div className={styles.headerSectionContainer}>
          <nav className={styles.nav}>
            {/* <NavbarMenu /> */}
            {!isLogin && <NavbarAuth />}
            {isLogin && <NavbarUser />}
          </nav>
        </div>
      </header>
      <Outlet />
    </>
  );
};

export default Navbar;
