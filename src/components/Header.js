export default function Header() {
  return (
    <section id="hero">
      <div className="hero-container">
        <div className="hero-nav">
          <h2><span style={{fontSize: '60px'}}>{'<Y>'}</span></h2>
          <ul>
            <li><a href="#hero">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        <div className="hero-text">
          <h4>Hello, my name is</h4>
          <h1>Yana <span>Brushtein</span></h1>
          <h3>I'am an aspired Front-End web developer.</h3>
          <div className="links">
            <a href="https://github.com/YanShtein" rel="noreferrer">
              <button>
                GitHub repositories
              </button>
            </a>
            <a href="https://www.linkedin.com/in/yanshtein" rel="noreferrer">
              <button>
                About me on Linkdin	
              </button>
            </a>
            <a href="https://codepen.io/yansht/" rel="noreferrer">
              <button>
                CodePen projects
              </button>
            </a>
          </div>	
        </div>
      </div>
    </section>
  )
};
