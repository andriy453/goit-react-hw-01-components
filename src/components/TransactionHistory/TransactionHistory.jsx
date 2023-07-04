import css from './TransactionHistory.module.css';
import PropTypes from 'prop-types';
import TransactionHistoryCompoment from './TransactionHistoryCompoment'
const TransactionHistory = ({ items }) => {
  const color = '#e8e8e8';
  const color2 = ' #ffffff';
  return (
    <>
      <table className={css.transaction_history}>
        <thead className={css.line_2}>
          <tr className={css.line}>
            <th className={css.th}>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>

        <tbody>
          <TransactionHistoryCompoment items={items[0]} color={color2} />
          <TransactionHistoryCompoment items={items[1]} color={color} />
          <TransactionHistoryCompoment items={items[2]} color={color2} />
          <TransactionHistoryCompoment items={items[3]} color={color} />
          <TransactionHistoryCompoment items={items[4]} color={color2} />
          <TransactionHistoryCompoment items={items[5]} color={color} />
          <TransactionHistoryCompoment items={items[6]} color={color2} />
          <TransactionHistoryCompoment items={items[7]} color={color} />
          <TransactionHistoryCompoment items={items[8]} color={color2} />
          <TransactionHistoryCompoment items={items[9]} color={color} />
          <TransactionHistoryCompoment items={items[10]} color={color2} />
          <TransactionHistoryCompoment items={items[11]} color={color} />
          <TransactionHistoryCompoment items={items[12]} color={color2} />
          <TransactionHistoryCompoment items={items[13]} color={color} />
          <TransactionHistoryCompoment items={items[14]} color={color2} />
          <TransactionHistoryCompoment items={items[15]} color={color} />
          <TransactionHistoryCompoment items={items[16]} color={color2} />
          <TransactionHistoryCompoment items={items[17]} color={color} />
          <TransactionHistoryCompoment items={items[18]} color={color2} />
          <TransactionHistoryCompoment items={items[19]} color={color} />
        </tbody>
      </table>
    </>
  );
};
export default TransactionHistory;
