import css from './TransactionHistory.module.css';
import transactions from '../../data/transactions.json';
import clsx from 'clsx';

export const TransactionHistory = ({ items }) => (
  <div className={css.firstCon}>
    <div className={css.container}>
      <table classList={css.table}>
        <thead className={css.thead}>
          <tr>
            <th className={css.th}>Type</th>
            <th className={css.th}>Amount</th>
            <th className={css.th}>Currency</th>
          </tr>
        </thead>
        <tbody>
          {items.map(({ id, type, amount, currency }) => (
            <tr key={id} className={css.tr}>
              <td className={css.td}>{type}</td>
              <td className={css.td}>{amount}</td>
              <td className={css.td}>{currency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);
