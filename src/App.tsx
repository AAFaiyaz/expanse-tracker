import { useState } from "react";
// import Expanse from "./components/Expanse";
import ExpanseList from "./expanse-tracker/components/ExpanseList";
import ExpenseFilter from "./expanse-tracker/components/ExpenseFilter";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");

  const [expenses, setExpenses] = useState([
    { id: 1, description: "aaa", amount: 5, category: "Utilities" },
    { id: 2, description: "bbb", amount: 50, category: "Utilities" },
    { id: 3, description: "ccc", amount: 5, category: "Utilities" },
    { id: 4, description: "ddd", amount: 5, category: "Utilities" },
  ]);

  const visibleExpress = selectedCategory
    ? expenses.filter((e) => e.category === selectedCategory)
    : expenses;

  return (
    <>
      {/* <Expanse></Expanse> */}
      <div className="mb-3">
        <ExpenseFilter
          onSelectCategory={(category) => setSelectedCategory(category)}
        ></ExpenseFilter>
      </div>
      <ExpanseList
        expenses={visibleExpress}
        onDelete={(id) => setExpenses(expenses.filter((e) => e.id !== id))}
      ></ExpanseList>
    </>
  );
}

export default App;
