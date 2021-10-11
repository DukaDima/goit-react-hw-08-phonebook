import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from './redux/auth/auth-operations';

import AppBar from './components/AppBar/AppBar';
import Container from './components/Container/Container';
import { Switch, Route } from 'react-router-dom';

import HomeView from './views/HomeView/HomeView';
import RegisterView from './views/RegisterView/RegisterView';
import LoginView from './views/LoginView/LoginView';
import ContactsView from './views/ContactsView/ContactsView';

export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);
  return (
    <div>
      <Container>
        <AppBar />
      </Container>

      <Switch>
        <Route exact path="/" component={HomeView} />
        <Route path="/register" component={RegisterView} />
        <Route path="/login" component={LoginView} />
        <Route path="/contacts" component={ContactsView} />
      </Switch>
    </div>
  );
}
