import ExpensesPage from "@/pages/expenses-page/ExpensesPage.tsx";
import ExpensesProvider from "@/entities/expense/model";

const App = () => {
  return (
    <ExpensesProvider>
      <ExpensesPage />
    </ExpensesProvider>
  );
};

export default App;
