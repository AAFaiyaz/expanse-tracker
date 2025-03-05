import { useState } from "react";
// import Expanse from "./components/Expanse";
import ExpanseList from "./expanse-tracker/components/ExpanseList";

function App() {
  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 5, category: "Utilities" },
    { id: 2, description: "bbb", amount: 50, category: "Utilities" },
    { id: 3, description: "ccc", amount: 5, category: "Utilities" },
    { id: 4, description: "ddd", amount: 5, category: "Utilities" },
  ]);

  return (
    <>
      {/* <Expanse></Expanse> */}
      <ExpanseList
        expenses={expenses}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpanseList>
    </>
  );
}

export default App;
