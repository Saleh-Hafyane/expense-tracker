import { createContext, useReducer } from "react";

export const ExpenseContext = createContext({
  expenses: [],
  addExpense: ({ id ,title, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { title, amount, date }) => {},
  setExpense:(expenses)=>{}
});
function expenseReducer(state, action) {
  switch (action.mode) {
    case "ADD":
      return [{ ...action.data}, ...state];
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
    case "SET":
      const reversedExpenses = action.data.reverse()
      return reversedExpenses

    default:
      return state;
  }
}
function ExpenseContextProvider({ children }) {
  const [expenseState, dispatch] = useReducer(expenseReducer,[]);
  function addExpense(data) {
    dispatch({ mode: "ADD", data: data });
  }
  function deleteExpense(id) {
    dispatch({ mode: "DELETE", data: id });
  }
  function updateExpense(data) {
    dispatch({ mode: "UPDATE", data: data });
  }
  function setExpense(expenses){
    dispatch({mode:"SET",data:expenses})
  }
  const value = {
    expenses: expenseState,
    addExpense: addExpense,
    updateExpense: updateExpense,
    deleteExpense: deleteExpense,
    setExpense: setExpense
  };
  return (
    <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
  );
}

export default ExpenseContextProvider;
