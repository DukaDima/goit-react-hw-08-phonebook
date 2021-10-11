import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { authOperations } from '../redux/auth/auth-operations';
import authSelectors from '../redux/auth/auth-selectors';
import defaultAvatar from './avatar.jpg';

import s from './UserMenu.module.css';

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.getUserName);
  const avatar = defaultAvatar;
  return (
    <div className={s.container}>
      <img src={avatar} alt="avatar" width="32" className={s.avatar} />
      <p className={s.name}>Добро пожаловать, {name}</p>

      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Выйти
      </button>
    </div>
  );
}
