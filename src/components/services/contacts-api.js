import axios from 'axios';
axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function fetchContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}

export async function addContact(contact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}

export async function deleteContact(id) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}

//================================
// export function fetchContacts() {
//   return axios.get('/contacts');
// }

// export function addContact(contact) {
//   return axios.post('/contacts', contact);
// }

// export function deleteContact(id) {
//   return axios.delete(`/contacts/${id}`);
// }
