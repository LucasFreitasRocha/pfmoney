import { useEffect } from "react";
import { api } from "../../services/api";
import { ContainerTransactionsTable } from "./styles";

export function TransactionsTable(){
  useEffect(() => {

    api.get('/transactions').then(response => {
      console.log(response.data);
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
          <tr>
            <td>Desenvolvimento de sistema</td>
            <td className="deposit">R$15.000</td>
            <td>Desenvolvimento</td>
            <td>30/05/2022</td>
          </tr>
          <tr>
            <td>Alugel</td>
            <td className="withdraw">- R$1.500</td>
            <td>moradia</td>
            <td>01/06/2022</td>
          </tr>
        </tbody>
      </table>
    </ContainerTransactionsTable>
  );
}