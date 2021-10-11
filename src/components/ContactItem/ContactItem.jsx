import React from 'react';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  return (
    <>
      <p className={s.ContactList__text}>{name}</p>
      <p className={s.ContactList__text}>{number}</p>
      <button
        type="button"
        className={s.ContactsList__Button}
        onClick={() => onDeleteContact(id)}
      >
        Delete
      </button>
    </>
  );
};
export default ContactItem;
ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
