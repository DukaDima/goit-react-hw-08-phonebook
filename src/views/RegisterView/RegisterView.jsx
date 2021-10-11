import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { authOperations } from '../../redux/auth/auth-operations';
import s from './RegisterView.module.css';

import PropTypes from 'prop-types';

function RegisterView() {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
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
      <h1>Страница регистрации</h1>
      <form onSubmit={handleSubmit} autoComplete="off" className={s.form}>
        <label className={s.label}>
          Имя
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
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
            className={s.label}
          />
        </label>
        <button type="submit">Зарегистрироваться</button>
      </form>
    </div>
  );
}

RegisterView.propTypes = {};

export default RegisterView;
