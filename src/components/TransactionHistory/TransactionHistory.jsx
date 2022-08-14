import TransactionTable from "./TransactionTable"
import {TableTransactions, TableHead} from "./TransactionHistory.styled"

export default function TransactionHistory({ items }) {
    return (<TableTransactions><TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
  </TableHead>{items.map(item =>(<TransactionTable key={item.id} type={item.type} amount={item.amount} currency={item.currency}></TransactionTable>))}</TableTransactions> )
}
