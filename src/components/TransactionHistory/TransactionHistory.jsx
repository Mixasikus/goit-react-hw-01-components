import { TableTransactions, TransactionsContainer, TableHead } from "./TransactionHistory.styled"

export default function TransactionHistory({ items }) {
    return (<div>{items.map(item => (<TransactionsContainer key={item.id}><TableTransactions>
        <TableHead>
    <tr>
      <th>Type</th>
      <th>Amount</th>
      <th>Currency</th>
    </tr>
    </TableHead>
       
  <tbody>
    <tr>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
    </tbody>
         </TableTransactions></TransactionsContainer>))}</div> )
}

//  <tr>
//       <td>Withdrawal</td>
//       <td>85</td>
//       <td>USD</td>
//     </tr>