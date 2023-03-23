import PropTypes from 'prop-types';
import useForm from 'services/hooks/useForm';
import initialState from './initialState';
import TextField from 'components/TextField/TextField';
import Button from 'components/Button/Button';
import fields from './fields';
// import styles from './loginForm.module.css';

const LoginForm = ({ onSubmit }) => {
  const { state, handleChange, handleSubmit } = useForm({
    initialState,
    onSubmit,
  });

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit}>
      <TextField value={email} onChange={handleChange} {...fields.email} />
      <TextField
        value={password}
        onChange={handleChange}
        {...fields.password}
      />
      <Button>Login</Button>
    </form>
  );
};

export default LoginForm;

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
