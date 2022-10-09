import { TransactionItem } from 'components/TransactionItem/TransactionItem';
import {
  Wrap,
  TableHead,
  TableHeadData,
  Table,
  TableBody,
} from './Transaction.styled';

export const Transaction = ({ transactions }) => {
  return (
    <Wrap>
      <Table>
        <TableHead>
          <tr>
            <TableHeadData>Type</TableHeadData>
            <TableHeadData>Amount</TableHeadData>
            <TableHeadData>Currency</TableHeadData>
          </tr>
        </TableHead>
        <TableBody>
          {transactions.map(transaction => (
            <TransactionItem key={transaction.id} transactions={transaction} />
          ))}
        </TableBody>
      </Table>
    </Wrap>
  );
};
