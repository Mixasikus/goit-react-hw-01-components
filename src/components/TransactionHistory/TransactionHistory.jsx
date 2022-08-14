import TransactionTbody from "./TransactionTable"
import {Table, TableThead, TransactionContainer, TableTheadTh} from "./TransactionHistory.styled"

export default function TransactionHistory({ items }) {
    return (<TransactionContainer><Table><TableThead>
    <tr>
      <TableTheadTh>Type</TableTheadTh>
      <TableTheadTh>Amount</TableTheadTh>
      <TableTheadTh>Currency</TableTheadTh>
    </tr>
  </TableThead>{items.map(item =>(<TransactionTbody key={item.id} type={item.type} amount={item.amount} currency={item.currency}></TransactionTbody>))}</Table></TransactionContainer> )
}
