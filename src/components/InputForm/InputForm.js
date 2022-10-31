import { useAddContactMutation } from 'components/ContactsAPI/contactsAPI';
import { InputItem, FormDecoration, Label, Button } from './InputForm.styled';
import { nanoid } from 'nanoid';
import { Formik, Form } from 'formik';

export function InputForm({ contacts }) {
  const [addContact] = useAddContactMutation();

  const onSubmit = (values, action) => {
    const equalName = contacts.find(
      el => el.name.toLowerCase() === values.name.toLowerCase()
    );
    if (equalName) return alert(equalName.name + ' is already in contacts');

    values.id = nanoid();
    addContact(values);
    action.resetForm();
  };
  return (
    <Formik initialValues={{ name: '', number: '' }} onSubmit={onSubmit}>
      <Form>
        <FormDecoration>
          <Label>
            Name
            <InputItem
              type="text"
              name="name"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </Label>
          <Label>
            Number
            <InputItem
              type="tel"
              name="number"
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </Label>
          <Button type="submit">Add contact</Button>
        </FormDecoration>
      </Form>
    </Formik>
  );
}
