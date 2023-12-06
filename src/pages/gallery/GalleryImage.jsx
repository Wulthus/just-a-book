import { useImage } from '../../context/ImageContext';
import styles from "./galleryImage.module.css";

export default function GalleryImage({ path, alt = 'Gallery Picture', children, customStyles = null, topLeft = false, topRight = false, bottomLeft = false, bottomRight = false }){
    
    const {setImgSrc, setShowImage } = useImage();

    function handleClick(){
        setImgSrc(path);
        setShowImage(true);
    }
    
    return (
        <div  className={styles[`gallery-image__container`]} style={customStyles}>
            <figure className={styles[`gallery-image`]}>
                <img src={path} alt={alt} title="See in full screen" className={styles[`gallery-image__picture`]} onClick={()=>handleClick()}></img>
                <figcaption className={styles[`gallery-image__caption`]}>{children}</figcaption>
                {topLeft ? <div className={`${styles[`gallery__tape`]} ${styles[`top-left`]}`}/>  : null}
                {topRight ? <div className={`${styles[`gallery__tape`]} ${styles[`top-right`]}`}/>  : null}
            {bottomRight ? <div className={`${styles[`gallery__tape`]} ${styles[`bottom-right`]}`}/>  : null}
                {bottomLeft ? <div className={`${styles[`gallery__tape`]} ${styles[`bottom-left`]}`}/>  : null}
            </figure>
        </div>
    )
}