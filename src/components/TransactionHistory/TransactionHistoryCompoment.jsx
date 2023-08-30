import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
const TransactionHistoryCompoment = ({ items, color }) => {
  const {id,type,amount,currency} = items;
  return (
    <>
      <tr key={id} className={css.table} style={{ background: color }}>
        <td>{type}</td>
        <td>{amount}</td>
        <td>{currency}</td>
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
