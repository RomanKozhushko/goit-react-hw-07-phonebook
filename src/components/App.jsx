// import { useSelector } from 'react-redux';
import { useState } from 'react';
// Компоненти додатку
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

// Оформлення
import { InputFormBox } from './InputForm/InputForm.styled';
import { ContactListBox } from './ContactList/ContactList.styled';
import { Head, PhonebookBox } from './App.styled';

// API
import { useGetContactsQuery } from './ContactsAPI/contactsAPI';

export function App() {
  const { data } = useGetContactsQuery();
  const contacts = data ?? [];
  const [myFilter, setMyFilter] = useState('');

  // const contacts = useSelector(store => store.contacts.items);
  // const myFilter = useSelector(store => store.contacts.filter);

  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <PhonebookBox>
      <InputFormBox>
        <Head>Phonebook</Head>
        <InputForm contacts={contacts}/>
      </InputFormBox>
      <ContactListBox>
        <Filter filter={myFilter} setFilter={setMyFilter}/>
        <ContactList contacts={filteredContacts.reverse()} />
      </ContactListBox>
    </PhonebookBox>
  );
}
