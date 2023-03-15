import { useSelector } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
// import styles from './navbarUser.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);

  return (
    <div>
      <p>{name}</p>
      <button>Logout</button>
    </div>
  );
};

export default NavbarUser;
