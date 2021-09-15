import PhoneBookForm from '../../components/Form/PhoneBookForm';
import PhoneBookList from '../../components/List/PhoneBookList';
import PhonebookFilter from '../../components/Filter/PhonebookFilter';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { contactsOperations } from 'redux/contacts';
import s from './ContactsView.module.css';

function ContactsView() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperations.fetchContacts()), [dispatch]);
  return (
    <div className={s.wrapper}>
      <h1>Phonebook</h1>
      <PhoneBookForm />
      <h2>Contacts</h2>
      <PhonebookFilter />
      <PhoneBookList />
    </div>
  );
}

export default ContactsView;
