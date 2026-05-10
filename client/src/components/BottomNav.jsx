function BottomNav() {
  return (
    <div className="bottom-nav">
      <button>
        <span>🏠</span>
        <p>Home</p>
      </button>

      <button>
        <span>📊</span>
        <p>Stats</p>
      </button>

      <button className="add-button">
        ＋
      </button>

      <button>
        <span>📄</span>
        <p>Reports</p>
      </button>

      <button>
        <span>👤</span>
        <p>Profile</p>
      </button>
    </div>
  );
}

export default BottomNav;