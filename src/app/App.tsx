import BillPage from "@/pages/bill/BillPage.tsx";
import { ExpensesProvider } from "@/entities/expense";

const App = () => {
  return (
    <ExpensesProvider>
      <BillPage />
    </ExpensesProvider>
  );
};

export default App;
