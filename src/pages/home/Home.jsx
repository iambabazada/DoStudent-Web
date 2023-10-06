import React from 'react'
import Hero from './Hero/Hero'
import styles from '../../styles/pages/home/Home.module.css'

const Home = () => {
    return (
        <main className={styles.home}>
            <Hero />
        </main>
    )
}

export default Home