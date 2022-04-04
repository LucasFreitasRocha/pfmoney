
import { FormEvent, useState } from "react";
import Modal from "react-modal";
import { ButtonTypeTransactions, ContainerNewTransactionsModal, ContainerTypeTransactionsModal } from "./styles";
import { api } from "../../services/api";
import closeImg from "../../assets/close.svg";
import incomeImg from "../../assets/income.svg";
import outcomeImg from "../../assets/outcome.svg";
type NewTransactionsModalProps = {
  isOpen: boolean;
  onRequestClose: () => void;
}
export function NewTransactionsModal({isOpen,onRequestClose}: NewTransactionsModalProps) {
  const [type, setType] = useState("deposit");
  const [title, setTitle] = useState("");
  const [value, setValue] = useState(0);
  const [category, setCategory] = useState("");

  function handleCreateNewTransaction(event: FormEvent){
    event.preventDefault();
    const newTransaction = {
      title,
      type,
      value,
      category
    };
    console.log(newTransaction);
    api.post("/transactions", newTransaction).then(() => {});
    setTitle('');
    setValue(0);
    setCategory('');  
    onRequestClose();
  }
  return (
    <Modal
    isOpen={isOpen}
    onRequestClose={onRequestClose}
    overlayClassName="react-modal-overlay"
    className="react-modal-content"
  >
    <button type="button" className="react-modal-close"  onClick={onRequestClose}>
      <img src={closeImg} alt="Fechar o modal"  />
    </button>
    <ContainerNewTransactionsModal onSubmit={handleCreateNewTransaction}>
      <h2>Cadastrar Transação</h2> 
      <input
        placeholder="Titulo"
        value={title}
        onChange = {(event) => setTitle(event.target.value)}
      />
      <input
        type="number"
        name="value"
        placeholder="Valor"
        value={value}
        onChange = {(event) => setValue(Number(event.target.value))}  
      />
      <ContainerTypeTransactionsModal>
        <ButtonTypeTransactions
          type="button"
          onClick={() => setType("deposit")}
          isActive={type === "deposit"}
          activeColor="green"
        >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
        </ButtonTypeTransactions>
        <ButtonTypeTransactions 
          type="button"
          onClick={() => setType("withdraw")}
          isActive={type === "withdraw"}
          activeColor="red"
        >
          <img src={outcomeImg} alt="Saida" />
          <span>Saida</span>
        </ButtonTypeTransactions>
      </ContainerTypeTransactionsModal>
      <input
        type="text"
        name="Category"
        placeholder="Categoria"
        value={category}
        onChange = {(event) => setCategory(event.target.value)}
      />

      <button type="submit">Cadastrar</button>
    </ContainerNewTransactionsModal>
  </Modal>
  )
}