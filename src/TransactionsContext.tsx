import { createContext, ReactNode, useEffect, useState } from 'react';
import { api } from './services/api';

// Interfaces
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
  createTransaction: (transaction: TransactionInput) => Promise<void>;
}

// Criação de contexto
export const TransactionsContext = createContext<TransactionsContextData>(
  {} as TransactionsContextData
);

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([]);

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions));
  }, []);

  async function createTransaction(transactionInput: TransactionInput) {
    const response = await api.post('/transactions', {
      ...transactionInput,
      createdAt: new Date()
    })
    const { transaction } = response.data; // pegando a transaction que eu inseri

    setTransactions([
      ...transactions,
      transaction,  // inserindo a nova transação no contexto
    ])
  }

  return (
    <TransactionsContext.Provider value={{ transactions, createTransaction }}>
      {children}
    </TransactionsContext.Provider>

  );
}