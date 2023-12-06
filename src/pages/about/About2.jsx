import styles from "./about.module.css"

export default function About2(){
    return <div className={styles['about']}>
      <span className={styles['about__ornament']}><img className={styles['about__ornament--image']} src='johnny_automatic_hops_and_barley.svg'></img></span>
        <div className={styles['about__paragraph--box']}>
          <h3 className={styles['about__title']}>
            What do we do?
          </h3>
          <p className={styles['about__paragraph']}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim sit, beatae ducimus tempore fugiat accusamus aperiam reprehenderit ex sint quibusdam iusto provident incidunt. 
              Libero quo vitae unde nam perferendis vero? Lorem, ipsum dolor sit amet consectetur adipisicing elit. Blanditiis esse hic voluptate quisquam 
              dignissimos quos fugiat, earum iure quas laborum voluptatibus a expedita labore iusto molestiae, voluptatum ex nesciunt iste.
          </p>
        </div>
      </div>
}