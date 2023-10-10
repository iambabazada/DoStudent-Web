import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import Button from '../Button/Button'
import styles from './Navbar.module.css'
import { User } from 'react-feather'
import { Search } from 'react-feather'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

const Navbar = () => {
    const navigate = useNavigate()

    const isLogin = useSelector((state) => state.auth.isAuth)

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

    const handleLogin = () => {
        navigate('/login')
    }



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
                    {isLogin ? (
                        <div>
                            Hello
                        </div>
                    ) : (
                        <Button width="lg" onClick={handleLogin} bg={"#60B669"}>
                            <User width={22} />
                            Login
                        </Button>
                    )}
                </div>
            </nav>
        </header>
    )
}

export default Navbar