import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("https://drive.google.com/file/d/1qa6XH4ehQwG1yhbhal4GrxShnNv3tOmo/view?usp=sharing")}
      >
        Resume
      </OutlineButton>
    </header>
  );
};
