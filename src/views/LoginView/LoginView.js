import { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';
import s from './LoginView.module.css';
import authOperations from '../../redux/auth/auth-operations';

import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

function LoginView() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
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
    dispatch(authOperations.logIn({ email, password }));
    setEmail('');
    setPassword('');
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={s.form} autoComplete="off">
        <label className={s.label}>
          <p>Email</p>
          <input
            className={s.input}
            type="email"
            name="email"
            value={email}
            autoComplete="email"
            onChange={handleChange}
            placeholder="example@gmail.com"
            required
            autoFocus
          />
        </label>

        <label className={s.label}>
          Password
          <input
            className={s.input}
            type="password"
            name="password"
            value={password}
            autoComplete="current-password"
            onChange={handleChange}
            placeholder="Password"
            required
          />
        </label>

        <Button
          variant="contained"
          color="secondary"
          size="large"
          type="submit"
        >
          Log in
        </Button>
      </form>

      <Box mt={8}>
        <Copyright />
      </Box>
    </div>
  );
}
export default LoginView;
