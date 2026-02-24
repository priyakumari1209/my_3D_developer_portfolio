import {
  mobile,
  backend,
  javascript,

  css,
  meta,
} from "../assets";
import java from "../assets/java.png";
import artificialIntelligence from "../assets/ArtificialIntelligence.png";
import handwritten from "../assets/handwritten.png";
import smartknower from "../assets/smartknower.png";
import perfectelearning from "../assets/perfectelearning.png";
import reanin from "../assets/Reanin.png";
import android from "../assets/android.png";
import compose from "../assets/compose.png";
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
import mysqicons8lIcon from "../assets/mysqicons8lIcon.png";

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
    id: "skills",
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
    name: "Java",
    icon: java,
  },
  {
    name: "Kotlin",
    icon: kotlin,
  },
  {
    name: "Compose",
    icon: compose,
  },
  {
    name: "Android ",
    icon: android,
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
    name: "MySQL",
    icon: mysqicons8lIcon,
  },

  {

    name: "Sqllite",
    icon: sqllite,
  },
  // {
  //   name: "HTML 5",
  //   icon: html,
  // },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
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
    name: "Handwritten Digit Recognition",
    category: "ai",
    description:
      "CNN-based deep learning model achieving 98% accuracy on MNIST dataset.",
    tags: [
      { name: "Python", color: "text-blue-400" },
      { name: "TensorFlow", color: "text-orange-400" },
      { name: "CNN", color: "text-green-400" },
    ],
    image: deep,
    source_code_link: "https://github.com/Thogaruchesti-hemanth/handwrittten-digit-recognition",
    demo_link: "https://drive.google.com/file/d/1EXguhDlMwGGVGFaCErT-DVa9sME8njMC/view?usp=sharing",
  },
  {
    name: "Hand Sign Image Recognition",
    category: "ai",
    description:
      "Efficient CNN model for recognizing various hand signs with 95% accuracy.",
    tags: [
      { name: "Python", color: "text-blue-400" },
      { name: "Keras", color: "text-red-400" },
      { name: "OpenCV", color: "text-emerald-400" },
    ],
    image: handwritten,
    source_code_link: "https://github.com/Thogaruchesti-hemanth/hand-sign-image-prediction",
    demo_link: "https://drive.google.com/file/d/16eQqpOHsm4XLDbSiurSD1-RHQ77XXgp4/view?usp=sharing",
  },
  {
    name: "Tic Tac Toe Game",
    category: "android",
    description:
      "Flawless mobile game with intuitive UI and smooth gameplay experience.",
    tags: [
      { name: "Java", color: "text-amber-400" },
      { name: "Android", color: "text-green-400" },
      { name: "XML", color: "text-purple-400" },
    ],
    image: tictac,
    source_code_link: "https://github.com/Thogaruchesti-hemanth/Tic-Tac-Toe",
    demo_link: "https://drive.google.com/file/d/16Gx3VATNzZyjKCivj9KOAL4pLD9wOf74/view?usp=sharing",
  },
  {
    name: "Math Quiz Game",
    category: "android",
    description:
      "Interactive educational app with multiple difficulty levels and score tracking.",
    tags: [
      { name: "Java", color: "text-amber-400" },
      { name: "Android", color: "text-green-400" },
      { name: "SQLite", color: "text-cyan-400" },
    ],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/Thogaruchesti-hemanth/math-quizz-game",
    demo_link: "https://drive.google.com/file/d/13z3v_JYsD2jg2dCIVZOlREOLoiFkpeHK/view?usp=sharing",
  },
  {
    name: "Portfolio Website",
    category: "web",
    description:
      "Responsive professional portfolio with modern design and optimized performance.",
    tags: [
      { name: "HTML5", color: "text-orange-400" },
      { name: "CSS3", color: "text-blue-400" },
      { name: "JavaScript", color: "text-yellow-400" },
      { name: "Bootstrap", color: "text-violet-400" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/Thogaruchesti-hemanth/protfolio",
    demo_link: "https://protfolio-git-main-thogaruchesti-hemanth.vercel.app/",
  },
];

export { services, technologies, experiences, testimonials, projects };
