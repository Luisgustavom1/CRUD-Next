import { useEffect, useState } from 'react';

import Layout from '../components/layout'
import Table from '../components/table'
import Client from '../core/Cliente'

import homeStyle from '../styles/Home.module.css'

import Script from 'next/script';
import Button from '../components/button';
import Form from '../components/form';

import useVisible from '../hooks/useVisible';
import useClients from '../hooks/useClients';

export default function Home() {  
  
  const { 
    savedClient, 
    newClient, 
    clienteSelecionado, 
    clienteExcluido, 
    clients, 
    client,
    mostrarTable,
    tableVisible
  } = useClients()

  return (
    <>
      <div className={homeStyle.container}>
        <Layout title='Cadastro de Clientes'>
            {
              tableVisible ? 
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
                cancel={() => mostrarTable()}
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
