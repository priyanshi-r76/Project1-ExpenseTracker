import BottomNav from "./components/BottomNav";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("Food");

  const [expenses, setExpenses] = useState([]);

  const addExpense = () => {
    if (!title || !amount) {
      alert("Please fill all fields");
      return;
    }

    const newExpense = {
      id: Date.now(),
      title,
      amount: Number(amount),
      category,
    };

    setExpenses([...expenses, newExpense]);

    setTitle("");
    setAmount("");
    setCategory("");
  };

  const deleteExpense = (id) => {
    const updatedExpenses = expenses.filter(
      (expense) => expense.id !== id
    );

    setExpenses(updatedExpenses);
  };

  const totalSpending = expenses.reduce(
    (total, expense) => total + expense.amount,
    0
  );

  return (
    <div className="app-container">
      <div className="mobile-frame">
      <h1 className="page-title">MOMO</h1>
      <p className="subtitle">your smart money buddy </p>

      <div className="main-card">
        <h2>Add Expense</h2>

        <input
          type="text"
          placeholder="Expense Name"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="input-field"
        />

        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
        />

        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="input-field"
        >
          <option value="" disabled>
            Choose Category
          </option>

          <option>Travel</option>
          <option>Food</option>
          <option>Shopping</option>
          <option>Entertainment</option>
        </select>

        <button
          onClick={addExpense}
          className="primary-button"
        >
          Add Expense
        </button>
      </div>

      <div className="total-card">
        <p className="category-text">
          Total Spending
        </p>

        <h2 className="total-amount">
          ₹{totalSpending}
        </h2>
      </div>

      <div style={{ marginTop: "30px", maxWidth: "400px" }}>
        <h2>Expenses</h2>

        {expenses.map((expense) => (
          <div
            key={expense.id}
            className="expense-card"
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <span>{expense.title}</span>
              <span>₹{expense.amount}</span>
            </div>

            <div
              style={{
                marginTop: "8px",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <small className="category-text">
                {expense.category}
              </small>

              <button
                onClick={() => deleteExpense(expense.id)}
                className="delete-button"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      </div>
      <BottomNav />
    </div>
  );
}

export default App;