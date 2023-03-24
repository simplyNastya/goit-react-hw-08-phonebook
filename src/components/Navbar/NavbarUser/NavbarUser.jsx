import { useSelector, useDispatch } from 'react-redux';
import { getUser } from 'redux/auth/auth-selectors';
import { logout } from 'redux/auth/auth-operations';
// import styles from './navbarUser.module.css';

const NavbarUser = () => {
  const { name } = useSelector(getUser);

  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <p>{name}</p>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default NavbarUser;
