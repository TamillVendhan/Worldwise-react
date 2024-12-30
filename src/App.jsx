
import React, { Suspense } from "react";
import Loading from "./Components/Loading";

const About = React.lazy(() => import("./Components/About"));
const Contact = React.lazy(() => import("./Components/Contact"));
const Experience = React.lazy(() => import("./Components/Experience"));
const Home = React.lazy(() => import("./Components/Home"));
const NavBar = React.lazy(() => import("./Components/NavBar"));
const Portfolio = React.lazy(() => import("./Components/Portfolio"));
const Footer = React.lazy(() => import("./Components/Footer"));
const SocialLinks = React.lazy(() => import("./Components/SocialLinks"));

function App() {
  return (
    
      <Suspense fallback={<Loading />}>
        <NavBar />
        <main  >
          <Home />
          <About />
          <Portfolio />
          <Experience />
          <Contact />
          <Footer />
        </main>
        <SocialLinks />
      </Suspense>
    
  );
}

export default App;

