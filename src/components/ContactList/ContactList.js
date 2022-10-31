import { ContactItem } from '../ContactItem/ContactItem';
import PropTypes from 'prop-types';
import { ContactsList, ContactsListBox } from './ContactList.styled';
export function ContactList({ contacts }) {
  return (
    <ContactsListBox>
      <ContactsList style={{ textAlign: 'center' }}>Contact List</ContactsList>
      {contacts.length ? (
        contacts.map((contact, idx) => (
          <ContactItem key={contact.id} contact={contact} idx={idx} />
        ))
      ) : (
        <p>No any contacts</p>
      )}
    </ContactsListBox>
  );
}
ContactList.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object),
};
