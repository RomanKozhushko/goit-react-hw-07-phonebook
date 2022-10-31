import { useSelector } from 'react-redux';
import { InputForm } from './InputForm/InputForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';
import { InputFormBox } from './InputForm/InputForm.styled';
import { ContactListBox } from './ContactList/ContactList.styled';
import { Head, PhonebookBox } from './App.styled';

export function App() {
  const contacts = useSelector(store => store.contacts.items);
  const myFilter = useSelector(store => store.contacts.filter);

  const normalizedFilter = myFilter.toLowerCase();
  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <PhonebookBox>
      <InputFormBox>
        <Head>Phonebook</Head>
        <InputForm />
      </InputFormBox>
      <ContactListBox>
        <Filter />
        <ContactList contacts={filteredContacts} />
      </ContactListBox>
    </PhonebookBox>
  );
}
