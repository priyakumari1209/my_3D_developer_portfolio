import {
  mobile,
  backend,
  javascript,
  html,
  css,
  reactjs,
  nodejs,
  mongodb,
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
    id: "projects",
    title: "Projects",
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
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  },
  {
    name: "Kotlin",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kotlin/kotlin-original.svg",
  },
  {
    name: "Compose",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jetpackcompose/jetpackcompose-original.svg",
  },
  {
    name: "Android",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/android/android-original.svg",
  },
  {
    name: "Android Studio",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/androidstudio/androidstudio-original.svg",
  },
  {
    name: "Firebase",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg",
  },
  {
    name: "SQLite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
  },
  {
    name: "MySQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg",
  },
  {
    name: "Material Design",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/materialui/materialui-original.svg",
  },
  {
    name: "Flutter",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flutter/flutter-original.svg",
  },
  {
    name: "Dart",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dart/dart-original.svg",
  },
  {
    name: "Git",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  },
  {
    name: "Python",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  },
  {
    name: "TensorFlow",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tensorflow/tensorflow-original.svg",
  },
];

const experiences = [
  {
    title: "Android Developer",
    company_name: "INA Payments Software Pvt Ltd",
    icon: inapay,
    iconBg: "#E6DEDD",
    date: "Nov 2024 - Present", // Updated to match resume
    points: [
      "Developed and maintained production-grade POS payment applications using Java and MVVM Architecture, deploying builds to 100+ merchant terminals.",
      "Executed end-to-end EMV transaction flows for Visa and Mastercard L3 certifications, achieving 100% compliance with industry specifications.",
      "Implemented secure transaction processing using AES-256 encryption and DUKPT key handling to ensure PCI-DSS compliance.",
      "Reduced real-time application crashes by 40% and improved UI responsiveness by 25% by optimizing lifecycle handling and implementing MQTT-based communication.",
    ],
    techs: ["Java", "Kotlin", "MVVM", "MQTT", "Android SDK", "AES-256", "DUKPT"], // Aligned with resume skills
  },
  {
    title: "Android App Development Intern",
    company_name: "Perfect E Learning",
    icon: perfectelearning,
    iconBg: "#E6DEDD",
    date: "Dec 2022 - Aug 2023", // Confirmed from resume
    points: [
      "Enhanced 4 Android applications by resolving over 25 bugs, successfully improving crash-free sessions from 85% to 98%.",
      "Designed UI layouts using XML and implemented core logic for interactive learning apps, resulting in a 20% increase in user engagement.",
      "Reduced ANR (Application Not Responding) errors by 30% through improved event handling and fragment lifecycle management.",
      "Collaborated in a remote environment to deliver production-ready features and UI components for educational mobile products.",
    ],
    techs: ["Java", "Android Studio", "XML", "SQLite", "Firebase", "Lifecycle Management"], // Based on resume content
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
      { name: "XML", color: "text-[#afc6ff]" },
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
      { name: "Bootstrap", color: "text-[#afc6ff]" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    source_code_link: "https://github.com/Thogaruchesti-hemanth/protfolio",
    demo_link: "https://protfolio-git-main-thogaruchesti-hemanth.vercel.app/",
  },
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/Thogaruchesti-hemanth",
    icon: "github",
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/hemanth-thogaruchesti-1349b1248/", // Placeholder or real if known
    icon: "linkedin",
  },
  {
    name: "Instagram",
    url: "https://www.instagram.com/",
    icon: "instagram",
  },
];

export { services, technologies, experiences, testimonials, projects };

