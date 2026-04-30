import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  Footer,
} from "./components";
import { styles } from "./styles";

const App = () => {
  return (
    <BrowserRouter>
      <div className={`relative z-0 ${styles.heroBg} min-h-screen`}>

        {/* Hero Section */}
        <Navbar />
        <Hero />

        {/* Content Sections */}
        <div className={`${styles.sectionBg}`}>
          <About />
          <Experience />
          <Tech />
          <Works />
          <Feedbacks />
          <Contact />
          <Footer />
        </div>

      </div>
    </BrowserRouter>
  );
};

export default App;
