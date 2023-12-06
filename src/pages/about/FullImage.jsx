import styles from './about.module.css';

export default function FullImage({ src, alt }){
    return (
    <div className={styles['about__image-container']}>
            <img className={styles['about__image']} src={src} alt={alt}></img>
    </div>
    )
    
}