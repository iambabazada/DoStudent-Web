import React from 'react'
import styles from '../../styles/components/Post.module.css'
import { Link } from 'react-router-dom'

const Post = () => {
    return (
        <div className={styles.post}>
            <div className={styles.post_header}>
                <img src="https://picsum.photos/500" alt="" />
            </div>
            <div className={styles.post_info}>
                <h1>
                    What’s New in 2022 Tech
                </h1>
                <span>
                    “Odlar Yurdu” university
                </span>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut imperdiet justo ut sollicitudin ornare. Nullam id pharetra est. Donec placerat ultricies egestas. Vivamus scelerisque,
                    <Link to={'/'} className={styles.more}> More...</Link>
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