import Link from 'next/link'
import styles from './DropdownList.module.scss'

const DropdownList = ({titleActive}) => {

    const data = [
        {
            id: 1,
            link: "#",
            title: "О нас"
        },
        {
            id: 2,
            link: "#",
            title: "Направления деятельности"
        },
        {
            id: 3,
            link: "#",
            title: "История"
        },
        {
            id: 4,
            link: "#",
            title: "ИМИД в цифрах"
        },
        {
            id: 5,
            link: "#",
            title: "Клиентам"
        },
        {
            id: 6,
            link: "#",
            title: "Реквизиты"
        }
    ]

    return (
        <div className={styles.dropdownList}>
            {data.map((item) => (
                 <Link href={item.link} key={item.id}>
                    <div className={styles.link}>
                        <a>{item.title}</a>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default DropdownList