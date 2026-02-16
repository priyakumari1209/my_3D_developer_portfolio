import {
  mobile,
  backend,
  javascript,
  html,
  css,
  meta,
} from "../assets";
import java from "../assets/java.png";
import artificialIntelligence from "../assets/ArtificialIntelligence.png";
import handwritten from "../assets/handwritten.png";
import smartknower from "../assets/smartknower.png";
import perfectelearning from "../assets/perfectelearning.png";
import reanin from "../assets/Reanin.png";
import androiddevelopers from "../assets/androiddevelopers.png";
import jetpackcompose from "../assets/jetpackcompose.png";
import dart from "../assets/dart.png";
import git from "../assets/git.png";
import flutter from "../assets/flutter.png";
import firebase from "../assets/firebase.png";
import sqllite from "../assets/sqllite.png";
import kotlin from "../assets/kotlin.png";
import javaa from "../assets/javaa.png";
import deep from "../assets/deep.png";
import tictac from "../assets/tictac.png";
import inapay from "../assets/inapay.png";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  { id: "skills", 
    title: "Skills" 
  },
  {
    id: "contact",
    title: "Contact",
  },
 
];

const services = [
  {
    title: "Java Developer",
    icon: java,
  },

  {
    title: "Mobile Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
    icon: artificialIntelligence,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "Compose",
    icon:jetpackcompose,
  },
  
  
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
  {
    name: "Sqllite",
    icon: sqllite,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
 
  
  {
    name: "Java",
    icon: java,
  },
];

const experiences = [
  {
    title: "Junior Android Developer",
    company_name: "ina Payments Software Pvt Ltd",
    icon: inapay,
    iconBg: "#E6DEDD",
    date: "sep 2024 - Present",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  // {
  //   title: "Research Intern",
  //   company_name: "ReAnIn",
  //   icon: reanin,
  //   iconBg: "#383E56",
  //   date: "Mar 2024 - Jul 2024",
  //   points: [
  //     "Developing and maintaining web applications using React.js and other related technologies.",
  //     "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
  //     "Implementing responsive design and ensuring cross-browser compatibility.",
  //     "Participating in code reviews and providing constructive feedback to other developers.",
  //   ],
  // },
  {
    title: "Android Developer",
    company_name: "Perfect eLearning",
    icon: perfectelearning,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Aug 2023",
    points: [
      "Developing and maintaining Android applications using Java and Android Studio.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality mobile applications.",
      "Implementing intuitive user interfaces and ensuring compatibility across various Android devices and OS versions.",
      "Participating in code reviews and providing constructive feedback to improve code quality and performance.",
    ],
  },
  // {
  //   title: "Artificial Intelligence",
  //   company_name: "SmartKnower",
  //   icon: smartknower,
  //   iconBg: "#383E56",
  //   date: "Jun 2022 - Aug 2022",
  //   points: [
  //     "Developing and maintaining Android applications using Java and related tools.",
  //   "Collaborating with cross-functional teams including designers, product managers, and other developers to deliver high-quality mobile products.",
  //   "Implementing intuitive user interfaces and ensuring compatibility across multiple Android devices.",
  //   "Participating in code reviews and providing constructive feedback to maintain code quality."
  //   ],
  // },
  
  
  
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to build an app as smooth and user-friendly as our vision, but Priya proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met an Android developer who genuinely cares about delivering a flawless user experience like Priya does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Priya optimized our mobile app, our user engagement doubled. We can't thank her enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Hand Sign Recognition",
    category: "AI/ML",
    description:
      "Efficient CNN model for recognizing various hand signs with 95% accuracy.",
    tags: ["Python", "TensorFlow", "OpenCV"],
    image: handwritten,
    source_code_link: "https://github.com",
  },
  {
    name: "Deep Learning Digit Recognition",
    category: "AI/ML",
    description:
      "CNN-based deep learning model achieving 98% accuracy on MNIST dataset.",
    tags: ["Python", "CNN", "TensorFlow"],
    image: deep,
    source_code_link: "https://github.com",
  },
  {
    name: "Tic Tac Toe Game",
    category: "Android",
    description:
      "A smooth and flawless Tic Tac Toe Android game developed using Java/Kotlin.",
    tags: ["Java", "Android", "XML"],
    image: tictac,
    source_code_link: "https://github.com",
  },
];

export { services, technologies, experiences, testimonials, projects };
