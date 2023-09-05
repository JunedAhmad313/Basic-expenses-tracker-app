import ExpenseItem from "./Components/ExpenseItem";

function App() {
  const expenses = [
    {
      id: "e1",
      title: "Travel Spent",
      amount: 1250,
      date: new Date(2023, 7, 11),
    },
    {
      id: "e2",
      title: "Room Rent",
      amount: 2000,
      date: new Date(2023, 7, 21),
    },
    {
      id: "e3",
      title: "Food Spent",
      amount: 2000,
      date: new Date(2023, 8, 5),
    },
    {
      id: "e4",
      title: "EMI Payemnt",
      amount: 500,
      date: new Date(2023, 8, 4),
    },
  ];

  return (
    <>
      <ExpenseItem
        date={expenses[0].date}
        title={expenses[0].title}
        amount={expenses[0].amount}
      />
      <ExpenseItem
        date={expenses[1].date}
        title={expenses[1].title}
        amount={expenses[1].amount}
      />
      <ExpenseItem
        date={expenses[2].date}
        title={expenses[2].title}
        amount={expenses[2].amount}
      />
      <ExpenseItem
        date={expenses[3].date}
        title={expenses[3].title}
        amount={expenses[3].amount}
      />
    </>
  );
}

export default App;
