import { Client } from "./Client";

export interface ClientRepository {
  save(client: Client): Promise<Client>
  delete(client: Client): Promise<void>
  getAll(): Promise<Client[]>
  
}