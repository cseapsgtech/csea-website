import Image from 'next/image'
import styles from '../styles/TopBar.module.css'

//Importing assets
import logo from '../public/logo.png'

const Home = () => {
    return (
        <div className={styles.titleAndLogoHolder}>
            <div className={styles.title}>Computer Science and Engineering Association</div>
            <Image height={25} width={140} src={logo} alt="Logo of CSEA" />
        </div>
    )
}

export default Home