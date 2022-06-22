import React from 'react'
import ItemList from '../itemList'
import styles from './styles.module.scss'

interface SidebarProps {}

const Sidebar = (props: SidebarProps): JSX.Element => {
    return (
        <aside className={styles.sidebar}>
            <ItemList label="Negocio" type="active"></ItemList>
            <ItemList label="Órdenes"></ItemList>
            <ItemList label="Botones" type="disabled"></ItemList>
            <ItemList label="Pagos" type="disabled"></ItemList>
            <ItemList label="Usuarios" type="disabled"></ItemList>
            <ItemList label="API Docs" type="disabled"></ItemList>
        </aside>
    )
}

export default Sidebar
