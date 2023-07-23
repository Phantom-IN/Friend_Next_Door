import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/navbar";
import { Banner } from "./components/banner";
import { Contact } from "./components/contact";
import { Footer } from "./components/footer";
import { Team } from "./components/team";
import { About } from "./components/about";

function App() {
  return (
    <div className="App">
      <NavBar />
      <section id="home-section">
        <Banner />
      </section>

      <section id="about-section">
        <About />
      </section>

      <section id="contact-section">
        <Contact />
      </section>

      <section id="team-section">
        <Team />
      </section>
      <Footer />     
    </div>
  );
}

export default App;
