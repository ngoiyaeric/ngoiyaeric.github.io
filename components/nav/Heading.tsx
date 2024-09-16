import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("https://drive.google.com/file/d/1RkHFkOLEOHi03NVkALkwqorNgR4mxVkD/view?usp=sharing")}
      >
        Resume
      </OutlineButton>
    </header>
  );
};
