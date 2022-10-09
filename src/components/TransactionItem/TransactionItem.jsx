import PropTypes from 'prop-types';
import { TableData, TableRowData } from './TransavtionItem.styled';

export const TransactionItem = ({
  transactions: { type, amount, currency },
}) => {
  return (
    <TableRowData>
      <TableData>{type}</TableData>
      <TableData>{amount}</TableData>
      <TableData>{currency}</TableData>
    </TableRowData>
  );
};

TransactionItem.propTypes = {
  transactions: PropTypes.shape({
    type: PropTypes.string,
    amount: PropTypes.string,
    currency: PropTypes.string,
  }),
};
