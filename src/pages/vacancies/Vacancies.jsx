import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import styles from '../../styles/pages/vacancies/Vacancies.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'

const Vacancies = () => {

    const [data, setData] = useState()
    const [hasMore, setHasMore] = useState(true)
    const [filteredData, setFilteredData] = useState([]);

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setData(data)
        console.log(data);

    }

    const [input, setInput] = useState('')

    const handleChange = (e) => {
        setInput(e.target.value)
        console.log(input);
    }

    useEffect(() => {
        getData()


    }, [])

    useEffect(() => {
        const result = data?.filter(value => value.name.toLowerCase().includes(input.toLowerCase()))
        setFilteredData(result)
    }, [input, data])


    return (
        <main className={styles.vacancies}>
            <input type="text" value={input} onChange={handleChange} />
            {/* <InfiniteScroll
                dataLength={data}
                next={data}
                hasMore={hasMore}
                loader={
                    <div>
                        Loading...
                    </div>
                }
            > */}
            <div className={styles.vacancies_container}>
                {filteredData?.map((item) => (
                    <div key={item.id} className={styles.card_item}>
                        <Card data={item} />
                    </div>
                ))}
            </div>
            {/* </InfiniteScroll> */}
        </main >
    )
}

export default Vacancies