import layoutStyle from '../styles/Layout.module.css'

interface TitleProps {
    children: string
}

export function Title(props: TitleProps){
    return(
        <div className={layoutStyle.title}>
            <h1>{props.children}</h1>
            <hr/>
        </div>
    )
}