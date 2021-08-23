import Client from '../core/Cliente';
import layoutStyle from '../styles/Layout.module.css';
import { iconEdicao, iconExcluir } from './icons';

interface TableProps {
    clients: Client[]
    clienteSelecionado?: (client: Client) => void
    clienteExcluido?: (client: Client) => void
};

export default function Table(props: TableProps){
    
    const exibirAcoes = props.clienteSelecionado || props.clienteExcluido

    function renderizarIcons(client: Client, i: number) {
        return (
            <td className={layoutStyle.TdIcons}>
                {props.clienteSelecionado ? 
                    <button 
                        className={i % 2 === 0 ? layoutStyle.bgPar : layoutStyle.bgImpar} 
                        onClick={() => props.clienteSelecionado(client)}
                    >
                        {iconEdicao}
                    </button> : false
                }
                {props.clienteExcluido ? 
                    <button 
                        className={i % 2 === 0 ? layoutStyle.bgPar : layoutStyle.bgImpar} 
                        onClick={() => props.clienteExcluido(client)}
                    >
                        {iconExcluir}
                    </button> : false
                }
            </td>
        )
    }

    return(
        <div>
            <thead className={layoutStyle.thead}>
                <tr>
                    <th>Nome</th>
                    <th>Idade</th>
                    <th>Id</th>
                    {exibirAcoes ? <th>Ações</th> : false}
                </tr>
            </thead>
            <tbody className={layoutStyle.tbody}>
                {props.clients?.map((client, i) => {
                    return <tr key={client.id} className={i % 2 === 0 ? layoutStyle.bgPar : layoutStyle.bgImpar}>
                                <td>{client.nome}</td>
                                <td>{client.idade}</td>
                                <td>{client.id}</td>
                                {exibirAcoes ? renderizarIcons(client, i) : false}
                            </tr>
                })}
            </tbody>
        </div>
    )
};