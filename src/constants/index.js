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
    name: "jetpackcompose",
    icon: jetpackcompose,
  },
  {
    name: "dart",
    icon: dart,
  },
  {
    name: "androiddevelopers",
    icon: androiddevelopers,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "firebase",
    icon: firebase,
  },
  {
    name: "sqllite",
    icon: sqllite,
  },
  {
    name: "kotlin",
    icon: kotlin,
  },
 
  {
    name: "flutter",
    icon: flutter,
  },
  {
    name: "javaa",
    icon: javaa,
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
  {
    title: "Research Intern",
    company_name: "ReAnIn",
    icon: reanin,
    iconBg: "#383E56",
    date: "Mar 2024 - Jul 2024",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
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
  {
    title: "Artificial Intelligence",
    company_name: "SmartKnower",
    icon: smartknower,
    iconBg: "#383E56",
    date: "Jun 2022 - Aug 2022",
    points: [
      "Developing and maintaining Android applications using Java and related tools.",
    "Collaborating with cross-functional teams including designers, product managers, and other developers to deliver high-quality mobile products.",
    "Implementing intuitive user interfaces and ensuring compatibility across multiple Android devices.",
    "Participating in code reviews and providing constructive feedback to maintain code quality."
    ],
  },
  
  
  
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
    name: "Efficient CNN-Based Deep Learning Model for Hand Sign Image Recognition",
    description:
      "During my Artificial Intelligence internship, I developed a deep learning model capable of accurately predicting various hand signs depicted in images. The model exhibits robustness and high accuracy in classifying hand sign gestures.",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python Programming",
        color: "green-text-gradient",
      },
      {
        name: "Convolutional Neural Networks (CNNs)",
        color: "pink-text-gradient",
      },
    ],
    image: handwritten,
    source_code_link: "https://github.com/Thogaruchesti-hemanth/hand-sign-image-prediction",
  },
  {
    name: "Efficient CNN-Based Deep Learning Model for Hand Sign Image Recognition",
    description:
      "During my Artificial Intelligence internship, I developed a deep learning model capable of accurately predicting various hand signs depicted in images. The model exhibits robustness and high accuracy in classifying hand sign gestures.",
    tags: [
      {
        name: "Deep Learning",
        color: "blue-text-gradient",
      },
      {
        name: "Python & ML Frameworks",
        color: "green-text-gradient",
      },
      {
        name: "Computer Vision",
        color: "pink-text-gradient",
      },
    ],
    image: deep,
    source_code_link: "https://github.com/Thogaruchesti-hemanth/hand-sign-image-prediction",
  },
  {
    name: "Created a Flawless Tic Tac Toe Game Using Android Studio",
    description:
      "Developed a perfect Tic Tac Toe game using Android Studio. This game offers a seamless and enjoyable gaming experience, demonstrating my Android development skills.",
    tags: [
      {
        name: "Android Studio",
        color: "blue-text-gradient",
      },
      {
        name: "java / Kotlin Programming",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tictac,
    source_code_link: "https://github.com/Thogaruchesti-hemanth/Tic-Tac-Toe",
  },
];

export { services, technologies, experiences, testimonials, projects };
