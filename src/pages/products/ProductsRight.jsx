import styles from './products.module.css'


export default function Products2(){
    return (
        <div className={`${styles.products} ${styles['products--right']}`}>
             <div className={`${styles['product-card']} ${styles['product-card--top']}`}>
                <div className={`${styles['product-card__description']}`}>
                    <h4 className={`${styles['product-card__description-name']} ${styles['to-right']}`}>Porter</h4>
                    <p className={`${styles['product-card__description-text']}`}>
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis iste rerum eius rem fugiat adipisci fuga quis architecto praesentium corporis accusamus vero optio incidunt, est enim explicabo nemo at assumenda?"
                    </p>
                    <p className={`${styles['product-card__signature']} ${styles['to-left']}`}>Adrian Anderson, conneseur</p>
                </div>
                <img src='beer-2.webp' alt="beer bottle" className={`${styles['product-card__image']}`}></img>
             </div>
             <div className={`${styles['product-card']} ${styles['product-card--bottom']}`}>
                <img src='beer-3.webp' alt="beer bottle" className={`${styles['product-card__image']}`}></img>
                <div className={`${styles['product-card__description']}`}>
                    <h4 className={`${styles['product-card__description-name']} `}>Autumn Ale</h4>
                    <p className={`${styles['product-card__description-text']}`}>
                        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Porro doloremque harum ut vel delectus suscipit perspiciatis quam nihil praesentium, explicabo, sunt hic recusandae. Voluptates velit quae deserunt nemo porro sunt."
                    </p>
                    <p className={`${styles['product-card__signature']}`}>Clara Clarnet, chef</p>
                </div>
             </div>
             

        </div>
    )
    
}