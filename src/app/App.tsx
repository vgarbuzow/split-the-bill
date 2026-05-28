import BillPage from "@/pages/bill/ui/BillPage.tsx";
import { ExpensesProvider } from "@/entities/expense";

const App = () => {
  return (
    <ExpensesProvider>
      <BillPage />
    </ExpensesProvider>
  );
};

export default App;
