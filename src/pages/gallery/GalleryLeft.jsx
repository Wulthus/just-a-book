import GalleryImage from './GalleryImage';
import styles from './gallery.module.css';


export default function GalleryLeft(){
    return (
        <section className={styles.gallery}>
            <div className={`${styles['gallery__title']}`}>
                <h3 className={`${styles['gallery__label']}`}>Gallery</h3>
                <img className={styles['gallery__ornament--image']} src='johnny_automatic_hops_and_barley.svg' alt="Small company logo"></img>
            </div>
            <div className={styles[`gallery-grid-4`]}>
                <GalleryImage path='../../gallery-image-4.webp' alt='Inspection' topLeft={true} topRight={true} customStyles={{
                    alignSelf: 'end',
                }}>
                    Everything's in order!
                </GalleryImage>
                <GalleryImage path='../../gallery-image-5.webp' alt='Grain' topLeft={true} bottomRight={true} customStyles={{
                    gridRow: '1/3',
                    gridColumn: '2/3',
                    marginBottom: '3rem',
                    alignSelf: 'end',
                }}>
                    Hand picked
                </GalleryImage>
                <GalleryImage path='../../gallery-image-6.webp' alt='Hops' topRight={true} bottomLeft={true} customStyles={{
                    marginBottom: '5rem',
                    alignSelf: 'start',

                }}>
                    Quality ingredients only
                </GalleryImage>
            </div>
        </section>
    )
}