import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import styles from '../../styles/pages/vacancies/Vacancies.module.css'
import InfiniteScroll from 'react-infinite-scroll-component'
import Filter from '../../components/Selectbox/Filter'

const cities = [
    {
        checked: false,
        city: "Ganja",
    },
    {
        checked: false,
        city: "Baku",
    },
    {
        checked: false,
        city: "Lankaran",
    },
    {
        checked: false,
        city: "Lerik",
    },
];

const university = [
    {
        checked: false,
        name: "Odlar Yurdu "
    },
    {
        checked: false,
        name: "ADNSU "
    },
    {
        checked: false,
        name: "Qərbi Kaspi "
    },
    {
        checked: false,
        name: "Turizm Menecment "
    },

]

const price = [
    {
        checked: false,
        range: "100-200 AZN"
    },
    {
        checked: false,
        range: "150-250 AZN"
    },
    {
        checked: false,
        range: "250-400 AZN"
    },

]

const Vacancies = () => {

    const [data, setData] = useState()

    const getData = async () => {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setData(data)
        console.log(data);

    }

    useEffect(() => {
        getData()
    }, [])

    const handleCity = (e) => {
        console.log("target: ", e.target.textContent);
    }


    return (
        <main className={styles.vacancies}>
            <div className={styles.filter_container}>
                <Filter data={cities} label="Location" onClick={handleCity} checked={cities.checked} />
            </div>
            <div className={styles.vacancies_container}>
                {cities.map((city) => (
                    <div className={styles.card_item}>
                        <Card location={city.city} />
                    </div>
                ))}
            </div>
        </main >
    )
}

export default Vacancies