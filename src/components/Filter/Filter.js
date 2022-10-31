import PropTypes from 'prop-types';
// import { useDispatch, useSelector } from 'react-redux';
// import { changeFilter } from '../../redux/contactsSlice';
import { FindContactsBox, FindInput, FindContacts } from './Filter.styled';

export const Filter = ({filter, setFilter}) => {

  return (
    <FindContactsBox>
      <FindContacts>Find contacts by name</FindContacts>
      <FindInput
        type="text"
        value={filter}
        onChange={evt => setFilter(evt.currentTarget.value)}
      />
    </FindContactsBox>
  );
};

Filter.propTypes = {
  filter: PropTypes.string,
  setFilter: PropTypes.func
}