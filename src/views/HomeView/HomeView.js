import s from './HomeView.module.css';
import { Link } from 'react-router-dom';

function HomeView() {
  return (
    <div className={s.wrapper}>
      <h1 className={s.title}> Welcome 👋</h1>
      <p className={s.text}>
        In this app, you can store and manage your contacts.
      </p>
      <br />
      {/* <p className={s.info}>
        Please, <b>Sign up</b> or <b>Log in</b> to have access to the Phonebook!
      </p> */}
      <p className={s.info}>
        Please,{' '}
        <Link to="/register" className={s.link}>
          create an account
        </Link>{' '}
        {'\u00A0'}or{'\u00A0'}
        <Link to="/login" className={s.link}>
          log in
        </Link>{' '}
        to have access to the Phonebook!
      </p>
    </div>
  );
}

export default HomeView;
