import BottomNav from "./components/BottomNav";
import { useState, useEffect } from "react";

import Home from "./pages/Home";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";
import Reports from "./pages/Reports";
import Onboarding from "./pages/Onboarding";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

function App() {

  const [activePage, setActivePage] =
    useState("onboarding");

  const [title, setTitle] =
    useState("");

  const [amount, setAmount] =
    useState("");

  const [category, setCategory] =
    useState("");

  const [expenses, setExpenses] =
    useState(() => {

      const savedExpenses =
        localStorage.getItem("expenses");

      return savedExpenses
        ? JSON.parse(savedExpenses)
        : [];

    });

  const [profileName, setProfileName] =
    useState(() => {

      return (
        localStorage.getItem(
          "profileName"
        ) || "Priyanshi"
      );

    });

  const [profileBio, setProfileBio] =
    useState(() => {

      return (
        localStorage.getItem(
          "profileBio"
        ) || "smart money tracker"
      );

    });

  useEffect(() => {

    localStorage.setItem(
      "expenses",
      JSON.stringify(expenses)
    );

  }, [expenses]);

  useEffect(() => {

    localStorage.setItem(
      "profileName",
      profileName
    );

    localStorage.setItem(
      "profileBio",
      profileBio
    );

  }, [profileName, profileBio]);

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
      date: new Date(),
    };

    setExpenses([
      ...expenses,
      newExpense,
    ]);

    setTitle("");
    setAmount("");
    setCategory("");
  };

  const deleteExpense = (id) => {

    const updatedExpenses =
      expenses.filter(
        (expense) =>
          expense.id !== id
      );

    setExpenses(updatedExpenses);
  };

  const totalSpending =
    expenses.reduce(
      (total, expense) =>
        total + expense.amount,
      0
    );

  return (

    <div className="phone-container">

      <AnimatePresence mode="wait">

        {activePage === "onboarding" && (

          <motion.div
            key="onboarding"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
          >

            <Onboarding
              setActivePage={
                setActivePage
              }
            />

          </motion.div>

        )}

        {activePage === "home" && (

          <motion.div
            key="home"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
          >

            <Home
              title={title}
              setTitle={setTitle}

              amount={amount}
              setAmount={setAmount}

              category={category}
              setCategory={setCategory}

              addExpense={addExpense}

              expenses={expenses}

              totalSpending={
                totalSpending
              }

              deleteExpense={
                deleteExpense
              }
            />

          </motion.div>

        )}

        {activePage === "analytics" && (

          <motion.div
            key="analytics"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
          >

            <Analytics
              expenses={expenses}
            />

          </motion.div>

        )}

        {activePage === "reports" && (

          <motion.div
            key="reports"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
          >

            <Reports
              expenses={expenses}
            />

          </motion.div>

        )}

        {activePage === "profile" && (

          <motion.div
            key="profile"
            initial={{
              opacity: 0,
              y: 20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            transition={{
              duration: 0.3,
            }}
          >

            <Profile
              profileName={
                profileName
              }

              setProfileName={
                setProfileName
              }

              profileBio={
                profileBio
              }

              setProfileBio={
                setProfileBio
              }
            />

          </motion.div>

        )}

      </AnimatePresence>

      <BottomNav
        setActivePage={
          setActivePage
        }

        activePage={activePage}
      />

    </div>

  );
}

export default App;