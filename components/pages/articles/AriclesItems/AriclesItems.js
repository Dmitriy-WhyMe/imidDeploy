import {useState, useEffect} from 'react'
import Link from 'next/link'
import styles from './AriclesItems.module.scss'

const AriclesItems = () => {
    const data = [
        {
            id: 1,
            date: "5.06.2022",
            title: "Заголовок статьи",
            text: "В связи с расширением производства и запуском новых проектов в компании ИМИД открыты следующие вакансии: наладчик термопластавтоматов, инженер-электрик (электронщик), слесарь-инструментальщик, конструктор пресс-форм",
            autor: "автор статьи",
            link: "#"
        },
        {
            id: 2,
            date: "5.06.2022",
            title: "Заголовок статьи",
            text: "В связи с расширением производства и запуском новых проектов в компании ИМИД открыты следующие вакансии: наладчик термопластавтоматов, инженер-электрик (электронщик), слесарь-инструментальщик, конструктор пресс-форм",
            autor: "автор статьи",
            link: "#"
        },
        {
            id: 3,
            date: "5.06.2022",
            title: "Заголовок статьи",
            text: "В связи с расширением производства и запуском новых проектов в компании ИМИД открыты следующие вакансии: наладчик термопластавтоматов, инженер-электрик (электронщик), слесарь-инструментальщик, конструктор пресс-форм",
            autor: "автор статьи",
            link: "#"
        },
        {
            id: 4,
            date: "5.06.2022",
            title: "Заголовок статьи",
            text: "В связи с расширением производства и запуском новых проектов в компании ИМИД открыты следующие вакансии: наладчик термопластавтоматов, инженер-электрик (электронщик), слесарь-инструментальщик, конструктор пресс-форм",
            autor: "автор статьи",
            link: "#"
        },
        {
            id: 5,
            date: "5.06.2022",
            title: "Заголовок статьи",
            text: "В связи с расширением производства и запуском новых проектов в компании ИМИД открыты следующие вакансии: наладчик термопластавтоматов, инженер-электрик (электронщик), слесарь-инструментальщик, конструктор пресс-форм",
            autor: "автор статьи",
            link: "#"
        },
    ]

    const breakpoint = 768
	const widthScreen = typeof window !== 'undefined' ? document.documentElement.clientWidth : 0
    const PAGE_SIZE = widthScreen > breakpoint ? 4 : 3;
    const [index , setIndex] = useState(0)

    const [visibleData , setVisibleData] = useState([])

    useEffect(() => {
        const numberOfItems = PAGE_SIZE*(index+1); 
        const newArray = []; 
        for(let i= 0 ; i < data.length ; i++ ){
            if(i < numberOfItems){
                newArray.push(data[i])
            }  
        }
        setVisibleData(newArray);
    } , [index])

    return (
        <>
            <div className={styles.flex}>
                {visibleData.map((item) => (
                    <Link href={item.link} key={item.id}>
                        <a className={styles.links}>
                            <div className={styles.slide}>
                                <div className={styles.date}>{item.date}</div>
                                <h4>{item.title}</h4>

                                <div className={styles.text}>
                                    <p>{item.text}</p>
                                </div>

                                <div className={styles.period}>
                                    <p>{item.autor}</p>
                                    <div className={styles.btn}>перейти к статье</div>
                                </div>
                            </div>
                        </a>
                    </Link>
                ))}
                
            </div>

            <button className={styles.btnMain} onClick={() => setIndex(index+1)}>показать больше</button>
        </>
    )
}

export default AriclesItems