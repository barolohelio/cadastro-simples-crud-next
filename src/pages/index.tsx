import { useState } from "react";

import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import { Client } from "../core/Client";

export default function Home() {
  const [client, setClient ] = useState<Client>(Client.empty())
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  const clients = [
    new Client('Ana', 34, '1'),
    new Client('Bia', 45, '2'),
    new Client('Carlos', 23, '3'),
    new Client('Pedro', 54, '4'),
  ]

  function clientSelected(client: Client){
    setClient(client)
    setVisible('form')
  }

  function clientDeleted(client: Client){
    console.log(client.name)
  }

  function newClient(){
    setClient(Client.empty())
    setVisible('form')
  }

  function saveClient(client: Client){
    console.log(client)
    setVisible('table')
  }

  return (
    <div className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500
      text-white
    `}>
      <Layout title="Cadastro Simples - CRUD">
        {visible === 'table' ? (
          <>
            <div className="flex justify-end">
              <Button cor="green" className="mb-4" onClick={() => newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table 
              clients={clients} 
              clientSelected={clientSelected}
              clientDeleted={clientDeleted}
            />
          </>     
        ) : (
          <Form 
            client={client} 
            canceled={() => setVisible('table')}  
            clientOnChange={saveClient}
          />
        )}
      </Layout>
    </div>
  )
}
