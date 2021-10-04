import Image from "next/image";
import styles from "../styles/TopBar.module.css";

// Image imports
import logo from "../public/logo.png";

const Home = () => {
  return (
    <div className={styles.titleAndLogoHolder}>
      <div className={styles.title}>
        Computer Science and Engineering Association
      </div>
      <Image height={20} width={120} src={logo} alt="Logo of CSEA" />
    </div>
  );
};

export default Home;
