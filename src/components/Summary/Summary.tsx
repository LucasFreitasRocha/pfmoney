import { ContainerSummary } from "./styles";
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';

export function Summary(){
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
          <p>Entradas</p>
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