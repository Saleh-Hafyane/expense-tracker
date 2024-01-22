import React, { createContext, useReducer, ReactNode } from "react";

interface ExpenseItem {
  id: number;
  title: string;
  amount: number;
  date: Date;
}

interface ExpenseContextType {
  expenses: ExpenseItem[];
  addExpense: (data: ExpenseItem) => void;
  deleteExpense: (id: number) => void;
  updateExpense: (data: ExpenseItem) => void;
  setExpense: (expenses: ExpenseItem[]) => void;
}

interface Action {
  mode: string;
  data?: any;
}

const ExpenseContext = createContext<ExpenseContextType>({
  expenses: [],
  addExpense: (data) => {},
  deleteExpense: (id) => {},
  updateExpense: (data) => {},
  setExpense: (expenses) => {},
});

function expenseReducer(state: ExpenseItem[], action: Action) {
  switch (action.mode) {
    case "ADD":
      return [{ ...action.data }, ...state];
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
      const reversedExpenses = action.data.reverse();
      return reversedExpenses;
    default:
      return state;
  }
}

interface ExpenseContextProviderProps {
  children: ReactNode;
}

function ExpenseContextProvider({ children }: ExpenseContextProviderProps) {
  const [expenseState, dispatch] = useReducer(expenseReducer, []);

  function addExpense(data: ExpenseItem) {
    dispatch({ mode: "ADD", data });
  }

  function deleteExpense(id: number) {
    dispatch({ mode: "DELETE", data: id });
  }

  function updateExpense(data: ExpenseItem) {
    dispatch({ mode: "UPDATE", data });
  }

  function setExpense(expenses: ExpenseItem[]) {
    dispatch({ mode: "SET", data: expenses });
  }

  const value: ExpenseContextType = {
    expenses: expenseState,
    addExpense,
    updateExpense,
    deleteExpense,
    setExpense,
  };

  return (
      <ExpenseContext.Provider value={value}>
          {children}
          </ExpenseContext.Provider>
  );
}

export { ExpenseContext, ExpenseContextProvider };
