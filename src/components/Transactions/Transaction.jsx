import PropTypes from 'prop-types';

import {
  Wrap,
  TableHead,
  TableHeadData,
  Table,
  TableBody,
  TableRowData,
  TableData,
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
          {transactions.map(({ id, type, amount, currency }) => (
            <TableRowData key={id}>
              <TableData>{type}</TableData>
              <TableData>{amount}</TableData>
              <TableData>{currency}</TableData>
            </TableRowData>
          ))}
        </TableBody>
      </Table>
    </Wrap>
  );
};

Transaction.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
