function BottomNav({
  setActivePage,
  activePage,
}) {
  return (
    <div className="bottom-nav">
      <button
        onClick={() => setActivePage("home")}
        className={
          activePage === "home"
            ? "nav-active"
            : ""
        }
      >
        <span>🏠</span>
        <p>Home</p>
      </button>

      <button
        onClick={() => setActivePage("analytics")}
        className={
          activePage === "analytics"
            ? "nav-active"
            : ""
        }
      >
        <span>📊</span>
        <p>Stats</p>
      </button>

      <button
        className="add-button"

        onClick={() =>
          setActivePage(
            "addExpense"
          )
        }
      >
        ＋
      </button>

      <button
        onClick={() => setActivePage("reports")}
        className={
          activePage === "reports"
            ? "nav-active"
            : ""
        }
      >
        <span>📄</span>
        <p>Reports</p>
      </button>

      <button
        onClick={() => setActivePage("profile")}
        className={
          activePage === "profile"
            ? "nav-active"
            : ""
        }
      >
        <span>👤</span>
        <p>Profile</p>
      </button>
    </div>
  );
}

export default BottomNav;