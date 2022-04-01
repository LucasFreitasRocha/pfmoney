import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { NewTransactionsModal } from "./components/NewTransactionsModal/NewTransactionsModal";
import { GlobalStyles } from "./styles/global";


  Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionModalOpen] = useState(false);
  function handleOpenNewTransactionModal(){
    setIsNewTransactionModalOpen(true);
  }
  function handleCloseNewTransactionModal(){
    setIsNewTransactionModalOpen(false);
  }
  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionsModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <Dashboard />
      <GlobalStyles />
    </>
  );
}