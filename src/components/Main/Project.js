import { gitSvg, extSvg } from '../../assets/svg';

export default function Project({ img, repo_url, url, title, description, techs, featured, codecamp }) {
  return (
    <div className="project">
      <img src={img} alt={img}/>
      <div className="project-content">
        <p className="project-feature">{featured}</p>
        <a href={url} className="project-title" target="_blank" rel="noreferrer">{title}</a>
        <p className="project-text">
          {description}
				</p>
        <p className="project-tech">
          {techs.map(tech => <small key={tech}>{tech}</small>)}
				</p>
        <p className="project-icons">
          <a href={repo_url} target="_blank" rel="noreferrer">{gitSvg}</a>
          <a href={url} target="_blank" rel="noreferrer">{extSvg}</a>
          <small>{codecamp}</small>	 
				</p>
      </div>
    </div>
  )
};