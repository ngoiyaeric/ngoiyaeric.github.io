import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("https://drive.google.com/file/d/1dsRU2uTqp8JQg-Wy9uyOx2G3_wrXyyBx/view?usp=sharing")}
      >
        Resume
      </OutlineButton>
    </header>
  );
};
