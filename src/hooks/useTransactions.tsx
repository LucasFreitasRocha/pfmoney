import { createContext, useContext, useEffect, useState } from "react";
import { api } from "../services/api";
import { newTransaction, TransactionsProviderType, TransactionType, TransactiontypeContext } from "../types";

const TransactionsContext = createContext<TransactiontypeContext>(
  {} as TransactiontypeContext
);


export function TransactionsProvider({ children} : TransactionsProviderType) {
  const [transactions,setTransaction] = useState<TransactionType[]>([]);

  async function createTransaction(newTransaction: newTransaction) {
    const response = await api.post("/transactions", newTransaction);
    const { transaction } = response.data;
    setTransaction([...transactions, transaction]);
  }
  useEffect(() => {

    api.get('/transactions').then(response => {
      
      setTransaction(response.data.transactions);
    });
  }, []);
  return (
    <TransactionsContext.Provider
     value={{
        transactions,
        createTransaction
      }}> 
      {children}
    </TransactionsContext.Provider>
  );
}

export function useTransactions() {
  const context = useContext(TransactionsContext);
  return context; 
}
