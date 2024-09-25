import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("https://drive.google.com/file/d/13bC2TbZm26201Uzb_HYtNNUkI9uA1GZ3/view?usp=sharing")}
      >
        Resume
      </OutlineButton>
    </header>
  );
};
