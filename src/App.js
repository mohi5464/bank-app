import React, { useState } from "react";

function App() {
  const [balance, setBalance] = useState(1000);
  const [amount, setAmount] = useState("");

  const handleDeposit = () => {
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) {
      alert("Enter a valid amount!");
      return;
    }
    setBalance(balance + value);
    setAmount("");
  };

  const handleWithdraw = () => {
    const value = parseFloat(amount);
    if (isNaN(value) || value <= 0) {
      alert("Enter a valid amount!");
      return;
    }
    if (value > balance) {
      alert("Insufficient funds!");
      return;
    }
    setBalance(balance - value);
    setAmount("");
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>🏦 Simple React Bank</h1>
      <h2 style={styles.balance}>Balance: ₹{balance.toFixed(2)}</h2>

      <input
        type="number"
        placeholder="Enter amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        style={styles.input}
      />

      <div style={styles.buttonContainer}>
        <button onClick={handleDeposit} style={styles.depositBtn}>
          Deposit
        </button>
        <button onClick={handleWithdraw} style={styles.withdrawBtn}>
          Withdraw
        </button>
      </div>
    </div>
  );
}

const styles = {
  container: {
    textAlign: "center",
    marginTop: "100px",
    fontFamily: "Arial, sans-serif",
  },
  title: {
    fontSize: "32px",
    marginBottom: "20px",
  },
  balance: {
    fontSize: "24px",
    marginBottom: "30px",
  },
  input: {
    padding: "10px",
    fontSize: "16px",
    width: "200px",
  },
  buttonContainer: {
    marginTop: "20px",
  },
  depositBtn: {
    backgroundColor: "#4CAF50",
    color: "white",
    padding: "10px 20px",
    marginRight: "10px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  withdrawBtn: {
    backgroundColor: "#f44336",
    color: "white",
    padding: "10px 20px",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
};

export default App;
