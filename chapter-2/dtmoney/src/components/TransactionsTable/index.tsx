import { Container } from "./styles";

export function TransactionsTable() {
  return (
    <Container>
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
            <td>Desenvolvimento de Site</td>
            <td className="deposit">R$ 12.000,00</td>
            <td>Venda</td>
            <td>13/04/2021</td>
          </tr>
          <tr>
            <td>Hamburguer</td>
            <td className="withdraw">-R$ 59,00</td>
            <td>Alimentação</td>
            <td>10/04/2021</td>
          </tr>
        </tbody>
      </table>
    </Container>
  );
}
