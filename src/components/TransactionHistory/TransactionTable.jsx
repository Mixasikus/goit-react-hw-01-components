import {Tbody, TbodyTd} from "./TransactionHistory.styled"

export default function TransactionTbody({ type, amount, currency }) {
    return (<Tbody>
    <tr>
      <TbodyTd>{type}</TbodyTd>
      <TbodyTd>{amount}</TbodyTd>
      <TbodyTd>{currency}</TbodyTd>
    </tr>
  </Tbody>
    )
}

