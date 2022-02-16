import TransactionTableBody from '../TransactionTableBody/TransactionTableBody';
import transactions from '../../data/transactions.json';

import { TransactionTable, TrTableHead, Th } from './TransactionHistory.styled';

export default function TransactionHistory() {
  return (
    <TransactionTable>
      <TrTableHead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </TrTableHead>

      <TransactionTableBody transactions={transactions} />
    </TransactionTable>
  );
}
