'use client';

import { useState } from 'react';

type Expense = {
  id: number;
  name: string;
  monthly: number;
  yearly: number;
};

type Investment = {
  id: number;
  name: string;
  monthly: number;
  yearly: number;
};

const initialExpenses = [
  { id: 1, name: 'Rent', monthly: 0, yearly: 0 },
  { id: 2, name: 'Groceries/Food', monthly: 0, yearly: 0 },
  { id: 3, name: 'Transportation', monthly: 0, yearly: 0 },
  { id: 4, name: 'Entertainment', monthly: 0, yearly: 0 },
  { id: 5, name: 'Emergency Fund', monthly: 0, yearly: 0 }
];

const initialInvestments = [
  { id: 1, name: 'Checkings/Savings', monthly: 0, yearly: 0 },
  { id: 2, name: 'ROTH IRA', monthly: 0, yearly: 0 },
  { id: 3, name: '401k', monthly: 0, yearly: 0 }
];

export default function SalaryCalculator() {
  const [salaryRange, setSalaryRange] = useState({ min: 0, max: 0 });
  const [expenses, setExpenses] = useState<Expense[]>(initialExpenses);
  const [investments, setInvestments] = useState<Investment[]>(initialInvestments);
  const [recommendedSalary, setRecommendedSalary] = useState<number | null>(null);

  const handleCostChange = (
    id: number,
    type: 'expense' | 'investment',
    field: 'monthly' | 'yearly',
    value: string
  ) => {
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
    const totalExpenses = expenses.reduce((sum, exp) => sum + exp.yearly, 0);
    const totalInvestments = investments.reduce((sum, inv) => sum + inv.yearly, 0);
    const total = totalExpenses + totalInvestments;
    setRecommendedSalary(total * 1.2); // Example calculation: 20% more than total expenses + investments
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">Salary Negotiation Calculator</h1>
      <p className="mb-4">
        This Salary Negotiation Calculator helps you evaluate your salary expectations by considering various expenses and investments. Use it to better understand your financial needs and negotiate effectively.
      </p>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Salary Range</h2>
        <div className="flex gap-4">
          <input
            type="number"
            placeholder="Min Salary"
            value={salaryRange.min}
            onChange={(e) => setSalaryRange({ ...salaryRange, min: parseFloat(e.target.value) })}
            className="border p-2 rounded-md flex-1"
          />
          <input
            type="number"
            placeholder="Max Salary"
            value={salaryRange.max}
            onChange={(e) => setSalaryRange({ ...salaryRange, max: parseFloat(e.target.value) })}
            className="border p-2 rounded-md flex-1"
          />
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Expenses</h2>
        {expenses.map(exp => (
          <div key={exp.id} className="flex gap-4 mb-2">
            <input
              type="text"
              value={exp.name}
              readOnly
              className="border p-2 rounded-md flex-1 bg-gray-200"
            />
            <input
              type="number"
              value={exp.monthly}
              onChange={(e) => handleCostChange(exp.id, 'expense', 'monthly', e.target.value)}
              className="border p-2 rounded-md flex-1"
              placeholder="Monthly"
            />
            <input
              type="number"
              value={exp.yearly}
              onChange={(e) => handleCostChange(exp.id, 'expense', 'yearly', e.target.value)}
              className="border p-2 rounded-md flex-1"
              placeholder="Yearly"
            />
          </div>
        ))}
        <button
          onClick={() => setExpenses([...expenses, { id: expenses.length + 1, name: `Expense ${expenses.length + 1}`, monthly: 0, yearly: 0 }])}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Expense
        </button>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Investments</h2>
        {investments.map(inv => (
          <div key={inv.id} className="flex gap-4 mb-2">
            <input
              type="text"
              value={inv.name}
              readOnly
              className="border p-2 rounded-md flex-1 bg-gray-200"
            />
            <input
              type="number"
              value={inv.monthly}
              onChange={(e) => handleCostChange(inv.id, 'investment', 'monthly', e.target.value)}
              className="border p-2 rounded-md flex-1"
              placeholder="Monthly"
            />
            <input
              type="number"
              value={inv.yearly}
              onChange={(e) => handleCostChange(inv.id, 'investment', 'yearly', e.target.value)}
              className="border p-2 rounded-md flex-1"
              placeholder="Yearly"
            />
          </div>
        ))}
        <button
          onClick={() => setInvestments([...investments, { id: investments.length + 1, name: `Investment ${investments.length + 1}`, monthly: 0, yearly: 0 }])}
          className="bg-blue-500 text-white py-2 px-4 rounded-md"
        >
          Add Investment
        </button>
      </div>

      <div className="mb-6">
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
