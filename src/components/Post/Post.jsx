import React from 'react'
import styles from '../../styles/components/Post.module.css'
import { Link } from 'react-router-dom'

const Post = ({ data }) => {
    return (
        <div className={styles.post}>
            <div className={styles.post_header}>
                <img src={data.images[0]} alt="" />
            </div>
            <div className={styles.post_info}>
                <h1>
                    {data.brand}
                </h1>
                <span>
                    {data?.category}
                </span>
                <p>
                    {data.description.split(' ').slice(0, 12).join(' ') + "..."}
                    <Link to={'/'} className={styles.more}> More</Link>
                </p>
            </div>
            <div className={styles.post_footer}>
                <div className={styles.user_img}>
                    <img src="https://picsum.photos/500" alt="" />
                </div>
                <div className={styles.user_info}>
                    <span className={styles.user_name}>
                        Aysel Mammadova
                    </span>
                    <span className={styles.created_at}>
                        June 18 / 2023 18:23
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Post