import { useSelector, useDispatch } from 'react-redux';
import { authSelectors, authOperations } from '../../redux/auth';
// import { getUserName } from "redux/auth/auth-selectors";
// import authOperations from "../../redux/auth/auth-operations";
import Button from '@material-ui/core/Button';
import defaultAvatar from '../../img/avatar2.png';
import s from './UserMenu.module.css';

export default function UserMenu() {
  const name = useSelector(authSelectors.getUserName);
  // const name = useSelector(getUserName);
  
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <img
        src={defaultAvatar}
        alt="Default Avatar"
        width="32"
        className={s.avatar}
      />
      <span className={s.name}>Welcome, {name}</span>

      <Button
        color="secondary"
        variant="outlined"
        type="button"
        onClick={() => dispatch(authOperations.logOut())}
      >
        Log out
      </Button>
    </div>
  );
}
