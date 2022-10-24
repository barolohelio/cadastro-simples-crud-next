import { Client } from "../core/Client";

interface TableProps {
  clients: Client[];
}

export function Table(props: TableProps) {
  function renderHead() {
    <tr>
      <th>Código</th>
      <th>Nome</th>
      <th>Idade</th>
    </tr>;
  }
    return( 
      <table>
        {renderHead()}
      </table>
    )
}
