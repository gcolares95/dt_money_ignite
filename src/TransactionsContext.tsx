import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

interface Transaction {
  id: number;
  title: string;
  amount: number;
  type: string;
  category: string;
  createdAt: string;
}

 // quais sãos os dados que preciso receber para criar uma nova transação
type TransactionInput = Omit<Transaction, 'id' | 'createdAt'>; 

// avisando para nosso componente recebe conteúdo dentro dele (children)
interface TransactionsProviderProps {
  children: ReactNode;
}

interface TransactionsContextData {
  transactions: Transaction[];
  createTransaction: (transaction: TransactionInput) => void; 
}

export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);
 
export function TransactionsProvider({ children }: TransactionsProviderProps) {
    const [transactions, setTransactions] = useState<Transaction[]>([]);

    useEffect(() => {
      api.get('transactions')
        .then(response => setTransactions(response.data.transactions));
    }, []);

    function createTransaction(transaction: TransactionInput) {  
      api.post('/transactions', transaction)
    }

    return (
      <TransactionsContext.Provider value={{ transactions, createTransaction }}>
        {children}
      </TransactionsContext.Provider>

    );
}