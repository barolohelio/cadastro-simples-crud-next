import { Button } from "../components/Button";
import { Form } from "../components/Form";
import { Layout } from "../components/Layout";
import { Table } from "../components/Table";
import { Container } from "../components/Container";

import { useClients } from "../hooks/useClients";

export default function Home() {
  const { 
    selectClient,
    deleteClient,
    newClient,
    saveClient,
    client,
    clients,
    tableVisible,
    showTable,
   } = useClients()

  return (
    <Container>
      <Layout title="Cadastro Simples - CRUD">
        {tableVisible ? (
          <>
            <div className="flex justify-end">
              <Button cor="green" onClick={newClient}>
                Novo Cliente
              </Button>
            </div>
            <Table
              clients={clients}
              clientSelected={selectClient}
              clientDeleted={deleteClient}
            />
          </>
        ) : (
          <Form
            client={client}
            canceled={showTable}
            clientOnChange={saveClient}
          />
        )}
      </Layout>
    </Container>
  );
}
