import { GlobalStyles } from 'components/GlobalStyles';
import { ContactsList } from 'components/Contacts/ContactsList';
import { ContactForm } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { ContainerPhoneBook, Title, Text } from 'components/App/App.styled';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts, selectContacts } from 'redux/selectors';
import { selectError, selectIsLoading } from 'redux/selectors';
import { fetchContacts } from 'redux/operations';
import { useEffect } from 'react';

export function App() {
  const filteredContacts = useSelector(selectFilteredContacts);
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <GlobalStyles />
      <ContainerPhoneBook>
        <ContactForm />
        <div>
          <Filter />
          <Title>Contacts</Title>
          {error ? (
            <p>{error}</p>
          ) : isLoading && !error ? (
            <b>Request in progress...</b>
          ) : contacts.length === 0 ? (
            <Text>The phonebook is empty. Please add a contact.</Text>
          ) : filteredContacts.length > 0 ? (
            <ContactsList />
          ) : (
            <Text>Contact not found</Text>
          )}
        </div>
      </ContainerPhoneBook>
    </>
  );
}
