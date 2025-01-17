import { GlobalContext } from "../context/GlobalState";
import { useContext } from "react";
import Transaction from "./Transaction";

function TransactionList() {
  const { transactions } = useContext(GlobalContext);


  return (
    <div>
      <h3>History</h3>
      <ul className="list">
        {transactions &&
          transactions.map((transaction) => (
            <Transaction transaction={transaction} key={transaction.id} />
          ))}

      </ul>
    </div>
  );
}

export default TransactionList;
