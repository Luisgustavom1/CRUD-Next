import { useState, useEffect } from "react"

import ColecaoCliente from "../backend/db/ColecaoCliente"
import ClienteRepositorio from "../core/ClienteRepositorio"

import Client from "../core/Cliente"
import useVisible from "./useVisible"

export default function useClients() {

    const { mostrarTable, mostrarForm, tableVisible } = useVisible()

    const repo: ClienteRepositorio = new ColecaoCliente()

    const [client, setClient] = useState<Client>(Client.vazio())
    const [clients, setClients] = useState<Client[]>([])
  
    function obterTodos(){
      repo.allClients().then(clients => {
        setClients(clients)
        mostrarTable()
      })
    }
  
    function clienteSelecionado(client: Client) {
      setClient(client)
      mostrarForm()
    }
  
    async function clienteExcluido(client: Client) {
      await repo.excluir(client)
      obterTodos()
    }
  
    function newClient() {
      setClient(Client.vazio())
      mostrarForm()
    }
  
    async function savedClient(client: Client) {
      await repo.salvar(client)
      obterTodos()
    }
  
    useEffect(() => {
      obterTodos()
    }, [])

    return {
        client,
        clients,
        newClient,
        savedClient,
        obterTodos,
        clienteExcluido,
        clienteSelecionado,
        mostrarForm,
        mostrarTable,
        tableVisible
    }
}