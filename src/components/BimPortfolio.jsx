import Reveal from './Reveal'
import { useOpenProject } from './ProjectModalProvider'
import { BIM_PORTFOLIO } from '../data/content'
import { BIM_PORTFOLIO_PROJECTS, cardSideImages } from '../data/projects'
import './BimPortfolio.css'

// Portafolio BIM del equipo: los cuatro casos de levantamiento y modelado que
// no aparecen en la sección Proyectos.
export default function BimPortfolio() {
  const openProject = useOpenProject()

  return (
    <div className="bim-portfolio">
      <Reveal className="bim-portfolio-head">
        <div>
          <div className="eyebrow">{BIM_PORTFOLIO.eyebrow}</div>
          <h3>{BIM_PORTFOLIO.title}</h3>
        </div>
        <p>{BIM_PORTFOLIO.text}</p>
      </Reveal>

      <Reveal className="bim-proof">
        {BIM_PORTFOLIO.proof.map((item) => (
          <div className="bim-proof-item" key={item.title}>
            <b>{item.title}</b>
            <span>{item.text}</span>
          </div>
        ))}
      </Reveal>

      <div className="bim-project-grid">
        {BIM_PORTFOLIO_PROJECTS.map((project) => (
          <Reveal as="article" className="bim-project-card" key={project.id}>
            <div className="bim-project-media">
              <img className="bim-project-main" src={project.images[0]} alt={project.title} />
              <div className="bim-project-side">
                {cardSideImages(project).map((src, i) => (
                  <img
                    className="bim-project-small"
                    key={`${src}-${i}`}
                    src={src}
                    alt={`Detalle BIM de ${project.title}`}
                  />
                ))}
              </div>
            </div>
            <div className="bim-project-body">
              <div className="proj-type">{project.card.type}</div>
              <h4>{project.title}</h4>
              <p>{project.card.text}</p>
              <div className="tagrow">
                {project.card.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="project-actions">
                <button
                  className="more-btn"
                  type="button"
                  onClick={() => openProject(project.id)}
                  aria-haspopup="dialog"
                  aria-label={`Ver ficha de ${project.title}`}
                >
                  More <span aria-hidden="true">→</span>
                </button>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
