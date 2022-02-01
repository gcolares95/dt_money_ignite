import Modal from 'react-modal';

interface NewTransactionModalProps {
  isOpen: boolean;  // props -> se o Modal está aberto ou não
  onRequestClose: () => void; // começando com 'on', pattern para função recebida em props :p
}

export function NewTransactionModal({isOpen, onRequestClose}: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Cadastrar Transação</h2>
    </Modal>
  );
}