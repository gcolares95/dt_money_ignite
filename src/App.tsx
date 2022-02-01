import Modal from 'react-modal';
import { useState } from 'react';
import { Dashboard } from './components/Dashboard'
import { Header } from './components/Header'

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
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      
      
      <Dashboard />
      
      <Modal 
          isOpen={isNewTransactionModalOpen}
          onRequestClose={handleCloseNewTransactionModal}>
          <h2>Cadastrar Transação</h2>
      </Modal>
      
      <GlobalStyle />
    </>
  )
}
