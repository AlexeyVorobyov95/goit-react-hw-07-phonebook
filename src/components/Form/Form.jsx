import { useState } from 'react';
import { Button, Form, Input, Label } from './Form.styled';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { fetchAddContact } from 'redux/operations';

export function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setNumber] = useState('');

  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);

  const handleSubmit = event => {
    event.preventDefault();

    const name = event.target.form.elements.name.value;
    const phone = event.target.form.elements.number.value;
    const data = { name, phone };

    let normalizedName = name.toLowerCase();
    if (
      contacts.find(contact => contact.name.toLowerCase() === normalizedName)
    ) {
      clearStateName();
      return alert(`${name} is already in contacts.`);
    }

    dispatch(fetchAddContact(data));
    clearState();
  };

  const handleChange = e => {
    switch (e.target.name) {
      case `name`:
        setName(e.target.value);
        break;
      case `number`:
        setNumber(e.target.value);
        break;
      default:
        return;
    }
  };

  const clearState = () => {
    setName('');
    setNumber('');
  };

  const clearStateName = () => {
    setName('');
  };

  return (
    <>
      <Form>
        <Label htmlFor="">
          Name:
          <Input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. 
For example Adrian, Jacob Mercer, Charles de Batz de Castelmore 
d'Artagnan"
            required
          />
        </Label>
        <Label htmlFor="">
          Number:
          <Input
            value={phone}
            onChange={handleChange}
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can 
start with +"
            required
          />
        </Label>
        <Button type="button" onClick={handleSubmit}>
          Add contact
        </Button>
      </Form>
    </>
  );
}
