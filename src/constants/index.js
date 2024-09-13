import project1 from "../assets/projects/Ayur.jpg";
import project2 from "../assets/projects/Gaming.jpg";
import project3 from "../assets/projects/Portfolio.jpg";
import project4 from "../assets/projects/Gemini.jpg";
import project5 from "../assets/projects/Wiki.jpg";
import project6 from "../assets/projects/Todo.jpg";

export const HERO_CONTENT = `I am a passionate full stack developer with a knack for crafting robust and scalable web applications. With 5 years of hands-on experience, I have honed my skills in front-end technologies like React and Next.js, as well as back-end technologies like Node.js, MySQL, PostgreSQL, and MongoDB. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile full stack developer with a passion for creating efficient and user-friendly web applications. With 5 years of professional experience, I have worked with a variety of technologies, including React, Next.js, Node.js, MySQL, PostgreSQL, and MongoDB. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Staff Consultant",
    company: "eSoftLabs .Inc",
    description: `Worked on MSSQL and used report builder and crystal reports for WMS Operations. Working on building a website using React JS, and python for backend. Working on ML to enhance Supply Chain Management Operations.`,
    technologies: ["Javascript", "React.js", "HTML", "CSS", "Python", "MsSql", "ML"],
  },
];

export const PROJECTS = [
  {
    title: "Ayurvedh Website",
    image: project1,
    description:
      "Build a static website, which shows the information about ayurvedic products. I built it using HTML, CSS Animations.",
    technologies: [ "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Gaming Website",
    image: project2,
    description:
      "A static webpage about gaming, with different categories like X-box, Playstation.Added a pre-order button for further development.",
    technologies: [ "HTML", "CSS", "Bootstrap"],
  },
  {
    title: "Portfolio Website",
    image: project3,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["React", "Tailwind CSS", "Animation Libraries"],
  },
  {
    title: "Gemini AI Clone",
    image: project4,
    description:
      "I cloned Gemini AI website. ",
    technologies: [ "React", "CSS"],
  },
  {
    title: "Wikipedia Search",
    image: project5,
    description:
      "Created a Wikipedia Search using APIs. It can fetch content from wikipedia and shows the information here.",
    technologies: [  "HTML", "CSS", "JavaScript"],
  },
  {
    title: "Todo List",
    image: project6,
    description:
      "Created a To-do List, where we can add the tasks, check them once completed, and delete it. We can see the completed tasks with time-stamp.",
    technologies: [ "Taiwind CSS", "React"],
  },
];

export const CONTACT = {
  address: "767 Fifth Avenue, New York, NY 10153 ",
  phoneNo: "+12 4555 666 00 ",
  email: "me@example.com",
};
