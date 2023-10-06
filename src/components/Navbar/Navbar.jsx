import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import { User } from 'react-feather'
import { Search } from 'react-feather'

const Navbar = () => {

    const links = [
        {
            path: '/',
            name: 'Home'
        },
        {
            path: '/vacancies ',
            name: 'Vacancies'
        },
        {
            path: '/blog',
            name: 'Blog'
        },
    ]

    return (
        <header className={styles.header}>
            <nav className={styles.navbar}>
                <div className={styles.brand}>
                    <h1>
                        DOSTUDENT
                    </h1>
                </div>
                <ul className={styles.links}>
                    {links.map((link, index) => (
                        <li key={index} >
                            <NavLink to={link.path} className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? `${styles.active}` : `${styles.link}`
                            }>
                                {link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className={styles.actions}>
                    <div className={styles.search}>
                        <input type="text" placeholder='Search' />
                        <Search className={styles.search_icon} width={18} />
                    </div>
                    <Button width="lg" bg={"#60B669"}>
                        <User width={22} />
                        Login
                    </Button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar