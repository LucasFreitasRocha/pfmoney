import logoImg from '../../assets/logo.svg'
import { ContainerHeader, ContentHeader } from './styles'

export function Header(){
  return (
    <ContainerHeader>
      <ContentHeader>
        <img src={logoImg} alt="pf money" />
        <button type="button">
          Nova Transação
        </button>
      </ContentHeader>
    </ContainerHeader>
  )
}