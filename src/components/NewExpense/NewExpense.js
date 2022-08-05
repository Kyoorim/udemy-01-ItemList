import { useState } from "react";

import "./NewExpense.css";
import ExpenseForm from "./ExpenseForm";

//props는 App.js에서부터 온 onAddExpense
const NewExpense = (props) => {
  // 상태에 따라 ExpenseForm 보여줄지 button 보여줄지 결정
  const [isEditing, setIsEditing] = useState(false);

  //자식(expenseForm)으로 부터 element들을 받기위해 필요한 함수
  const saveExpenseDateHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData, // ExpenseForm.js의 expenseData(title, amount, date)의 객체를 다 가져옴
      id: Math.random().toString(),
    };
    console.log(expenseData);
    props.onAddExpense(expenseData); //App.js onAddExpense 호출히고 그 함수에 expenseData를 전달함
    setIsEditing(false); // 제출하고 난 다음에 Editing하는 화면이 닫히도록 함
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const stopEditingHandler = () => {
    setIsEditing(false);
  };

  return (
    <div className="new-expense">
      {/* isEditing이 아니면 버튼을 보여주는 조건문 */}
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}
      {/*ExpenseForm에서 보내는 data 받는 바구니*/}
      {isEditing && (
        <ExpenseForm
          onSaveExpenseData={saveExpenseDateHandler}
          onCancel={stopEditingHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
