import { useContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { TransactionsContext } from "../../TransactionsContext";
import { ContainerTransactionsTable } from "./styles";
type TransactionType = {
  id: number;
  title: string;
  type: string;
  amount: number;
  category: string;
  createdAt: String;
}
export function TransactionsTable(){
  const [transactions,setTransaction] = useState<TransactionType[]>([]);
  const data = useContext(TransactionsContext);
  useEffect(() => {

    api.get('/transactions').then(response => {
      console.log(response.data);
      setTransaction(response.data.transactions);
    });
  }, []);
  return (
    <ContainerTransactionsTable>
      <table>
        <thead>
          <tr>
            <th>Titulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>
          </tr>
        </thead>
        <tbody>
          {transactions.map(transaction => (
            <tr key={transaction.id}>
              <td>{transaction.title}</td>
              <td className={transaction.type}>
                { new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(transaction.amount)}
               
                
              </td>
              <td>{transaction.category}</td>
              <td>
                { new Intl.DateTimeFormat('pt-BR').format(new Date(transaction.createdAt.toString()))}
               
              </td>
            </tr>
            )
          )}  
        </tbody>
      </table>
    </ContainerTransactionsTable>
  );
}