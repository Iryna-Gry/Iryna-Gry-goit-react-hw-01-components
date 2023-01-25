import PropTypes from 'prop-types';
import {
  TransactionList,
  TransactionListHeader,
  TransactionListHeaderRow,
  TransactionListItem,
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
        {items.map(({ id, type, amount, currency }, index) =>
          index % 2 ? (
            <tr key={id} style={{ backgroundColor: 'rgb(224, 232, 240)' }}>
              <TransactionListItem>{type}</TransactionListItem>
              <TransactionListItem>{amount}</TransactionListItem>
              <TransactionListItem>{currency}</TransactionListItem>
            </tr>
          ) : (
            <tr key={id} style={{ backgroundColor: 'var(--primary-bg-color)' }}>
              <TransactionListItem>{type}</TransactionListItem>
              <TransactionListItem>{amount}</TransactionListItem>
              <TransactionListItem>{currency}</TransactionListItem>
            </tr>
          )
        )}
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
