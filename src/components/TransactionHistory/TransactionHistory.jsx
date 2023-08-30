import { nanoid } from 'nanoid'

import css from './TransactionHistory.module.css';
import TransactionHistoryCompoment from './TransactionHistoryCompoment';
const TransactionHistory = ({ items }) => {
  const color = '#e8e8e8';
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
          {items&& items.map((item)=>{
            return(
              <TransactionHistoryCompoment key={nanoid()} items={item} color={color} />
            )
          })}
        </tbody>
      </table>
    </>
  );
};
export default TransactionHistory;
