import styles from './products.module.css'


export default function ProductsLeft(){
    return (
        <div className={styles.products}>
            <div className={`${styles['products__title']}`}>
                <h3 className={`${styles['products__label']}`}>Our Products</h3>
                <img className={styles['products__ornament--image']} src='johnny_automatic_hops_and_barley.svg'></img>
             </div>
             <div className={`${styles['product-card']}`}>
                <img src='beer-1.webp' alt="beer bottle" className={`${styles['product-card__image']}`}></img>
                <div className={`${styles['product-card__description']}`}>
                    <h4 className={`${styles['product-card__description-name']}`}>Blonde Ale</h4>
                    <p className={`${styles['product-card__description-text']}`}>
                        "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi repellendus quasi quidem recusandae, explicabo veniam adipisci delectus asperiores natus soluta placeat animi nihil est fugiat, perspiciatis reiciendis inventore eaque fugit?"
                    </p>
                    <p className={`${styles['product-card__signature']}`}>Bob Boberson, sommelier</p>
                </div>
             </div>
             

        </div>
    )
    
}