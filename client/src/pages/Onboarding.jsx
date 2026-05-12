function Onboarding({
  setActivePage,
}) {
  return (
    <div className="onboarding-container">

      <div className="onboarding-image">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2331/2331970.png"
          alt="wallet"
        />
      </div>

      <h1 className="onboarding-title">
        Welcome to MOMO
      </h1>

      <p className="onboarding-text">
        Softly manage your money,
        expenses, and goals in one
        cozy space.
      </p>

      <button
        className="primary-button"
        onClick={() =>
            setActivePage("home")
        }
      >
        Get Started
      </button>

    </div>
  );
}

export default Onboarding;