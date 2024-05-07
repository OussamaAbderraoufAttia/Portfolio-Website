//import soai_logo.png
import soai_logo from '../images/soai_logo.png';
import gdg_logo from '../images/gdg_logo.png';
import cse_logo from '../images/cse_logo.png';


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

export const services = [
  { title: "C", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech-Stack/C.png" },
  { title: "C++", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech-Stack/CPP.png" },
  { title: "Python", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech-Stack/Python.png" },
  { title: "Java", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech-Stack/Java.png" },
];

export const technologies = [
  { name: "HTML 5", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/HTML.png" },
  { name: "CSS 3", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/CSS.png" },
  { name: "JavaScript", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/Javascript.png" },
  { name: "Rect JS", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/ReactJS.png" },
  { name: "Tailwind CSS", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/TailwindCSS.png" },
  { name: "Node JS", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/NodeJS.png" },
  { name: "Three JS", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/ThreeJS.png" },
  { name: "git", icon: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Tech/Git.png" },
  
];

export const experiences = [
  {
    title: "SOAI Events Deparmtment Manager",
    company_name: "School of AI Club| Algiers Chapter | Algeria",
    icon: soai_logo,
    iconBg: "#161329",
    date: "Sep 2022 - Oct 2023",
    points: [
      "Coordinated logistics for various events including workshops, seminars, and conferences, ensuring smooth operations and timely execution.",
      "also gaining a solid foundation in Machine Learning, covering topics like algorithms, data analysis, and model building.",
      "Collaborated with team members to develop innovative solutions for logistical challenges, resulting in improved event experiences."
    ],
  },
  {
    title: "GDG Algiers Logistics Co-manager",
    company_name: "Google Developers Group Club | Algeria Chapter | Algeria",
    icon: gdg_logo,
    iconBg: "#161329",
    date: "July 2023 - Present",
    points: [
      "Innovated solutions collaboratively to tackle logistical challenges, enhancing event quality.",
      "Acquired practical skills in MERN Stack development, including React, Node.js, and MongoDB, through hands-on projects and workshops.",
      "Guided a team of 10+ members in executing logistics for various events, ensuring seamless operations and timely execution.",
    ],
  },
  {
    title: "CSE Club Member",
    company_name: "Club Scientifique de l'ESI | ESI Alger | Algiers",
    icon: cse_logo,
    iconBg: "#161329",
    date: "July 2023 - Present",
    points: [
      "Engineered a comprehensive Mental Health Fitness Tracker ML model utilizing Python and scikit-learn.",
      "Maximized the model's performance by refining model parameters and employing ensemble methods, yielding an outstanding accuracy percentage of 98.50%.",
      "Leveraged 12 regression algorithms to attain precise outcomes in analyzing and predicting mental fitness levels across 150+ countries.",
    ],
  },
];

export const projects = [
  {
    name: "WeatherPedia",
    description:
      "Web-based platform that allows users to access weather information for their location by entering it in the search field",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "bootstrap 5.3.0", color: "pink-text-gradient" },
      { name: "Weather API by API Ninjas", color: "yellow-text-gradient" },
    ],
    image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/WeatherPedia.png",
    source_code_link: "https://github.com/lohitkolluri/WeatherPedia",
  },
  {
    name: "Terminal Like Portfolio Website",
    description:
      "A terminal themed portfolio website that allows users to type into the terminal and use commands like a real terminal.",
    tags: [
      { name: "HTML", color: "blue-text-gradient" },
      { name: "css", color: "green-text-gradient" },
      { name: "Javascript", color: "pink-text-gradient" },
    ],
    image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/TerminalPW.png",
    source_code_link: "https://github.com/lohitkolluri/lohitkolluri.github.io",
  },
  {
    name: "Mental Health Fitness Tracker",
    description:
      "ML model that utilizes regression techniques to provide insights into mental health and make predictions based on the available data.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "Jupyter Notebook", color: "green-text-gradient" },
      { name: "Regression Algorithms", color: "pink-text-gradient" },
    ],
    image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/MHFT.png",
    source_code_link:
      "https://github.com/lohitkolluri/mental_health_fitness_tracker",
  },
  {
    name: "PayloadMaster",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "shell", color: "blue-text-gradient" },
    ],
    image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/PayloadMaster.png",
    source_code_link: "https://github.com/lohitkolluri/PayloadMaster",
  },
  {
    name: "CompileVortex",
    description:
      "Tool to automate payload creation using the Metasploit framework",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "CSS", color: "green-text-gradient" },
      { name: "HTML", color: "pink-text-gradient" },
    ],
    image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/CompileVortex.png",
    source_code_link: "https://github.com/lohitkolluri/CompileVortex",
  },
  {
    name: "Sketcher",
    description:
      "Convert an input image to a pencil sketch using OpenCV and Matplotlib libraries.",
    tags: [
      { name: "OpenCV", color: "blue-text-gradient" },
      { name: "Matplotlib", color: "green-text-gradient" },
      { name: "Python", color: "pink-text-gradient" },
    ],
    image: "https://lohitcdn.blob.core.windows.net/portfoliocdn/Projects/Sketcher.png", 
    source_code_link: "https://github.com/lohitkolluri/SketchiFy",
  },
];
