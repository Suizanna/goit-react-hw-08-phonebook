import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLogIn } from "../../redux/auth/auth-selectors"
import s from "./Navigation.module.css";

function Navigation() {
    const isLoggedIn = useSelector(getLogIn);
    
    return (
        <header className={s.nav}>
            <div>
            <NavLink to="/" exact className={s.link} activeClassName={s.activeLink}> 
                Home
            </NavLink>
       
            {isLoggedIn && (
                <NavLink to="/contacts" className={s.link} activeClassName={s.activeLink}>
                    Contacts
                </NavLink>
            )}
            </div>
         </header>
    )
}

export default Navigation
