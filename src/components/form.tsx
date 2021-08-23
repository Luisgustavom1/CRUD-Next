import { useState } from "react";
import Client from "../core/Cliente";
import Input from "./input";
import layoutStyle from '../styles/Layout.module.css'
import Button from "./button";

interface FormProps {
    client?: Client
    changedClient?: (client: Client) => void
    cancel?: () => void
}

export default function Form(props: FormProps){

    const id = props.client?.id ?? null

    const [nome, setNome] = useState(props.client?.nome ?? '')
    const [idade, setIdade] = useState(props.client?.idade ?? 0)

    return(
        <form className={layoutStyle.containerForm}>
            {
                id && 
                    <Input 
                        label='Código' 
                        value={id}
                        identify={id}
                        somenteLeitura
                    />
            }
            <Input 
                placeHolder='Nome' 
                label='Nome' 
                identify='nome' 
                value={nome}
                onChange={setNome}
            />
            <Input 
                placeHolder='Idade' 
                label='Idade' 
                identify='Idade' 
                value={idade}
                onChange={setIdade}
            />
            <section>
                <Button 
                    className={layoutStyle.salvar}
                    onClick={() => props.changedClient?.(new Client(nome, +idade, id))}>
                    {id ? 
                        'Alterar' :
                        'Salvar'    
                    }
                </Button>
                <Button 
                    className={layoutStyle.cancelar} 
                    onClick={props.cancel}
                >
                    Cancelar
                </Button>
            </section>
        </form>
    )
}