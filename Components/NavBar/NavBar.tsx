//allows linking to other pages, like routing
import Link from 'next/link'

//yarn add sass
import styles from '../../styles/NavBar.module.scss'


export default function NavBar() {
  return (
    
    <div className={styles.navContainer}>
        <Link  href="./photo-categories/animals">
          <a className={styles.linksOnHomePage}>
            Link to Animals
          </a>
        </Link>
        <Link  href="./photo-categories/couples">
          <a className={styles.linksOnHomePage}>
            Link to Couples
          </a>
        </Link>
        <Link  href="./photo-categories/portraits">  
          <a className={styles.linksOnHomePage}>
            Link to Portraits
          </a>
        </Link>
    </div>
  )
}