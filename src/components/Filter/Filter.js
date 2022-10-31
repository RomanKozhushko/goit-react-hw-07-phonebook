import { useDispatch, useSelector } from 'react-redux';
import { changeFilter } from '../../redux/contactsSlice';
import { FindContactsBox, FindInput, FindContacts } from './Filter.styled';

export const Filter = () => {
  const myFilter = useSelector(store => store.contacts.filter);
  const dispatch = useDispatch();
  return (
    <FindContactsBox>
      <FindContacts>Find contacts by name</FindContacts>
      <FindInput
        type="text"
        value={myFilter}
        onChange={evt => dispatch(changeFilter(evt.currentTarget.value))}
      />
    </FindContactsBox>
  );
};
