import { Redirect, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import { getLogIn } from "../../redux/auth/auth-selectors";

/**
 * 1. Он должен повторять API Route
 *  2. Он должен рендерить Route
 * - Если маршрут приватный и пользователь залогинен, рендерит компонент
 * - В противном случае рендерит Redirect на redirectTo
 */

export default function PrivateRoute({ children, redirectTo = "/", ...routeProps }) {
    const isLoggedIn = useSelector(getLogIn);
    return (
        <Route {...routeProps}>
            {isLoggedIn ? children : <Redirect to={redirectTo} />}
        </Route>
    )
}


