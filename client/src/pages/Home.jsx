function Home({
  title,
  setTitle,

  amount,
  setAmount,

  category,
  setCategory,

  addExpense,

  expenses,
  totalSpending,
  deleteExpense,
}) {

  const categoryCounts = {};

  expenses.forEach((expense) => {

    if (!expense.category) return;

    if (categoryCounts[expense.category]) {
      categoryCounts[expense.category]++;
    }

    else {
      categoryCounts[expense.category] = 1;
    }

  });

  return (
    <div>

      <div className="top-header">

        <h1 className="page-title">
          MOMO
        </h1>

        <p className="subtitle">
          your smart money buddy
        </p>

      </div>

      <div className="welcome-card">

        <div>

          <p className="welcome-text">
            Welcome back
          </p>

          <h2 className="welcome-name">
            Priyanshi
          </h2>

        </div>

        <img
          src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
          alt="wallet"
          className="wallet-image"
        />

      </div>

      <div className="categories-row">

        {Object.entries(categoryCounts)
          .map(([category, count]) => (

            <div
              className="category-card"
              key={category}
            >

              <h3>{category}</h3>

              <p>
                {count} Expenses
              </p>

            </div>

        ))}

      </div>

      <div className="main-card">

        <h2 className="section-title">
          Add Expense
        </h2>

        <input
          type="text"
          placeholder="Expense Name"
          className="input-field"
          value={title}
          onChange={(e) =>
            setTitle(e.target.value)
          }
        />

        <input
          type="number"
          placeholder="Amount"
          className="input-field"
          value={amount}
          onChange={(e) =>
            setAmount(e.target.value)
          }
        />

        <select
          className="input-field"
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >

          <option value="" disabled>
            Choose Category
          </option>

          <option>Food</option>
          <option>Travel</option>
          <option>Shopping</option>
          <option>Entertainment</option>

        </select>

        <button
          className="primary-button"
          onClick={addExpense}
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

      <div style={{ marginTop: "20px" }}>

        {expenses.length === 0 ? (

          <div className="empty-state">
            No expenses added yet.
          </div>

        ) : (

          expenses.map((expense) => (

            <div
              key={expense.id}
              className="expense-card"
            >

              <div
                style={{
                  display: "flex",
                  justifyContent:
                    "space-between",
                }}
              >

                <span>
                  {expense.title}
                </span>

                <span>
                  ₹{expense.amount}
                </span>

              </div>

              <div
                style={{
                  marginTop: "10px",

                  display: "flex",

                  justifyContent:
                    "space-between",

                  alignItems: "center",
                }}
              >

                <small className="category-text">
                  {expense.category}
                </small>

                <button
                  className="delete-button"
                  onClick={() =>
                    deleteExpense(
                      expense.id
                    )
                  }
                >
                  Delete
                </button>

              </div>

            </div>

          ))

        )}

      </div>

    </div>
  );
}

export default Home;