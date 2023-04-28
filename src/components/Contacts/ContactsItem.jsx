import { Span, Item, Button, ItemContainer } from './ContactsList.styled';

export const ContactsItem = ({ name, number, id, onClick }) => {
  return (
    <Item id={id}>
      <ItemContainer>
        <Span>{name}</Span>
        {number}
        <Button onClick={() => onClick(id)} type="button">
          Delete contact
        </Button>
      </ItemContainer>
    </Item>
  );
};
