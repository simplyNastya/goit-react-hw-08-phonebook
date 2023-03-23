import { useDispatch } from 'react-redux';
import { login } from '../../redux/auth/auth-operations';
import LoginForm from 'components/LoginForm/LoginForm';

// import styles from './loginPage.module.css';

const LoginPage = () => {
  const dispatch = useDispatch();

  const onLogin = data => dispatch(login(data));

  return (
    <>
      <h2>LoginPage</h2>
      <LoginForm onSubmit={onLogin} />
    </>
  );
};

export default LoginPage;
