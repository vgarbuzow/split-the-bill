import { useContext } from "react";
import type { DebtsApi, DebtsState } from "./types";
import { DebtsApiContext, DebtsStateContext } from "./DebtsProvider";

export const useDebtsState = (): DebtsState => {
  const context = useContext(DebtsStateContext);
  if (!context) {
    throw new Error("useDebtsState must be used within DebtsProvider");
  }
  return context;
};

export const useDebtsApi = (): DebtsApi => {
  const context = useContext(DebtsApiContext);
  if (!context) {
    throw new Error("useDebtsApi must be used within DebtsProvider");
  }
  return context;
};
