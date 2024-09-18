'use client';

import { useState } from 'react';

type Expense = {
  id: number;
  name: string;
  monthly: number | null;
  yearly: number | null;
};

type Investment = {
  id: number;
  name: string;
  monthly: number | null;
  yearly: number | null;
};

const initialExpenses = [
  { id: 1, name: 'Rent', monthly: null, yearly: null },
  { id: 2, name: 'Groceries/Food', monthly: null, yearly: null },
  { id: 3, name: 'Transportation', monthly: null, yearly: null },
  { id: 4, name: 'Entertainment', monthly: null, yearly: null },
  { id: 5, name: 'Emergency Fund', monthly: null, yearly: null }
];

const initialInvestments = [
  { id: 1, name: 'Checkings/Savings', monthly: null, yearly: null },
  { id: 2, name: 'ROTH IRA', monthly: null, yearly: null },
  { id: 3, name: '401k', monthly: null, yearly: null }
];

export default function SalaryCalculator() {
  const [maxSalary, setMaxSalary] = useState<number>(0);
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [investments, setInvestments] = useState<Investment[]>(initialInvestments);
  const [recommendedSalary, setRecommendedSalary] = useState<number | null>(null);

  const handleCostChange = (
    id: number,
    type: 'expense' | 'investment',
    field: 'monthly' | 'yearly',
    value: string
  ) => {
    // If the input is empty, set the corresponding value to null
    if (value === '') {
      if (type === 'expense') {
        setExpenses(expenses.map(exp =>
          exp.id === id
            ? { ...exp, [field]: null, [field === 'monthly' ? 'yearly' : 'monthly']: null }
            : exp
        ));
      } else {
        setInvestments(investments.map(inv =>
          inv.id === id
            ? { ...inv, [field]: null, [field === 'monthly' ? 'yearly' : 'monthly']: null }
            : inv
        ));
      }
      return;
    }
  
    // Parse the input value as a number
    const numberValue = parseFloat(value);
    if (isNaN(numberValue)) return;
  
    if (type === 'expense') {
      setExpenses(expenses.map(exp =>
        exp.id === id
          ? {
              ...exp,
              [field]: numberValue,
              [field === 'monthly' ? 'yearly' : 'monthly']: field === 'monthly' ? numberValue * 12 : numberValue / 12
            }
          : exp
      ));
    } else {
      setInvestments(investments.map(inv =>
        inv.id === id
          ? {
              ...inv,
              [field]: numberValue,
              [field === 'monthly' ? 'yearly' : 'monthly']: field === 'monthly' ? numberValue * 12 : numberValue / 12
            }
          : inv
      ));
    }
  };
  
  const calculateRecommendedSalary = () => {
    const totalExpenses = expenses.reduce((sum, exp) => sum + (exp.yearly || 0), 0);
    const totalInvestments = investments.reduce((sum, inv) => sum + (inv.yearly || 0), 0);
    const total = totalExpenses + totalInvestments;
    setRecommendedSalary(total * 1.2); // Example calculation: 20% more than total expenses + investments
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6 text-center">Salary Negotiation Calculator</h1>
      <p className="mb-4 text-center">
        This Salary Negotiation Calculator helps you evaluate your salary expectations by considering various expenses and investments. Use it to better understand your financial needs and negotiate effectively.
      </p>

      <div className="mb-6 flex justify-center">
        <div className="w-full max-w-xs">
          <h2 className="text-2xl font-semibold mb-4">Maximum Posted Salary</h2>
          <input
            type="number"
            value={maxSalary}
            onChange={(e) => setMaxSalary(parseFloat(e.target.value))}
            className="border p-2 rounded-md w-full"
            placeholder="Enter maximum salary"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
        {expenses.map(exp => (
          <div key={exp.id} className="flex gap-2 mb-2 items-center justify-center">
            <input
              type="text"
              value={exp.name}
              readOnly
              className="border p-2 rounded-md bg-gray-200 w-1/5"
            />
            <input
              type="number"
              value={exp.monthly !== null ? exp.monthly : ''}
              onChange={(e) => handleCostChange(exp.id, 'expense', 'monthly', e.target.value)}
              className="border p-2 rounded-md w-1/5"
              placeholder="Monthly cost"
            />
            <input
              type="number"
              value={exp.yearly !== null ? exp.yearly : ''}
              onChange={(e) => handleCostChange(exp.id, 'expense', 'yearly', e.target.value)}
              className="border p-2 rounded-md w-1/5"
              placeholder="Yearly cost"
            />
          </div>
        ))}
        <button
          onClick={() => setExpenses([...expenses, { id: expenses.length + 1, name: `Expense ${expenses.length + 1}`, monthly: null, yearly: null }])}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
        >
          Add Expense
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Investments</h2>
        {investments.map(inv => (
          <div key={inv.id} className="flex gap-2 mb-2 items-center justify-center">
            <input
              type="text"
              value={inv.name}
              readOnly
              className="border p-2 rounded-md bg-gray-200 w-1/5"
            />
            <input
              type="number"
              value={inv.monthly !== null ? inv.monthly : ''}
              onChange={(e) => handleCostChange(inv.id, 'investment', 'monthly', e.target.value)}
              className="border p-2 rounded-md w-1/5"
              placeholder="Monthly cost"
            />
            <input
              type="number"
              value={inv.yearly !== null ? inv.yearly : ''}
              onChange={(e) => handleCostChange(inv.id, 'investment', 'yearly', e.target.value)}
              className="border p-2 rounded-md w-1/5"
              placeholder="Yearly cost"
            />
          </div>
        ))}
        <button
          onClick={() => setInvestments([...investments, { id: investments.length + 1, name: `Investment ${investments.length + 1}`, monthly: null, yearly: null }])}
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-2"
        >
          Add Investment
        </button>
      </div>

      <div className="mb-6 text-center">
        <button
          onClick={calculateRecommendedSalary}
          className="bg-green-500 text-white py-2 px-4 rounded-md"
        >
          Calculate Recommended Salary
        </button>
        {recommendedSalary !== null && (
          <div className="mt-4">
            <h2 className="text-2xl font-semibold">Recommended Salary</h2>
            <p className="text-xl">${recommendedSalary.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}
