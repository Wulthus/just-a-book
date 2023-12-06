import styles from "./about.module.css"

export default function About1(){
    return <div className={styles['about']}>
      <span className={styles['about__ornament']}><img className={styles['about__ornament--image']} src='johnny_automatic_hops_and_barley.svg' alt="Small company logo"></img></span>
        <div className={styles['about__paragraph--box']}>
          <h3 className={styles['about__title']}>
            Who are we?
          </h3>
          <p className={styles['about__paragraph']}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae 
            cupiditate veniam tempora, optio porro magnam obcaecati 
            deleniti necessitatibus eveniet facilis incidunt ipsam alias, minus voluptatem possimus hic molestiae sed tenetur! 
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea, est aliquid sit, sequi autem ratione soluta sed 
            commodi quaerat iste officiis laboriosam. Maiores, distinctio nam! Eaque suscipit eos similique sapiente!
          </p>
        </div>
      </div>
}