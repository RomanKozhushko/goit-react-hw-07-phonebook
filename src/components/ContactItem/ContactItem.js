import {
  ListItem,
  NumByOrder,
  TelNum,
  TelName,
  DelBtn,
} from '../ContactList/ContactList.styled';
import PropTypes from 'prop-types';
// import { useDispatch } from 'react-redux';
// import { removeContact } from '../../redux/contactsSlice';
import { useDeleteContactMutation } from "components/ContactsAPI/contactsAPI";

export function ContactItem({ contact, idx }) {
  const [deleteContact] = useDeleteContactMutation()
  return (
    <ListItem>
      <NumByOrder>{idx + 1}</NumByOrder>
      <TelName>{contact.name}:</TelName> <TelNum>{contact.number}</TelNum>
      <DelBtn type="button" onClick={() => deleteContact(contact.id)}>
        Delete
      </DelBtn>
    </ListItem>
  );
}
ContactItem.propTypes = {
  contact: PropTypes.object,
  idx: PropTypes.number,
};
