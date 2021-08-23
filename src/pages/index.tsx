import Layout from '../components/layout'
import Table from '../components/table'
import Client from '../core/Cliente'

import homeStyle from '../styles/Home.module.css'

import { useEffect, useState } from 'react';

import Script from 'next/script';
import Button from '../components/button';
import Form from '../components/form';

import ClienteRepositorio from '../core/ClienteRepositorio';
import ColecaoCliente from '../backend/db/ColecaoCliente'

export default function Home() {  

  const repo: ClienteRepositorio = new ColecaoCliente()

  const [client, setClient] = useState<Client>(Client.vazio())
  const [clients, setClients] = useState<Client[]>([])
  const [visible, setVisible] = useState<'table' | 'form'>('table')

  useEffect(() => {
    obterTodos()
  }, [])

  function obterTodos(): void{
    repo.allClients().then(clients => {
      setClients(clients)
      setVisible('table')
    })
  }

  function clienteSelecionado(client: Client): void {
    setClient(client)
    setVisible('form')
  }

  function clienteExcluido(client: Client): void {
    console.log(client.nome);
  }

  function newClient(): void {
    setClient(Client.vazio())
    setVisible('form')
  }

  function savedClient(client: Client): void {
    repo.salvar(client)
    setVisible('table')
  }
  return (
    <>
      <div className={homeStyle.container}>
        <Layout title='Cadastro de Clientes'>
            {
              visible === 'table' ? 
              <>
                <div className={homeStyle.containerDiv}>
                  <Button onClick={newClient}>
                    Add Cliente
                  </Button>
                </div>
                <Table 
                  clients={clients} 
                  clienteSelecionado={clienteSelecionado} 
                  clienteExcluido={clienteExcluido}
                /> 
              </> : 
              <Form 
                cancel={() => setVisible('table')}
                changedClient={savedClient}
                client={client}
              />
            }
        </Layout>
      </div>
      <Script
        src="https://kit.fontawesome.com/920b5477c4.js" 
        crossOrigin="anonymous"
      />
    </>
  )
}
