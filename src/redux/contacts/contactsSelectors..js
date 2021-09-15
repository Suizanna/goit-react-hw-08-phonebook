import { createSelector } from '@reduxjs/toolkit';
// простые селекторы
export const getContacts = state => state.contacts.items;
export const getLoading = state => state.contacts.isLoading;
export const getError = state => state.contacts.error;
export const getFilter = state => state.contacts.filter;
//мемоизация.
export const getVisibleContacts = createSelector(
  [getContacts, getFilter], //аргументы. ссылки от чего зависит
  //ф-ция делает вычисления. получает результат вызова простых селекторов
  (contacts, filter) => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter),
    );
  },
);
