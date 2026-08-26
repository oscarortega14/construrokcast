import Reveal from './Reveal'
import { PROJECTS } from '../data/content'
import './Projects.css'

export default function Projects() {
  return (
    <section className="projects">
      <div className="wrap">
        <div className="eyebrow">06 · PROYECTOS SELECCIONADOS</div>
        <h2 className="section-title">Obra ejecutada en distintos tipos de infraestructura.</h2>
        <p className="lead projects-lead">
          Selección inicial del registro fotográfico empresarial. Esta galería queda preparada para
          incorporar nuevos proyectos y mejores fotografías.
        </p>
        <div className="proj-grid">
          {PROJECTS.map((project) => (
            <Reveal className="project" key={project.title}>
              <div
                className="proj-img"
                style={{ backgroundImage: `url('${project.image}')` }}
                role="img"
                aria-label={`${project.title} — ${project.place}`}
              />
              <div className="proj-body">
                <div className="proj-type">Experiencia empresarial</div>
                <h3>{project.title}</h3>
                <p>{project.place}</p>
                <div className="tagrow">
                  {project.tags.map((tag) => (
                    <span className="tag" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
