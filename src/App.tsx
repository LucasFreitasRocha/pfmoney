import { useState } from "react";
import Modal from "react-modal";
import { Dashboard } from "./components/Dashboard/Dashboard";
import { Header } from "./components/Header/Header";
import { NewTransactionsModal } from "./components/NewTransactionsModal/NewTransactionsModal";
import { GlobalStyles } from "./styles/global";
import { TransactionsContext } from "./TransactionsContext";


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
    <TransactionsContext.Provider value={[]}>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal}/>
      <NewTransactionsModal isOpen={isNewTransactionModalOpen} onRequestClose={handleCloseNewTransactionModal}/>
      <Dashboard />
      <GlobalStyles />
    </TransactionsContext.Provider>
  );
}