import styled from '@emotion/styled';

export const List = styled.ul`
  width: auto;
  height: auto;
  padding: 20px;
`;

export const Item = styled.li`
  width: 400px;
  padding: 5px 10px;

  background-color: ${({ theme }) => {
    return theme.colors.white;
  }};
  border-radius: 4px;
  &:not(:last-child) {
    margin-bottom: 10px;
  }
`;

export const Span = styled.span`
  margin-right: auto;
`;

export const Button = styled.button`
  margin-left: auto;
  background-color: ${({ theme }) => {
    return theme.colors.gainsboro;
  }};
  outline: 1px solid black;
  border-radius: 4px;
  padding: 3px;
`;

export const ItemContainer = styled.div`
  display: flex;
  align-items: center;
`;
