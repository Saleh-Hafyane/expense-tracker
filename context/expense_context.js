import { createContext, useReducer } from "react";
const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e2",
    title: "two pieces of butter",
    amount: 28.22,
    date: new Date("2023-11-02"),
  },
  {
    id: "e3",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e4",
    title: "two pieces of butter",
    amount: 63.22,
    date: new Date("2023-01-10"),
  },
  {
    id: "e5",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e6",
    title: "two pieces of butter",
    amount: 203.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e7",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
  {
    id: "e8",
    title: "two pieces of butter",
    amount: 23.22,
    date: new Date("2023-11-10"),
  },
];
export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
});
function expenseReducer(state, action) {
  switch (action.mode) {
    case "ADD":
      const id = new Date().toString() + Math.random().toString();
      return [{ ...action.data, id: id }, ...state];
    case "DELETE":
      return state.filter((expense) => expense.id !== action.data);
    case "UPDATE":
      const oldExpenseIndex = state.findIndex(
        (expense) => expense.id === action.data.id
      );
      const oldItem = state[oldExpenseIndex];
      const updatedItem = { ...oldItem, ...action.data };
      const updatedExpenses = [...state];
      updatedExpenses[oldExpenseIndex] = updatedItem;
      return updatedExpenses;
    default:
      return state;
  }
}
function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer, DUMMY_EXPENSES);
  function addExpense(data) {
    dispatch({ mode: "ADD", data: data });
  }
  function deleteExpense(id) {
    dispatch({ mode: "DELETE", data: id });
  }
  function updateExpense(data) {
    dispatch({ mode: "UPDATE", data: data });
  }
  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
