import { ExpensesProvider } from "@/entities/expense/model";
import ExpensesPage from "@/pages/expenses-page/ExpensesPage.tsx";

const App = () => {
  return (
    <ExpensesProvider>
      <ExpensesPage />
    </ExpensesProvider>
  );
};

export default App;
