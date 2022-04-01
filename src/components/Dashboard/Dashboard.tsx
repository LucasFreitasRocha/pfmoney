import { Summary } from "../Summary/Summary";
import { TransactionsTable } from "../TransactionsTable/TransactionsTable";
import { ContainerDashBoard } from "./styles";

export function Dashboard(){
  return (
    <>
      <ContainerDashBoard>
        <Summary/>
        <TransactionsTable />
      </ContainerDashBoard>
    </>
  )
}