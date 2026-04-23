import type { Expense } from "@/entities/expense";
import type { Debt } from "@/entities/debt";
import _ from "lodash";
import { v4 as uuid } from "uuid";

const calculateDebts = (expenses: Expense[], total: number): Debt[] => {
  if (!expenses || expenses.length === 0) return [];

  const average = total / expenses.length;
  const expensesToCalculate = _.cloneDeep(expenses);
  const debts: Debt[] = [];

  let hasSignificantDifference = true;

  do {
    const maxExpense = expensesToCalculate.reduce((max, cur) =>
      cur.amount > max.amount ? cur : max,
    );

    if (Math.abs(maxExpense.amount - average) < 1) {
      hasSignificantDifference = false;
      break;
    }

    const minExpense = expensesToCalculate.reduce((min, cur) =>
      cur.amount < min.amount ? cur : min,
    );

    const minCostToAverageDiff = average - minExpense.amount;
    const maxCostToAverageDiff = maxExpense.amount - average;
    const resultCost =
      minCostToAverageDiff > maxCostToAverageDiff
        ? maxCostToAverageDiff
        : minCostToAverageDiff;

    minExpense.amount += resultCost;
    maxExpense.amount -= resultCost;

    debts.push({
      id: uuid(),
      from: minExpense.ownerName,
      amount: Math.round(resultCost),
      to: maxExpense.ownerName,
    });
  } while (hasSignificantDifference);

  debts.sort((a, b) => a.from.localeCompare(b.from));
  return debts;
};

export default calculateDebts;
