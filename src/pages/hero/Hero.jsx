import styles from './hero.module.css';

export default function Hero(){
    return(
    <header className={styles['hero-left']}>
      <figure className={styles['hero__figure']}>
        <img src='johnny_automatic_hops_and_barley.svg' alt="Company logo enlarged" className={styles['hero__logo']}></img>
      </figure>
      <h1 className={styles['hero__company--name']}>Startup Brewery.co</h1>
      <h2 className={styles['hero__company--slogan']}>Organic and Traditional</h2>
    </header>)
}