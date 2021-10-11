import { useState } from 'react';
import { connect } from 'react-redux';
import operations from '../../redux/operations';
import s from './AddContacts.module.css';
import PropTypes from 'prop-types';
import selectors from '../../redux/selectors';

const AddContacts = ({ onSubmit, contacts }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const nameChange = e => {
    setName(e.currentTarget.value);
  };
  const phoneChange = e => {
    setPhone(e.currentTarget.value);
  };
  const handleSubmit = e => {
    e.preventDefault();
    console.log(contacts);
    let condition = contacts.find(contact => {
      console.log(contact);
      return contact.name.toLowerCase() === name.toLowerCase();
    });
    console.log(condition);
    !condition ? onSubmit(name, phone) : alert('Такой контакт уже есть');
    setName('');
    setPhone('');
  };

  return (
    <form className={s.AddContact__form} onSubmit={handleSubmit}>
      <div className={s.AddContact__input}>
        <label>
          {' '}
          <p className={s.AddContact__title}>name</p>
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
            required
            value={name}
            onChange={nameChange}
          />
        </label>
      </div>

      <div className={s.AddContact__input}>
        <label>
          {' '}
          <p className={s.AddContact__title}>number</p>
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
            required
            value={phone}
            onChange={phoneChange}
          />
        </label>
      </div>
      <button type="submit" className={s.AddContact__button}>
        Add
      </button>
    </form>
  );
};

const mapStateToProps = state => ({
  contacts: selectors.getAllContacts(state),
});

const mapDispatchToProps = dispatch => ({
  onSubmit: (name, number) => dispatch(operations.addContact(name, number)),
});
export default connect(mapStateToProps, mapDispatchToProps)(AddContacts);
AddContacts.propTypes = {
  name: PropTypes.string,
  phone: PropTypes.string,
};
