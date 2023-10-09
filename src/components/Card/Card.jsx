import React from 'react'
import styles from '../../styles/components/Card.module.css'
import Button from '../../components/Button/Button'

const Card = ({ price }) => {
    return (
        <div className={styles.card}>
            <div className={styles.card_img}>

            </div>
            <div className={styles.card_body}>
                <span className={styles.price}>
                    {price.range}
                </span>
                <div>
                    <p>
                        csdcdsc
                    </p>
                    <span>
                        sdcdsc
                    </span>
                </div>
            </div>
            <div className={styles.card_footer}>
                <span className={styles.created_at}>
                    cdscsd
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