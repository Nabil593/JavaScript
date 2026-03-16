const transactions = [
  {type: "income", amount: 100},
  {type: "expense", amount: 50},
  {type: "income", amount: 200}
];

// Get all income amounts
const incomeAmounts = transactions
  .filter(t => t.type === "income")
  .map(t => t.amount);

console.log(incomeAmounts); // [100, 200]

// Total income
const totalIncome = incomeAmounts.reduce((sum, amt) => sum + amt, 0);

console.log(totalIncome); // 300

// Find first expense
const firstExpense = transactions.find(t => t.type === "expense");
console.log(firstExpense); // {type: "expense", amount: 50}