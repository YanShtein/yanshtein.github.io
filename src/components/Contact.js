import { linkedinSvg, githubSvg, codepenSvg } from '../assets/svg';

export default function Contact({ linkdinUrl, githubUrl, codepenUrl }) {
  return (
    <section id="contact">
      <div className="contact">
        <div className="contact-btn">
          <a href="mailto:yan.shtein@gmail.com" 
            rel="noopener noreferrer" 
            target="_blank">Say Hello
          </a>
        </div>
        <div className="contact-links">
          <a href={linkdinUrl} target="_blank" rel="noreferrer">
            {linkedinSvg}
          </a>
          <a href={githubUrl} target="_blank" rel="noreferrer">
            {githubSvg}
          </a>
          <a href={codepenUrl} target="_blank" rel="noreferrer">
            {codepenSvg}
          </a>
        </div>
        <small>Designed & Built by Yan Shtein</small>
      </div>
    </section>
  )
};
