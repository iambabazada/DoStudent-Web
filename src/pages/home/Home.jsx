import React from 'react'
import Slider from './Slider/Slider'
import styles from '../../styles/pages/home/Home.module.css'

const Home = () => {
    return (
        <main className={styles.home}>
            <Slider />
        </main>
    )
}

export default Home