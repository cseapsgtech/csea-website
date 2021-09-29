import Image from 'next/image'
import styles from '../styles/Home.module.css'

//Importing assets
import logo from '../public/logo.png'

export default function Home() {
  return (
    <div>
      <div className={styles.titleAndLogoHolder}>
        <div className={styles.title}>Computer Science and Engineering Association</div>
        <Image height={25} width={165} src={logo} alt="Logo of CSEA" />
      </div>
    </div>
  )
}
