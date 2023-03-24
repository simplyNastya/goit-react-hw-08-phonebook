import { useSelector } from 'react-redux';
import { Outlet } from 'react-router-dom';
import { RiContactsBookLine } from 'react-icons/ri';

import NavbarAuth from './NavbarAuth/NavbarAuth';
import NavbarUser from './NavbarUser/NavbarUser';
// import NavbarMenu from './NavbarMenu/NavbarMenu';
import { isUserLogin } from 'redux/auth/auth-selectors';

import styles from './navbar.module.css';

const Navbar = () => {
  const isLogin = useSelector(isUserLogin);

  return (
    <>
      <header className={styles.headerSection}>
        <div className={styles.headerSectionContainer}>
          <div className={styles.logoWrapper}>
            <RiContactsBookLine className={styles.logo} />
            <p className={styles.logoText}>PhoneBook</p>
          </div>
          <nav className={styles.nav}>
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
