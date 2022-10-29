import firebase from '../config';

import { Client } from "../../core/Client";
import { ClientRepository } from "../../core/ClientRepository";

export class CollectionClient implements ClientRepository {
 /*** Objeto que vai ter dois métodos toFirestore(cliente) e fromFirestore()
  * toFirestore(cliente) retorna objeto apto para firestore(JSON)
  * 
  * fromFirestore() retorna Cliente utilizando os métodos do firebase as "query"
  * para retornar ele é estanciado, 
  */
  #convert = {
    toFirestore(client: Client) {
      return {
        name: client.name,
        age: client.age
      };
    },
    fromFirestore(
      snapshot: firebase.firestore.QueryDocumentSnapshot, 
      options: firebase.firestore.SnapshotOptions): Client{
        const data = snapshot.data(options)
        return new Client(data.name, data.age, snapshot.id)
    }
  };

  /** Se o client:.id estiver setado quer dizer que ele vai alterar a collection
   * ele vai pegar o client pelo id e utilizar o set para passar.
   * 
   * caso contrario significa que vai salvar, para salvar
   * é recebido um documento de referencia do firebase e depois docRef utiliza o
   * método get para receber promise<firebase.firestore.DocumentSnapshot<Client>>
   * com o doc conseguimos pegar o cliente recebido com data()
   */
  async save(client: Client): Promise<Client> {
    if(client?.id) {
      await this.collection().doc(client.id).set(client)
      return client
    } else {
      const docRef = await this.collection().add(client)
      const doc = await docRef.get()
      return doc.data()
    }
  }

  async delete(client: Client): Promise<void> {
    this.collection().doc(client.id).delete()
  }

  async getAll(): Promise<Client[]> {
    const query = await this.collection().get()
    return query.docs.map(doc => doc.data())
  }

  /** Metodo privado para retornar dados do firebase firestore
   *  Os métodos retornados sao funçoes do firebase
   */
  private collection(){
    return firebase
      .firestore()
      .collection('clients')
      .withConverter(this.#convert)
  }
}