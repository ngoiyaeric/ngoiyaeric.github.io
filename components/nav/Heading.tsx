import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("https://drive.google.com/file/d/1tXgS8GVly84HNoR1QB42SP5lTJAL8x-C/view?usp=sharing")}
      >
        Resume
      </OutlineButton>
    </header>
  );
};
