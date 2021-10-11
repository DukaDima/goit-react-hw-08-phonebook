import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import s from './LoginView.module.css';
import PropTypes from 'prop-types';

function LoginView({ onSubmit }) {
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
      <h1>Страница логина</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label className={s.label}>
          Почта
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
          />
        </label>
        <label className={s.label}>
          Пароль
          <input
            type="text"
            name="password"
            value={password}
            onChange={handleChange}
          />
        </label>
        <button type="submit" className={s.label}>
          Войти
        </button>
      </form>
    </div>
  );
}

LoginView.propTypes = {};

export default LoginView;
