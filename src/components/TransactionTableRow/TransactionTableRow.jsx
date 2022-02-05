import PropTypes from 'prop-types';

import { Td } from './TransactionTableRow.styled';

function TransactionTableRow({ type, amount, currency }) {
  return (
    <>
      <Td>{type}</Td>
      <Td>{amount}</Td>
      <Td>{currency}</Td>
    </>
  );
}

TransactionTableRow.propTypes = {
  type: PropTypes.string.isRequired,
  amount: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
};

export default TransactionTableRow;
