import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [description, setDescription] = useState("");
  const [amount, setAmount] = useState("");
  const [expenses, setExpenses] = useState([]);

  function handleSubmit(event) {
    event.preventDefault();

    const numericAmount = Number(amount);

    if (!description.trim() || !amount || numericAmount <= 0) {
      return;
    }

    const newExpense = {
      id: Date.now(),
      description: description.trim(),
      amount: numericAmount,
    };

    setExpenses((current) => [...current, newExpense]);
    setDescription("");
    setAmount("");
  }

  return (
    <main>
      <h1>Expense Manager</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="description">Description</label>
        <input
          id="description"
          value={description}
          onChange={(event) => setDescription(event.target.value)}
          required
        />

        <label htmlFor="amount">Amount (€)</label>
        <input
          id="amount"
          type="number"
          min="0.01"
          step="0.01"
          value={amount}
          onChange={(event) => setAmount(event.target.value)}
          required
        />

        <button type="submit">Add expense</button>
      </form>

      <h2>My expenses</h2>

      {expenses.length === 0 ? (
        <p>No expenses yet.</p>
      ) : (
        <ul>
          {expenses.map((expense) => (
            <li key={expense.id}>
              {expense.description} — €{expense.amount.toFixed(2)}
            </li>
          ))}
        </ul>
      )}
    </main>
  );
}

export default App;