import React from 'react'
import styles from './styles.module.scss'

interface ItemListProps {
    type?: 'default' | 'disabled' | 'active'
    label: string
    icon?: JSX.Element
}

export const ItemList = ({
    label,
    icon = <div></div>,
    type = 'default'
}: ItemListProps) => {
    const getType = () => {
        switch (type) {
            case 'disabled':
                return styles.disabled
            case 'active':
                return styles.active
            default:
                return styles.itemList
        }
    }

    const classNameBase = styles.itemList

    return (
        <div className={`${classNameBase} ${getType()}`}>
            {icon}
            <label>{label}</label>
        </div>
    )
}

export default ItemList
