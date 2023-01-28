import PropTypes from 'prop-types';
import {
  TransactionList,
  TransactionListHeader,
  TransactionListHeaderRow,
  TransactionListItem,
  TransactionListRows,
} from 'components';

export const TransactionHistory = ({ items }) => {
  return (
    <TransactionList>
      <TransactionListHeader>
        <tr>
          <TransactionListHeaderRow>Type</TransactionListHeaderRow>
          <TransactionListHeaderRow>Amount</TransactionListHeaderRow>
          <TransactionListHeaderRow>Currency</TransactionListHeaderRow>
        </tr>
      </TransactionListHeader>

      <tbody>
        {items.map(({ id, type, amount, currency }, index) => (
          <TransactionListRows key={id}>
            <TransactionListItem>{type}</TransactionListItem>
            <TransactionListItem>{amount}</TransactionListItem>
            <TransactionListItem>{currency}</TransactionListItem>
          </TransactionListRows>
        ))}
      </tbody>
    </TransactionList>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
