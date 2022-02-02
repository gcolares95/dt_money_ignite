import Modal from 'react-modal';

import { Container, TransactionTypeContainer } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';

interface NewTransactionModalProps {
  isOpen: boolean;  // props -> se o Modal está aberto ou não
  onRequestClose: () => void; // começando com 'on', pattern para função recebida em props :p
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay" // para estilizar o modal do 0
      className="react-modal-content" // className no Model vai ser aplicado ao Content do modal
    >

      <button 
        type="button"
        onClick={onRequestClose}
        className="react-modal-close"
        >
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <Container>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder="Título" 
        />

        <input 
          type="number"
          placeholder="valor"
        />

        <TransactionTypeContainer>
          <button
            type="button"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </button>

          <button
            type="button"
          >
            <img src={outComeImg} alt="Saída" />
            <span>Saída</span>
          </button>
        </TransactionTypeContainer>
       <input 
          placeholder="Categoria"
        />

        <button type="submit">
          Cadastrar  
        </button> 
      </Container>
    </Modal>

  );
}