import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//props는 App.js에서부터 온 onAddExpense
const NewExpense = (props) => {
  //자식(expenseForm)으로 부터 element들을 받기위해 필요한 함수
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // ExpenseForm.js의 expenseData(title, amount, date)의 객체를 다 가져옴
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData); //App.js onAddExpense 호출히고 그 함수에 expenseData를 전달함
  };

  return (
    <div className="new-expense">
      {/*ExpenseForm에서 보내는 data 받는 바구니*/}
      <ExpenseForm onSaveExpenseData={saveExpenseDateHandler} />
    </div>
  );
};

export default NewExpense;
