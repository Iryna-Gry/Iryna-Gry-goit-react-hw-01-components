import styled from '@emotion/styled';

export const TransactionList = styled.table`
  color: var(--primary-text-color);
  font-size: 14px;
  text-align: center;
  width: 320px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;

export const TransactionListHeader = styled.thead`
  background-color: rgb(80, 128, 142);
  outline: 1px solid rgba(173, 204, 204, 0.281);
  color: var(--primary-bg-color);
  text-transform: uppercase;
  margin: 0;
`;
export const TransactionListHeaderRow = styled.th`
  padding: 10px;
  width: calc(100% / 3);
  margin: 0;
`;
export const TransactionListRows = styled.tr`
  background-color: var(--primary-bg-color);
  &:nth-of-type(2n) {
    background-color: rgb(224, 232, 240);
  }
`;
export const TransactionListItem = styled.td`
  padding: 5px;
  outline: 1px solid white;
  margin: 0;
`;
