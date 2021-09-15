import Container from './components/Container/Container';
import Appbar from 'components/AppBar/AppBar';
import { Switch } from 'react-router-dom';
import { useEffect, lazy, Suspense } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import authOperations from './redux/auth/auth-operations';
import { getIsFetchingCurrentUser } from './redux/auth/auth-selectors';

import PublicRoute from './components/Routes/PublicRoute';
import PrivateRoute from './components/Routes/PrivateRoute';

const HomeView = lazy(() => import('./views/HomeView/HomeView'));
const RegisterView = lazy(() => import('./views/RegisterView/RegisterView'));
const LoginView = lazy(() => import('./views/LoginView/LoginView'));
const ContactsView = lazy(() => import('./views/ContactsView/ContactsView'));

function App() {
  const dispatch = useDispatch();
  const isFetchingCurrentUser = useSelector(getIsFetchingCurrentUser);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      {isFetchingCurrentUser ? (
        <h1>Loading..</h1>
      ) : (
        <>
          <Appbar />
          <Switch>
            <Suspense fallback={<p>Loading...</p>}>
              <PublicRoute path="/" exact>
                <HomeView />
              </PublicRoute>

              <PublicRoute path="/register" redirectTo="/contacts" restricted>
                <RegisterView />
              </PublicRoute>

              <PublicRoute path="/login" redirectTo="/contacts" restricted>
                <LoginView />
              </PublicRoute>

              <PrivateRoute path="/contacts" redirectTo="/login">
                <ContactsView />
              </PrivateRoute>
            </Suspense>
          </Switch>
        </>
      )}
    </Container>
  );
}
export default App;
