import { nanoid } from 'nanoid';
import { ContactsItem } from './ContactsItem';
import { List } from './ContactsList.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from 'redux/selectors';
import { fetchDeleteContact } from 'redux/operations';

export const ContactsList = () => {
  const filteredContacts = useSelector(selectFilteredContacts);

  const dispatch = useDispatch();

  const removeContact = id => {
    dispatch(fetchDeleteContact(id));
  };
  return (
    <>
      <List>
        {filteredContacts.map(({ name, phone, id }) => (
          <ContactsItem
            key={nanoid()}
            name={name}
            number={phone}
            id={id}
            onClick={removeContact}
          />
        ))}
      </List>
    </>
  );
};
