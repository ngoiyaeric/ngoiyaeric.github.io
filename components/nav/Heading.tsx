import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("https://www.youtube.com/watch?v=o6Lo2VI5pHE&ab_channel=L")}
      >
        Resume
      </OutlineButton>
    </header>
  );
};
