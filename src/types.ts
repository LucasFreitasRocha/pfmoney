import { ReactNode } from "react";

export type TransactionType = {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: String;
}

export type newTransaction  = Omit<TransactionType, "id" | "createdAt">;

export type TransactionsProviderType = {
  children: ReactNode;
}

export type TransactiontypeContext = {
  transactions: TransactionType[];
  createTransaction: (transaction: newTransaction) => Promise<void>;
}