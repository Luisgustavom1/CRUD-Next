import { useState } from "react"

export default function useVisible() {
    const [visible, setVisible] = useState<'table' | 'form'>('table')

    const mostrarForm = () => setVisible('form')

    const mostrarTable = () => setVisible('table')

    return {
        mostrarForm,
        mostrarTable,
        formVisible: visible === 'form',
        tableVisible: visible === 'table'
    }
}