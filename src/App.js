import { useState } from "react";

import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = (expense) => {
    // 기존 배열에 새로 입력한 배열이 추가되도록 하는 함수
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });

    //expense라는 바구니를 통해 NewExpense.js에서 보내는 expenseData를 받아옴
    // console.log("In App.js");
    // console.log(expense);
  };

  return (
    <div>
      {/*NewExpense.js에서 보내는 expenseData를 받는 바구니*/}
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
};

export default App;
