import firebase from "../config";
import Client from "../../core/Cliente";
import ClienteRepositorio from "../../core/ClienteRepositorio";

export default class ColecaoCliente implements ClienteRepositorio {
    
    #conversor = {
        toFirestore(client: Client) {
            return {
                nome: client.nome,
                idade: client.idade
            }
        },
        fromFirestore(snapshot: firebase.firestore.QueryDocumentSnapshot, options: firebase.firestore.SnapshotOptions) {
            const dados = snapshot.data(options)
            return new Client(dados.nome, dados.idade, snapshot.id)
        }
    }

    async salvar(client: Client): Promise<Client> {
        if(client?.id) {
            this.colecao().doc(client.id).set(client)
            return client
        } else {
            const docRef = await this.colecao().add(client)
            const doc = await docRef.get()
            return doc.data()
        }
    }

    async excluir(client: Client): Promise<void> {
        return this.colecao().doc(client.id).delete()
    }

    async allClients(): Promise<Client[]> {
        const query = await this.colecao().get()
        return query.docs.map(doc => doc.data()) ?? []
    }

    private colecao(){
        return firebase
            .firestore().collection('clients')
            .withConverter(this.#conversor)
    }
}