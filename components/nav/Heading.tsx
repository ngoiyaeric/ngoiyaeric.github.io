import { OutlineButton } from "../buttons/OutlineButton";
import { MyLinks } from "./components/MyLinks";
import styles from "./heading.module.scss";

export const Heading = () => {
  return (
    <header className={styles.heading}>
      <MyLinks />
      <OutlineButton
        onClick={() => window.open("https://drive.google.com/file/d/1Z1dnbGoja9UdasmnQEveWsNYqsu97kNR/view?usp=drive_link")}
      >
        Resume
      </OutlineButton>
    </header>
  );
};
