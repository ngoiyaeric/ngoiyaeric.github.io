import { motion } from "framer-motion";
import Link from "next/link";
import { AiFillGithub, AiFillLinkedin, AiOutlineMediumWorkmark, AiFillTwitterCircle, AiFillInstagram } from "react-icons/ai";
import styles from "./headinglinks.module.scss";

export const MyLinks = () => {
  return (
    <div className={styles.links}>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.0 }}
      >
        <Link
          href="https://www.linkedin.com/in/eric-ngoiya/"
          target="_blank"
          rel="nofollow"
        >
          <AiFillLinkedin size="2.4rem" />
        </Link>
      </motion.span>
      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://github.com/ngoiyaeric"
          target="_blank"
          rel="nofollow"
        >
          <AiFillGithub size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://x.com/ereqlive"
          target="_blank"
          rel="nofollow"
        >
          <AiFillTwitterCircle size="2.4rem" />
        </Link>
      </motion.span>

      <motion.span
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <Link
          href="https://substack.com/profile/247595289-eric-ngoiya/note/c-80701554?utm_source=substack&utm_content=first-note-modal"
          target="_blank"
          rel="nofollow"
        >
          <SiSubstack size="2.4rem" />
        </Link>
      </motion.span>
    </div>
  );
};
