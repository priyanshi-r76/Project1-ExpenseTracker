function AddExpense({

  title,
  setTitle,

  amount,
  setAmount,

  category,
  setCategory,

  addExpense,

  setActivePage,

}) {

  return (

    <div>

      <div className="top-header">

        <button
          className="menu-button"

          onClick={() =>
            setActivePage("home")
          }
        >
          ←
        </button>

        <h1 className="page-title">
          Add Expense
        </h1>

        <p className="subtitle">
          track your spending smarter
        </p>

      </div>

      <div className="main-card">

        <div className="input-group">

          <p className="input-label">
            Expense Name
          </p>

          <input
            type="text"
            placeholder="Netflix Subscription"

            className="input-field"

            value={title}

            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
          />

        </div>

        <div className="input-group">

          <p className="input-label">
            Amount
          </p>

          <input
            type="number"
            placeholder="500"

            className="input-field"

            value={amount}

            onChange={(e) =>
              setAmount(
                e.target.value
              )
            }
          />

        </div>

        <div className="input-group">

          <p className="input-label">
            Category
          </p>

          <select
            className="input-field"

            value={category}

            onChange={(e) =>
              setCategory(
                e.target.value
              )
            }
          >

            <option
              value=""
              disabled
            >
              Choose Category
            </option>

            <option>
              Food
            </option>

            <option>
              Travel
            </option>

            <option>
              Shopping
            </option>

            <option>
              Entertainment
            </option>

          </select>

        </div>

        <button
          className="primary-button"

          onClick={() => {

            addExpense();

            setActivePage("home");
          }}
        >
          Save Expense
        </button>

      </div>

    </div>
  );
}

export default AddExpense;