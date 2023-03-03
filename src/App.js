import ExpenseItem from "./components/ExpenseItem";

function App() {
  const expenses = [
    { title: "car wash", amount: 17.84, date: new Date(2023, 1, 21) },
    { title: "car Insurance", amount: 237, date: new Date(2023, 2, 21) },
    { title: "clothes", amount: 407.56, date: new Date(2023, 3, 2) },
    { title: "restaurant", amount: 50.42, date: new Date(2023, 2, 11) },
  ];
  return (
    <div>
      <h2>HELLO WORLD!</h2>
      <ExpenseItem
        title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[3].title}
        amount={expenses[3].amount}
        date={expenses[3].date}
      ></ExpenseItem>
    </div>
  );
}

export default App;
