import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { contactsOperations, contactsSelectors } from '../../redux/contacts';
import NumberFormat from 'react-number-format';
import { ToastContainer,  toast  } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { nanoid } from "nanoid";
import s from './PhoneForm.module.css';

const PhoneBookForm = () => {  
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(contactsSelectors.getContacts);
  const isLoading = useSelector(contactsSelectors.getLoading);

  const nameInputId = nanoid();
  const telInputId = nanoid();

 const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;

      case 'number':
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkRepeatName = name => {
    return contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase(),
    );
  };

  const checkRepeatNumber = number => {
    return contacts.find(contact => contact.number === number);
  };

  const checkEmptyQuery = (name, number) => {
    return name.trim() === '' || number.trim() === '';
  };

  const checkValidNumber = number => {
    return !/\d{3}[-]\d{2}[-]\d{2}/g.test(number);
  };

  const handleSubmit = e => {
    e.preventDefault();
    if (checkRepeatName(name)) {
      toast(`🤔 ${name} is already in the phonebook.`);
    } else if (checkRepeatNumber(number)) {
      toast(`🤔 ${number} is already in the phonebook.`);
    } else if(checkEmptyQuery (name, number)) {
      toast.info("😱 Enter the contact's name and number phone!");
    } else if (checkValidNumber(number)) {
      toast.error('💩 Enter the correct number phone!');
    } else {
      dispatch(contactsOperations.addContact( name, number ));
    }
    resetInput();
  };

  const resetInput = () => {
    setName('');
    setNumber('');
  };

  return (
    <>
    <form className={s.form} onSubmit={handleSubmit} action="">
      <label className={s.label} htmlFor="">
        <p>Name</p>
        <input
          className={s.input}
          id={nameInputId}
          type="text"
          name="name"
          label="Name"
          value={name}
          onChange={handleChange} 
          placeholder="Enter name"
          // required
          autoFocus
        />
      </label>
  
         <label className={s.label} htmlFor={nameInputId}>
          <p>Number</p>
          <NumberFormat
          placeholder="Enter phone number"
          format="(###) ###-##-##"
          mask="_"
          pattern="^[0-9\s\(\)\-]{15}"
          type="tel"
          name="number"
          label="Number"
          value={number}        
          onChange={handleChange}
          className={s.input}
          id={telInputId}
        />
        </label>
       
        {!isLoading && (          
        <button className={s.btn} type="submit">
          Add contact
        </button>
        )}
      <ToastContainer autoClose={3700} position="top-center" />
      </form>
      </>
  );
};


export default PhoneBookForm;



