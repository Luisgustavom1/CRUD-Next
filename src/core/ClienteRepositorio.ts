import Client from "./Cliente";

export default interface ClienteRepositorio {
    salvar(client: Client): Promise<Client>
    excluir(client: Client): Promise<void>
    allClients(): Promise<Client[]>
}