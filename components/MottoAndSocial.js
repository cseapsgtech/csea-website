import Glasscard from "./Glasscard";
import Image from "next/image";
import styles from "../styles/MottoAndSocial.module.css";

// Image imports
import instaLogo from "../public/Social media icons/instagram.png";
import twitterLogo from "../public/Social media icons/twitter.png";
import linkedinLogo from "../public/Social media icons/linkedin.png";
import youtubeLogo from "../public/Social media icons/youtube.png";

const MottoAndSocial = () => {
  return (
    <div className={styles.holder}>
      {/*Motto*/}
      <Glasscard>
        <div>Motto goes here...</div>
      </Glasscard>
      {/*Social*/}
      <div className={styles.iconholder}>
        <Glasscard>
          <div className={styles.iconbox}>
            <div className={styles.icon}>
              <Image
                src={instaLogo}
                alt="Instagram logo"
              />
            </div>
            <div className={styles.icon}>
              <Image
                src={twitterLogo}
                alt="Twitter logo"
              />
            </div>
            <div className={styles.icon}>
              <Image
                src={linkedinLogo}
                alt="Linkedin logo"
              />
            </div>
            <div className={styles.icon}>
              <Image
                src={youtubeLogo}
                alt="Youtube logo"
              />
            </div>
          </div>
        </Glasscard>
      </div>
    </div>
  );
};

export default MottoAndSocial;
