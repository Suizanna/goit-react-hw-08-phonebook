import { useSelector } from 'react-redux';
import Navigation from '../Navigation/Navigation'
import UserMenu  from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import s from './AppBar.module.css';
import { getLogIn } from "../../redux/auth/auth-selectors";

export default function Appbar() {
  const isLoggedIn = useSelector(getLogIn);
  
  return (
    <header className={s.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu  /> : <AuthNav />}
    </header>
  );
}