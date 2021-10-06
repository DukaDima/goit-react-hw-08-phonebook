import React from 'react';
import s from './ContactItem.module.css';
import PropTypes from 'prop-types';

const ContactItem = ({ id, name, phone, onDeleteContact }) => {
  return (
    <>
      <p className={s.ContactList__text}>{name}</p>
      <p className={s.ContactList__text}>{phone}</p>
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
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  phone: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};
