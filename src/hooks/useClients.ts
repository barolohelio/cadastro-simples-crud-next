/* eslint-disable react-hooks/exhaustive-deps */

/**  ### https://pt-br.reactjs.org/docs/hooks-intro.html#gatsby-focus-wrapper
 * Com Hooks, você pode extrair lógica com estado de um componente de uma forma que possa ser testada independentemente
 * e reutilizada. Hooks permitem reutilizar lógica com estado sem mudar sua hierarquia de componentes. Isso torna fácil
 * de compartilhar Hooks com vários outros componentes ou com a comunidade.
*/

import { useEffect, useState } from "react";

import { Client } from "../core/Client";
import { ClientRepository } from "../core/ClientRepository";
import { CollectionClient } from "../backend/db/ColecaoCliente";
import { useTableOrForm } from "./useTableOrForm";

export function useClients() {
  const repo: ClientRepository = new CollectionClient();

  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);

  const {showTable, showForm, tableVisible} = useTableOrForm();

  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      showTable()
    });
  }

  function selectClient(client: Client) {
    setClient(client);
    showForm()
  }

  async function deleteClient(client: Client) {
    await repo.delete(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty());
    showForm();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  return { 
    client,
    clients,
    newClient,
    saveClient,
    deleteClient,
    selectClient,
    getAll,
    tableVisible, 
    showTable,
  }
}
