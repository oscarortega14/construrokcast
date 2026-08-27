import Reveal from './Reveal'
import { useOpenProject } from './ProjectModalProvider'
import { BIM_HIGHLIGHT } from '../data/content'
import './BimHighlight.css'

// Caso destacado que cierra la parte superior de la sección BIM.
export default function BimHighlight() {
  const openProject = useOpenProject()
  const data = BIM_HIGHLIGHT

  return (
    <Reveal className="bim-highlight">
      <div className="eyebrow">{data.eyebrow}</div>
      <div className="bim-highlight-card">
        <div className="bim-highlight-media">
          <img className="proj-main" src={data.main.src} alt={data.main.alt} />
          <div className="proj-side">
            {data.side.map((image) => (
              <img className="proj-small" key={image.src} src={image.src} alt={image.alt} />
            ))}
          </div>
        </div>
        <div className="bim-highlight-copy">
          <div className="proj-type">{data.type}</div>
          <h3>{data.title}</h3>
          <p>{data.text}</p>
          <div className="bim-kpis">
            {data.kpis.map((kpi) => (
              <div className="bim-kpi" key={kpi.title}>
                <b>{kpi.title}</b>
                <span>{kpi.text}</span>
              </div>
            ))}
          </div>
          <div className="tagrow">
            {data.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
          <div className="project-actions">
            <button
              className="more-btn"
              type="button"
              onClick={() => openProject(data.projectId)}
              aria-haspopup="dialog"
              aria-label={`Ver ficha de ${data.title}`}
            >
              More <span aria-hidden="true">→</span>
            </button>
          </div>
        </div>
      </div>
    </Reveal>
  )
}
