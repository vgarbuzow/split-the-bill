import { DebtsProvider } from "@/entities/debt/model";
import DebtPage from "@/pages/debt-page/DebtPage";

const App = () => {
  return (
    <DebtsProvider>
      <DebtPage />
    </DebtsProvider>
  );
};

export default App;
