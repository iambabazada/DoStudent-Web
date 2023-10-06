import React from 'react'
import styles from '../../styles/components/Card.module.css'
import Button from '../../components/Button/Button'

const Card = () => {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>

            </div>
            <div className={styles.card_body}>
                <span className={styles.price}>
                    150 AZN
                </span>
                <div>
                    <p>
                        Insaatcilar mt.s
                    </p>
                    <span>
                        3 otaqlı • 121 m² • 7/12 mərtəbə
                    </span>
                </div>
            </div>
            <div className={styles.card_footer}>
                <span className={styles.created_at}>
                    Baku, Yesterday 12:23
                </span>
                <div>
                    <Button width="lg" bg="#60B669">
                        More
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Card