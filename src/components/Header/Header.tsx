
import logoImg from '../../assets/logo.svg'
import { ContainerHeader, ContentHeader } from './styles'

type HeaderProps = {
  onOpenNewTransactionModal: () => void;

}

export function Header({onOpenNewTransactionModal}: HeaderProps) {
 
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logoImg} alt="pf money" />
        <button type="button" onClick={onOpenNewTransactionModal}>
          Nova Transação
        </button>
        
      </ContentHeader>
    </ContainerHeader>
  )
}