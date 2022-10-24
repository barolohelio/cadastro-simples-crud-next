import { Client } from "../core/Client"

interface TableProps {
  clients: Client[]; 
}

export function Table(props: TableProps){
  return (
    <table>
      <tr>
        <th>Código</th>
        <th>Nome</th>
        <th>Idade</th>
      </tr>

    </table>
  )
}