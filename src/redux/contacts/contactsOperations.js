import {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContactRequest,
  addContactSuccess,
  addContactError,
  deleteContactRequest,
  deleteContactSuccess,
  deleteContactError,
} from './contactsActions.js';
import * as contactsAPI from '../../components/services/contacts-api';

// операции это асинхронный createAction
export const fetchContacts = () => dispatch => {
  dispatch(fetchContactsRequest());

  contactsAPI
    .fetchContacts()
    .then(data => dispatch(fetchContactsSuccess(data)))
    .catch(error => dispatch(fetchContactsError(error)));
};

export const addContact = (name, number) => dispatch => {
  const contact = {
    name,
    number,
  };

  dispatch(addContactRequest());

  contactsAPI
    .addContact(contact)
    .then(data => dispatch(addContactSuccess(data)))
    .catch(error => dispatch(addContactError(error)));
};

export const deleteContact = id => dispatch => {
  dispatch(deleteContactRequest());

  contactsAPI
    .deleteContact(id)
    .then(() => dispatch(deleteContactSuccess(id)))
    .catch(error => dispatch(deleteContactError(error)));
};

//=================================
// //2 вар. createAsyncThunk уже есть createAction автоматически
// import { createAsyncThunk } from '@reduxjs/toolkit';
// import {
//   fetchContacts,
//   addContact,
//   deleteContact,
// } from '../../utils/contacts-api';

// export const getContacts = createAsyncThunk(
//   'contacts/fetchContacts',
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await fetchContacts();

//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

// export const addContacts = createAsyncThunk(
//   'contacts/addContact',
//   async (contactobj, { rejectWithValue }) => {
//     try {
//       const contact = await addContact(contactobj);
//       return contact;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );

// export const deleteContacts = createAsyncThunk(
//   'contacts/deleteContact',
//   async (contactId, { rejectWithValue }) => {
//     try {
//       await deleteContact(contactId);
//       return contactId;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   },
// );
