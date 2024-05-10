//import Logos
import soai_logo from '../images/soai_logo.png';
import gdg_logo from '../images/gdg_logo.png';
import cse_logo from '../images/cse_logo.png';


//import Icons
import tf from '../images/icons/tf.png';
import html5 from '../images/icons/html5.png';
import css3 from '../images/icons/css3.png';
import js from '../images/icons/js.png';
import react from '../images/icons/react.png';
import tailwindcss from '../images/icons/tailwindcss.png';
import nodejs from '../images/icons/nodejs.png';
import git from '../images/icons/git.png';
import flutter from '../images/icons/flutter.png';



// import projects background images
import portfolioBackground from '../images/portfolioBackground.jpg'
import DrManagerBackground from '../images/DrManagerBackground.png'
import AlgeriaCoinClassification from '../images/AlgeriaCoinClassification.png'
import DocScribe from '../images/DocScribe.png'



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
  {name: "Flutter", icon: flutter},
  { name: "HTML 5", icon: html5 },
  { name: "CSS 3", icon: css3},
  { name: "JavaScript", icon: js },
  { name: "React JS", icon: react },
  { name: "Tailwind CSS", icon: tailwindcss },
  { name: "Node JS", icon: nodejs },
  { name: "git", icon: git},
  { name: "TensorFlow", icon: tf },  

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
    date: "Nov 2021 - Present",
    points: [
      "Developing a fully functional mobile application using Flutter, Firebase, and Google Cloud Platform, gaining hands-on experience in app development.",
      "Leading a team of 6 members in brainstorming and implementing innovative solutions for technical challenges including innovating a visual identity and a responsive web app.",
      "Doing my first ever workshop on the basics of Pascal, teaching 20+ students the fundamentals of programming and problem-solving and algorithmic thinking.",
      "Participated in various hackathons and coding competitions, honing my problem-solving skills and gaining experience in working under pressure like Datahack."
    ],
  },
];

export const projects = [
  {
    name: "My Personal Portfolio",
    description:
      "A digital showcase of my professional journey, skills, and accomplishments.",
    tags: [
      { name: "Javascript", color: "blue-text-gradient" },
      { name: "HTML", color: "green-text-gradient" },
      { name: "Tailwind", color: "pink-text-gradient" },
      { name: "A fully designed and developed by me website", color: "yellow-text-gradient" },
    ],
    image: portfolioBackground,
    source_code_link: "https://github.com/OussamaAbderraoufAttia/Portfolio-Website",
  },
  {
    name: "Dr.Manager - Binary Image Segmentation",
    description:
      "Tracking Doctor's appointments and managing patient's data and doing smart diagnostic using AI.",
    tags: [
      { name: "Flask", color: "blue-text-gradient" },
      { name: "Computer Vision", color: "green-text-gradient" },
      { name: "U-net", color: "pink-text-gradient" },
      { name: "A fully designed and developed and deployed during TC - ETIC - 2024", color: "yellow-text-gradient" },
    ],
    image: DrManagerBackground,
    source_code_link: "https://github.com/OussamaAbderraoufAttia/bisbackend",
  },
  {
    name: "Algeria Coin Classifier",
    description:
    "An image classification model designed to identify and categorize Algerian coins using convolutional neural networks.",
    tags: [
      { name: "Machine Learning", color: "blue-text-gradient" },
      { name: "CNN", color: "green-text-gradient" },
      { name: "OpenCV", color: "pink-text-gradient" },
    ],
    image: AlgeriaCoinClassification,
    source_code_link:
      "https://github.com/OussamaAbderraoufAttia/AlgerianCoinClassifier",
  },
  {
    name: "Doc Talents Website",
    description:
      "A website that has been developed for the management of the registrations and the re-registrations of the doctoral students",
    tags: [
      { name: "MERN Stack", color: "blue-text-gradient" },
    ],
    image: DocScribe,
    source_code_link: "https://github.com/Imeneallouche/Doc-Talents-Website",
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
