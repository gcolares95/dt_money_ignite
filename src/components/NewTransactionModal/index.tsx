import Modal from 'react-modal';

import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg';
import incomeImg from '../../assets/income.svg';
import outComeImg from '../../assets/outcome.svg';
import { FormEvent, useState } from 'react';

interface NewTransactionModalProps {
  isOpen: boolean;  // props -> se o Modal está aberto ou não
  onRequestClose: () => void; // começando com 'on', pattern para função recebida em props :p
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  const [title, setTitle] = useState('');
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState('');
  const [type, setType] = useState('deposit');

  // handle é uma função que vem atráves de uma ação do usuário
  function handleCreateNewTransaction(event: FormEvent) { 
    event.preventDefault();

    console.log({
      title,
      value,
      category,
      type
    })
  }
  
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

      <Container onSubmit={handleCreateNewTransaction}>
        <h2>Cadastrar Transação</h2>

        <input 
          placeholder="Título"
          value={title}
          onChange={event => setTitle(event.target.value)}
        />

        <input 
          type="number"
          placeholder="valor"
          value={value}
          onChange={event => setValue(Number(event.target.value))}
        />

        <TransactionTypeContainer>
          <RadioBox
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type == 'deposit'}
            activeColor="green"
          >
            <img src={incomeImg} alt="Entrada" />
            <span>Entrada</span>
          </RadioBox>

          <RadioBox
            type="button" 
            onClick={() => { setType('withdraw'); }}
            isActive={type == 'withdraw'}
            activeColor="red"
          >
            <img src={outComeImg} alt="Saída" />
            <span>Saída</span>
          </RadioBox>
        </TransactionTypeContainer>
       <input 
          placeholder="Categoria"
          value={category}
          onChange={event => setCategory(event.target.value)}
        />

        <button type="submit">
          Cadastrar  
        </button> 
      </Container>
    </Modal>

  );
}