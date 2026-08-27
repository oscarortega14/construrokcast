import Reveal from './Reveal'
import { useOpenProject } from './ProjectModalProvider'
import { GRID_PROJECTS, cardSideImages } from '../data/projects'
import './Projects.css'

export default function Projects() {
  const openProject = useOpenProject()

  return (
    <section className="projects" id="proyectos">
      <div className="wrap">
        <div className="eyebrow">06 · PROYECTOS SELECCIONADOS</div>
        <h2 className="section-title">Obra ejecutada en distintos tipos de infraestructura.</h2>
        <p className="lead projects-lead">
          Cada proyecto combina una imagen principal con registros complementarios de proceso y
          resultado. Selecciona <b>More</b> para ampliar la ficha, revisar el proceso documentado y
          explorar más fotografías.
        </p>
        <div className="proj-grid">
          {GRID_PROJECTS.map((project) => (
            <Reveal
              as="article"
              key={project.id}
              // La ficha de la especialidad eléctrica lleva un tratamiento
              // propio: sus imágenes son de instalaciones, no de obra.
              className={
                project.id === 'electrica-capacidad' ? 'project project-electric' : 'project'
              }
            >
              <div className="proj-media">
                <img className="proj-main" src={project.images[0]} alt={project.title} />
                <div className="proj-side">
                  {cardSideImages(project).map((src, i) => (
                    <img
                      className="proj-small"
                      key={`${src}-${i}`}
                      src={src}
                      alt={`Registro ${i + 2} de ${project.title}`}
                    />
                  ))}
                </div>
              </div>
              <div className="proj-body">
                <div className="proj-type">{project.type}</div>
                <h3>{project.title}</h3>
                <p>{project.location}</p>
                <div className="tagrow">
                  {project.tags.slice(0, 3).map((tag) => (
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
    </section>
  )
}
