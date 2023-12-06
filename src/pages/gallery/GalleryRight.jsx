import GalleryImage from './GalleryImage';
import styles from './gallery.module.css';


export default function GalleryRight(){
    return (
        <article className={styles.gallery}>
            <div className={styles[`gallery-grid-4`]}>
                <GalleryImage path='../../gallery-image-1.webp' alt='Barrels' topLeft={true} bottomRight={true} customStyles={{
                    alignSelf: 'end',
                }}>
                    Our produce ripening
                </GalleryImage>
                <GalleryImage path='../../gallery-image-2.webp' alt='Flasks' topLeft={true} topRight={true} customStyles={{
                    gridRow: '1/3',
                    gridColumn: '2/3',
                    marginTop: '3rem',
                    alignSelf: 'start',
                }}>
                    Filled up and ready to go!
                </GalleryImage>
                <GalleryImage path='../../gallery-image-3.webp' alt='a Pint' topLeft={true} bottomRight={true} customStyles={{
                    alignSelf: 'start',
                    marginTop: '2rem',
                }}>
                    A pint of refreshment
                </GalleryImage>
            </div>
        </article>
    )
}