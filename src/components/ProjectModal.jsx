import { useEffect, useRef, useState } from 'react'
import { findProject, projectFacts } from '../data/projects'
import './ProjectModal.css'

// Ficha ampliada de un proyecto: galería con miniaturas, tabla de datos y la
// descripción de alcance y proceso.
//
// El original usaba un <div> superpuesto con su propio backdrop y su propio
// manejo de Escape. Aquí se usa <dialog> nativo, igual que CapabilityModal:
// aporta gratis el atrapado de foco, el cierre con Escape y el backdrop.
export default function ProjectModal({ projectId, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const [index, setIndex] = useState(0)
  const project = projectId ? findProject(projectId) : null
  const open = Boolean(project)

  // Cada proyecto abre siempre en su primera fotografía.
  useEffect(() => {
    setIndex(0)
  }, [projectId])

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
      // El propio <dialog> es el contenedor con scroll: showModal() lo enfocaría
      // y el navegador le dibujaría el anillo de foco alrededor de todo el
      // modal. React tampoco emite el atributo autofocus, así que se enfoca a
      // mano el botón de cerrar.
      closeRef.current?.focus()
    }
    if (!open && dialog.open) dialog.close()
  }, [open])

  // showModal() no bloquea el scroll del body en todos los navegadores.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  if (!project) return null

  const safeIndex = Math.min(index, project.images.length - 1)

  return (
    <dialog
      ref={dialogRef}
      className="project-modal"
      aria-labelledby="project-modal-title"
      onClose={onClose}
      onClick={(event) => {
        // Sólo cierra si el clic cae en el backdrop, no en el contenido.
        if (event.target === dialogRef.current) onClose()
      }}
    >
      <button
        ref={closeRef}
        type="button"
        className="project-modal-close"
        onClick={onClose}
        aria-label="Cerrar"
      >
        ×
      </button>

      <div className="project-modal-inner">
        <div className="project-modal-gallery">
          <div className="modal-main-wrap">
            <img src={project.images[safeIndex]} alt={project.title} />
          </div>
          {project.images.length > 1 && (
            <div className="modal-thumbs">
              {project.images.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={i === safeIndex ? 'modal-thumb active' : 'modal-thumb'}
                  onClick={() => setIndex(i)}
                  aria-label={`Ver fotografía ${i + 1}`}
                  aria-current={i === safeIndex}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="project-modal-info">
          <div className="proj-type">{project.type}</div>
          <h3 id="project-modal-title">{project.title}</h3>
          <p className="modal-location">{project.location}</p>
          <div className="tagrow">
            {project.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>

          <div className="project-facts">
            {projectFacts(project).map(([label, value]) => (
              <div className="project-fact" key={label}>
                <span>{label}</span>
                <b>{value}</b>
              </div>
            ))}
          </div>

          <div className="modal-copy">
            <h4>Alcance</h4>
            <p>{project.fullScope}</p>
            <h4>Proceso documentado</h4>
            <p>{project.process}</p>
          </div>
        </div>
      </div>
    </dialog>
  )
}
