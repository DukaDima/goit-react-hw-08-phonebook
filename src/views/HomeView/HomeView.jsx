import React from 'react';
import s from './HomeView.module.css';
import PropTypes from 'prop-types';

function HomeView() {
  return (
    <div className={s.container}>
      <h1 className={s.title}>
        Добро пожаловать на страницу нашего мегасервиса
      </h1>
    </div>
  );
}

HomeView.propTypes = {};

export default HomeView;
