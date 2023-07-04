import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
const TransactionHistoryCompoment = ({ items, color }) => {
  return (
    <>
      <tr key={items.id} className={css.table} style={{ background: color }}>
        <td>{items.type}</td>
        <td>{items.amount}</td>
        <td>{items.currency}</td>
      </tr>
    </>
  );
};
export default TransactionHistoryCompoment;

TransactionHistoryCompoment.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
