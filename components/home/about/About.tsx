import { MyLinks } from "@/components/nav/components/MyLinks";
import { Reveal } from "@/components/utils/Reveal";
import { SectionHeader } from "@/components/utils/SectionHeader";
import { AiOutlineArrowRight } from "react-icons/ai";
import { Stats } from "./Stats";
import styles from "./about.module.scss";

export const About = () => {
  return (
    <section id="about" className="section-wrapper">
      <SectionHeader title="about" dir="l" />
      <div className={styles.about}>
        <div>
          <Reveal>
            <p className={`${styles.aboutText} ${styles.highlightFirstLetter}`}>
              hello world⚡, i&apos;m eric. i&apos;m a Software Engineer
              with a desire to build useful technologies. i'd like to work on ideas that bring value to users' lives.
            </p>
          </Reveal>
          <Reveal>
            <p className={styles.aboutText}>
  outside of work, my interests meander in <a href="https://sites.google.com/view/ereqdesign/ervices/esign" style={{textDecoration: 'underline'}}>design</a>, art,
  and Sound/<a href="https://ereqbeats.bandcamp.com/" style={{textDecoration: 'underline'}}>Sound 🔈</a>. ÉréQ mon artiste prénom pour ma créativité. you might find me sketching 🎨, or reading cool books 📚. 
</p>
          </Reveal>
          <Reveal>
            <div>
              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                now:
              </p>
              <p className={styles.aboutText}>
                i&apos;m a Software Engineer at a Start-up 🏢. 
              </p>
              
        
              <p className={styles.aboutText}>
                focusing on learning new technologies and delving 
                deeper into cloud infrastructure and artificial intelligence 🤖. 
              </p>
              <p className={styles.aboutText} style={{ fontWeight: "bold" }}>
                previously:
              </p>
              <p className={styles.aboutText}>
                worked in an information technology administrator role👨🏿‍💻. 

              </p>
              
            </div>
          </Reveal>
          <Reveal>
            <div className={styles.links}>
              <div className={styles.linksText}>
                <span>continue the conversation:</span>
                <AiOutlineArrowRight />
              </div>
              <MyLinks />
            </div>
          </Reveal>
        </div>
        <Stats />
      </div>
    </section>
  );
};
