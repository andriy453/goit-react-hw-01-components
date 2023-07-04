import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
const TransactionHistoryCompoment = ({ items, color }) => {
  function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  }
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
