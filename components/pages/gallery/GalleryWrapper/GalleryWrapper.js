import {useState, useEffect} from 'react'
import GalleryItem from '../GalleryItem/GalleryItem'
import styles from './GalleryWrapper.module.scss'

import photo_1 from '../../../../images/documentation/photo_1.png'
import photo_2 from '../../../../images/documentation/photo_2.png'
import photo_3 from '../../../../images/documentation/photo_3.png'
import photo_4 from '../../../../images/documentation/photo_4.png'
import photo_5 from '../../../../images/documentation/photo_5.png'
import photo_6 from '../../../../images/documentation/photo_6.png'

const GalleryWrapper = () => {

    const breakpoint = 768
	const widthScreen = typeof window !== 'undefined' ? document.documentElement.clientWidth : 0
    const PAGE_SIZE = widthScreen > breakpoint ? 6 : 3;
    const [index , setIndex] = useState(0)
    const data = [
        {
            id: 1,
            date: "5.06.2022",
            img: photo_1,
            title: "горячеканальные системы"
        },
        {
            id: 2,
            date: "5.06.2022",
            img: photo_2,
            title: "литьевое производство"
        },
        {
            id: 3,
            date: "5.06.2022",
            img: photo_3,
            title: "продукция"
        },
        {
            id: 4,
            date: "5.06.2022",
            img: photo_4,
            title: "производство"
        },
        {
            id: 5,
            date: "5.06.2022",
            img: photo_5,
            title: "компания"
        },
        {
            id: 6,
            date: "5.06.2022",
            img: photo_6,
            title: "выставки"
        },
        {
            id: 7,
            date: "5.06.2022",
            img: photo_1,
            title: "горячеканальные системы"
        }
    ]
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
        <div className={styles.wrapper}>
            <div className={styles.flex}>
                {visibleData.map((item) => (
                    <GalleryItem
                        key={item.id} 
                        date={item.date}
                        img={item.img}
                        title={item.title}
                    />
                ))}
            </div>
            <button className={styles.btn} onClick={() => setIndex(index+1)}>показать больше</button>
        </div>
    )
}

export default GalleryWrapper