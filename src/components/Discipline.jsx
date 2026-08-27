import Reveal from './Reveal'
import { useOpenProject } from './ProjectModalProvider'
import './Discipline.css'

// Bloque reutilizable para las secciones de BIM (oscura) e ingeniería
// eléctrica (clara, con las imágenes primero).
//
// El cuerpo del texto cambia según los datos: BIM usa los bullets numerados y
// eléctrica la cuadrícula de servicios con su botón de ficha. `children` se
// pinta después de la cuadrícula, dentro del mismo .wrap: ahí van el caso
// destacado y el portafolio BIM, y la evidencia de la sección eléctrica.
export default function Discipline({ data, light = false, imagesFirst = false, children }) {
  const openProject = useOpenProject()

  const copy = (
    <Reveal key="copy">
      <div className="eyebrow">{data.eyebrow}</div>
      <h2 className="section-title">{data.title}</h2>
      <p className="lead">{data.lead}</p>

      {data.bullets && (
        <div className="bullets">
          {data.bullets.map((bullet) => (
            <div className="bullet" key={bullet.num}>
              <i>{bullet.num}</i>
              <div>
                <strong>{bullet.title}</strong>
                <span>{bullet.text}</span>
              </div>
            </div>
          ))}
        </div>
      )}

      {data.services && (
        <>
          <div className="elect-services">
            {data.services.map((service) => (
              <div className="elect-service" key={service.title}>
                <b>{service.title}</b>
                <span>{service.text}</span>
              </div>
            ))}
          </div>
          {data.moreProjectId && (
            <div className="elect-more">
              <button
                className="more-btn"
                type="button"
                onClick={() => openProject(data.moreProjectId)}
                aria-haspopup="dialog"
                aria-label={`Ver ficha de ${data.title}`}
              >
                More <span aria-hidden="true">→</span>
              </button>
            </div>
          )}
        </>
      )}
    </Reveal>
  )

  const visuals = (
    <Reveal className="visual-grid" key="visuals">
      {data.images.map((src, index) => (
        <div
          className={index === 0 ? 'vimg tall' : 'vimg'}
          key={src}
          style={{ backgroundImage: `url('${src}')` }}
        />
      ))}
    </Reveal>
  )

  return (
    <section className={light ? 'discipline light' : 'discipline'} id={data.id}>
      <div className="wrap">
        <div className="discipline-grid">{imagesFirst ? [visuals, copy] : [copy, visuals]}</div>
        {children}
      </div>
    </section>
  )
}
