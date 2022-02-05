import PropTypes from 'prop-types';

import TransactionTableRow from '../TransactionTableRow/TransactionTableRow';

function TransactionTableBody({ transactions }) {
  return (
    <tbody>
      {transactions.map(transaction => (
        <tr key={transaction.id}>
          <TransactionTableRow
            type={transaction.type}
            amount={transaction.amount}
            currency={transaction.currency}
          />
        </tr>
      ))}
    </tbody>
  );
}

TransactionTableBody.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionTableBody;
