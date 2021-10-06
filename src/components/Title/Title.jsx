import React from 'react';
import e from './Title.module.css';
import PropTypes from 'prop-types';

const Title = ({ title }) => {
  return <h3 className={e.Title}>{title}</h3>;
};
export default Title;
Title.propTypes = {
  title: PropTypes.string.isRequired,
};
