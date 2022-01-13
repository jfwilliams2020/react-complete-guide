import { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import ExpenseFilter from "./ExpenseFilter";

import "./Expenses.css";

function Expenses(props) {
  const [year, setYear] = useState(2022);

  const filterChangedHandler = (newYear) => {
    setYear(newYear);
  };

  return (
    <Card className="expenses">
      <h1>{year}</h1>
      <ExpenseFilter onFilterChanged={filterChangedHandler} />
      <ExpenseItem
        date={props.expenses[0].date}
        title={props.expenses[0].title}
        amount={props.expenses[0].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[1].date}
        title={props.expenses[1].title}
        amount={props.expenses[1].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[2].date}
        title={props.expenses[2].title}
        amount={props.expenses[2].amount}
      ></ExpenseItem>
      <ExpenseItem
        date={props.expenses[3].date}
        title={props.expenses[3].title}
        amount={props.expenses[3].amount}
      ></ExpenseItem>
    </Card>
  );
}

export default Expenses;
