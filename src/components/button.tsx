import layoutStyle from '../styles/Layout.module.css';

interface ButtonProps {
    children: any
    className?: string
    onClick?: () => void
}

export default function Button(props: ButtonProps){
    return(
        <button 
            className={layoutStyle.button + ' ' + `${props.className && props.className}`}
            onClick={props.onClick}
            type='button'
        >
            {props.children}
        </button>
    )
}