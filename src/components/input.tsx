import layoutStyle from '../styles/Layout.module.css'

interface InputProps {
    label: string
    placeHolder?: string
    type?: 'text' | 'number'
    identify: string
    value: any
    onChange?: (value: any) => void
    somenteLeitura?: boolean
}

export default function Input(props: InputProps){
    return(
        <div className={layoutStyle.input}>
            <label htmlFor={props.identify}>{props.label}</label>
            <input 
                type={props.type ?? 'text'} 
                placeholder={props.placeHolder}
                name={props.identify}
                id={props.identify}
                value={props.value}
                onChange={(e) => props.onChange?.(e.target.value)}
                readOnly={props.somenteLeitura ?? false}
            />
        </div>
    )
}