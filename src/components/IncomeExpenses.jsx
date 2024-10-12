import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function IncomeExpenses() {
  const { transactions } = useContext(GlobalContext);
  const income = transactions
    .reduce((acc, transaction) => {
      if (transaction.amount > 0) {
        return (acc += transaction.amount);
      }
      return acc;
    }, 0)
    .toFixed(2) || 0;

  const expense = transactions
    .reduce((acc, transaction) => {
      if (transaction.amount < 0) {
        return (acc += transaction.amount);
      }
      return acc;
    }, 0)
    .toFixed(2) || 0;

  return (
    <div className="inc-exp-container">
      <div>
        <h4>Income</h4>
        <p className="money plus">+${Math.abs(income)}</p>
      </div>
      <div>
        <h4>Expense</h4>
        <p className="money minus">-${Math.abs(expense)}</p>
      </div>
    </div>
  );
}

export default IncomeExpenses;
