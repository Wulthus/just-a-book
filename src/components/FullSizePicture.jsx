import styles from "./FullSIzePicture.module.css";
import { useImage } from '../context/ImageContext';

export default function FullSizePicture({ src="gallery-image-1.webp", alt="Enlarged gallery picture", showImage=false }){
    const { imgSrc, setShowImage } = useImage();

    function handleClick(){
      setShowImage(false);
    }

    return <figure className={`${styles[`full-size-figure`]}`} title="Return">
            <img className={`${styles[`full-size-picture`]} ${showImage ? styles['lights-on'] : null}`} src={imgSrc ? imgSrc : src} alt={alt} onClick={()=>handleClick()}></img>
          </figure>
}