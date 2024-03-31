import { SectionHeader } from "@/components/utils/SectionHeader";
import { Project } from "./Project";
import styles from "./projects.module.scss";

export const Projects = () => {
  return (
    <section className="section-wrapper" id="projects">
      <SectionHeader title="projects" dir="r" />

      <div className={styles.projects}>
        {projects.map((project) => {
          return <Project key={project.title} {...project} />;
        })}
      </div>
    </section>
  );
};


const projects = [
    {
    title: "Tesla Battery Visualizer",
    imgSrc: "./project-imgs/QT.jpg",
    code: "https://github.com/ngoiyaeric/battery-visualizer",
    projectLink: "https://battery-visualizer.vercel.app/",
    tech: ["Javascript, Redux.js, React.js, Tailwind CSS"],
    description:
      "View battery health under various conditions.",
    modalContent: (
      <>
        <p>
          Visualizer tool for checking battery health for Tesla cars so users can predict battery
          health in various weather conditions using react.js components and redux.js for state management
        </p>
        <p style={{ fontStyle: "italic" }}>
          I&apos;wonder how a real time version of this application would work, perhaps I would need to learn abit of electrical engineering to understand that. 
        </p>
      </>
    ),
  },
    {
    title: "IBM Weavesphere",
    imgSrc: "/project-imgs/ibm.jpg", //642 x 408
    code: "",
    projectLink: "",
    tech: ["White Board", "Markers"],
    description:
      "IBM Design Thinking Certification",
    modalContent: (
      <>
        <p>
         `Participated in a design sprint to craft a solution for job scarcity for computer science graduates, learnt about key design principles and thinking paradigms. This robot was supposed to send me a photo i let it took of me, it never did, so here is a photo of the robot and i, and its not even smiling`
        </p>
      </>
    ),
  },
  {
    title: "Gooogle Cloud Skills Boost",
    imgSrc: "/project-imgs/P.jpg", //642 x 408
    code: "",
    projectLink: "https://www.cloudskillsboost.google/public_profiles/41cc05c1-8f72-4595-9c16-ba723cd1df91",
    tech: ["Google Cloud Platform", "Tensorflow", "Python", "Jupyter Notebooks"],
    description:
      "Cloud technologies & Artificial Intelligence",
    modalContent: (
      <>
        <p>
          'Upskilling through a series of short hands on labs'
        </p>
      </>
    ),
  },

  {
    title: "PortAudio",
    imgSrc: "/project-imgs/portaudio.png",
    code: "https://github.com/PortAudio/portaudio/pull/841",
    projectLink: "http://www.portaudio.com",
    tech: ["C/C++"],
    description:
      "A portable audio I/O library designed for cross-platform support of audio.",
    modalContent: (
      <>
        <p>
          Contributed to an open-source audio library by developing data conversion functions
          between custom integer representations to facilitate communication with external 
          audio software. 
        </p>
        <p>
          Utilized dithering, the process of adding white noise to reduce 
          distortion of low-amplitude signals, to convert between different integer 
          representation (UInt8 (U = unsigned), Int32). Fine-tuned conversion functions
        </p>
  
      </>
    ),
  },
  {
    title: "GPT-Investor",
    imgSrc: "/project-imgs/Cash.png", //642 x 408
    code: "https://github.com/ngoiyaeric/GPT-Investor",
    projectLink: "https://github.com/ngoiyaeric/GPT-Investor",
    tech: ["BeautifulSoup", "Python", "OpenAI"],
    description:
      "Artificial Intelligence",
    modalContent: (
      <>
        <p>
          'Input industry, get top performing Stocks and Explanations. More features coming soon'
        </p>
      </>
    ),
  },
  {
    title: "Open Interpreter",
    imgSrc: "/project-imgs/oi.png", //642 x 408
    code: "https://github.com/OpenInterpreter/open-interpreter/issues/1047",
    projectLink: "https://openinterpreter.com",
    tech: ["Python", "Artificial Intelligence"],
    description:
      "Language Computer",
    modalContent: (
      <>
        <p>
         `Actively involved in the open source community, raising and closing issues relating to system usability as well as attending feature ideation meetings. `
        </p>
      </>
    ),
  },
  {
    title: "Essence Cube-Sat Mission",
    imgSrc: "/project-imgs/Si.png", //642 x 408
    code: "https://www.asc-csa.gc.ca/eng/satellites/cubesat/",
    projectLink: "http://www.yorku.ca/cubesat/",
    tech: ["Nano-Satelite", "Scripting"],
    description:
      "I volunteered to write a short python script that periodically parsed input signals from an electrical measuring equipment on the nano-satelite ",
    modalContent: (
      <>
        <p>
         `Satelite to track change in permafrost due to climate change'
        </p>
      </>
    ),
  },
  {
    title: "Genesys Hackathon",
    imgSrc: "/project-imgs/Banner.jpg", //642 x 408
    code: "",
    projectLink: "https://www.blogto.com/events/genesys-hackathon-toronto-2/",
    tech: ["Genesis API", "NoSQL", "Python", "Postman"],
    description:
      "Visitors Guide",
    modalContent: (
      <>
        <p>
         `Developed a solution to provide foreigners in Canada with answers to frequently asked questions about the area.
          Fine-tuned Genesis' proprietary natural language model with question and answer pairs using http posts to their api over http.
          developed a nosql database to store new questions for further model fine-tuning.`
        </p>
      </>
    ),
  },

  {
    title: "Square Hackathon",
    imgSrc: "/project-imgs/Square.png", //642 x 408
    code: "https://github.com/Aladdin4u/square-store",
    projectLink: "https://finesse-gamma.vercel.app",
    tech: ["React", "Next.js", "Javascript", "Typescript"],
    description:
      "E-commerce",
    modalContent: (
      <>
        <p>
         `Implemented cart & payments module for user purchases for the square 2023 hackathon. E-commerce solution is powered by Square API backend.`
        </p>
      </>
    ),
  },
  
];
