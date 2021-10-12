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
        <div>Motto of CSEA goes here...</div>
      </Glasscard>
      {/*Social*/}
      <div className={styles.iconholder}>
        <Glasscard>
          <div className={styles.iconbox}>
            <div className={styles.icon}>
              <a target="_blank" rel="noreferrer noopener" href = "https://www.instagram.com/cseapsgtech/">
              <Image
                src={instaLogo}
                alt="Instagram logo"
              />
              </a>
            </div>
            <div className={styles.icon}>
              <a target="_blank" rel="noreferrer noopener" href = "https://www.twitter.com/cseapsgtech/">
              <Image
                src={twitterLogo}
                alt="Twitter logo"
              />
              </a>
            </div>
            <div className={styles.icon}>
            <a target="_blank" rel="noreferrer noopener" href = "https://www.linkedin.com/in/cseapsgtech/">
              <Image
                src={linkedinLogo}
                alt="Linkedin logo"
              />
              </a>
            </div>
            <div className={styles.icon}>
              <a target="_blank" rel="noreferrer noopener" href = "#">
              <Image
                src={youtubeLogo}
                alt="Blog logo"
              />
              </a>
            </div>
          </div>
        </Glasscard>
      </div>
    </div>
  );
};

export default MottoAndSocial;
