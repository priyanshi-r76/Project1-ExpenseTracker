function Reports({ expenses }) {
  const totalSpent = expenses.reduce(
    (total, expense) =>
      total + Number(expense.amount),
    0
  );

  const totalTransactions =
    expenses.length;
  return (
    <div>

      <div className="top-header">

        <h1 className="page-title">
          Reports
        </h1>

        <p className="subtitle">
          monthly spending overview
        </p>

      </div>

      <div className="report-card">

        <p className="report-label">
          Monthly Summary
        </p>

        <h2 className="report-amount">
          ₹{totalSpent}
        </h2>

        <p className="report-text">
          {totalTransactions} total transactions recorded.
        </p>

      </div>

      <div className="report-list">

        <div className="report-item">
          <span>Food</span>
          <span>₹{}</span>
        </div>

        <div className="report-item">
          <span>Shopping</span>
          <span>₹{}</span>
        </div>

        <div className="report-item">
          <span>Travel</span>
          <span>₹{}</span>
        </div>

        <div className="report-item">
          <span>Entertainment</span>
          <span>₹{}</span>
        </div>

      </div>

    </div>
  );
}

export default Reports;