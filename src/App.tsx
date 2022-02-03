import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'
import { NewTransactionModal } from './components/NewTransactionModal';
import { TransactionsContext } from './TransactionsContext';

import { GlobalStyle } from './styles/global'

Modal.setAppElement('#root'); // Acessibilidade Modal, falando qual root da nossa aplicação :)

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);

  function handleOpenNewTransactionModal() { // função para abrir o modal
    setIsNewTransactionModalOpen(true);
  }

  function handleCloseNewTransactionModal() { // função para abrir o modal
    setIsNewTransactionModalOpen(false);
  }


  return (
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      <Dashboard />
      
      <NewTransactionModal 
        isOpen={isNewTransactionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
      />
      
      <GlobalStyle />
    </TransactionsContext.Provider>
  )
}
