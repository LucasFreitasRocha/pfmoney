import { ContainerSummary } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from "../../TransactionsContext";
import { useContext } from "react";

export function Summary(){
  const data = useContext(TransactionsContext);
  return (
    <ContainerSummary>
      <div>
        <header>
          <p>Entradas</p>
          <img src={incomeImg} alt="Entradas" />

        </header>
        <strong>R$1000,00</strong>
      </div>
      <div>
        <header>
          <p>Saidas</p>
          <img src={outcomeImg} alt="Saidas" />

        </header>
        <strong>- R$500,00</strong>
      </div>
      <div className="highlight-background">
        <header>
          <p>total</p>
          <img src={totalImg} alt="total" />

        </header>
        <strong>R$500,00</strong>
      </div>
    </ContainerSummary>
    
  );
}