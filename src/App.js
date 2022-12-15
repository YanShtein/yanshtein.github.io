import Header from './components/Header';
import Projects from './components/Main/Projects';
import Contact from './components/Contact';
import { useEffect } from 'react';


function App() {

  useEffect(() => {
    window.onscroll = () => {
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      document.getElementById("progress-bar").style.width = scrolled + "%";
    };
  });
  

  return (
    <div className="container">
      <div className="progress-bar" id="progress-bar"></div>
		  <div className="background"></div>
      <Header />
      <section id="projects">
        <div className="projects-container">
          <h2>Things I've Built</h2>
          <h5>Developer <span>& Designer</span></h5>
          <div className="projects">
            <Projects />
          </div>  
        </div>
      </section>
      <Contact 
        linkdinUrl="https://www.linkedin.com/in/yanshtein/"
        githubUrl="https://github.com/YanShtein/"
        codepenUrl="https://codepen.io/yansht/"
      />
    </div>
  );
};

export default App;
