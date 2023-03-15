import styles from './textField.module.css';

const TextField = ({ label, ...props }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...props} />
    </div>
  );
};

export default TextField;
