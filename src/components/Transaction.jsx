import PropTypes from "prop-types";
import { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

function Transaction({ transaction }) {
  const sign = transaction.amount < 0 ? "-" : "+";
  const { deleteTransaction } = useContext(GlobalContext);
  return (
    <li className={sign === "-" ? "minus" : "plus"}>
      {transaction.text}{" "}
      <span>
        {sign}${Math.abs(transaction.amount)}
      </span>
      <button
        className="delete-btn"
        onClick={() => deleteTransaction(transaction.id)}
      >
        x
      </button>
    </li>
  );
}

Transaction.propTypes = {
  transaction: PropTypes.shape({
    text: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};

export default Transaction;
