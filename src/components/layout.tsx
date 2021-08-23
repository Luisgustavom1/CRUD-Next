import { Title } from "./title";

import layoutStyle from '../styles/Layout.module.css';

interface LayoutProps {
    title: string
    children: any
}

export default function Layout(props: LayoutProps){
    return(
        <div className={layoutStyle.list}>
            <Title>{props.title}</Title>
            <div className={layoutStyle.listDiv}>
                {props.children}
            </div>
        </div>
    )
}