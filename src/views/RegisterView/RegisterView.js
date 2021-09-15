import { useState } from 'react';
import { useDispatch } from 'react-redux';
import authOperations from '../../redux/auth/auth-operations';
import Button from '@material-ui/core/Button';
import s from './RegisterView.module.css';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
// import Link from '@material-ui/core/Link';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {/* <Link
        color="inherit"
        href="https://github.com/Suizanna/goit-react-hw-08-phonebook"
      >
        Your Website
      </Link>{' '} */}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function RegisterView() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        return setName(value);
      case 'email':
        return setEmail(value);
      case 'password':
        return setPassword(value);
      default:
        return;
    }
  };

  const handleSubmit = e => {
    e.preventDefault();

    dispatch(authOperations.register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <h1>Registration page</h1>

      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          Name
          <input
            className={s.input}
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Yuor name"
            required
            autoFocus
          />
        </label>

        <label className={s.label}>
          Email
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="example@gmail.com"
            required
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            label="Password"
            type="password"
            name="password"
            value={password}
            autoComplete="current-password"
            onChange={handleChange}
            placeholder="Password"
          />
        </label>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Sign up
        </Button>
      </form>

      <Box mt={5}>
        <Copyright />
      </Box>
    </div>
  );
}

export default RegisterView;
