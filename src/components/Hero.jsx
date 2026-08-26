import Reveal from './Reveal'
import './Hero.css'

const TAGS = ['Construcción y adecuaciones', 'Ingeniería multidisciplinaria', 'Operación regional']

export default function Hero() {
  return (
    <section className="hero" id="inicio">
      <div className="wrap">
        <Reveal className="hero-copy">
          <div className="eyebrow">CONSTRU ROKCAST S.A.S. · PASTO, NARIÑO</div>
          <h1>
            Construcción <span>respaldada por ingeniería y tecnología.</span>
          </h1>
          <p>
            Integramos ejecución de obra, mantenimiento, ingeniería especializada, BIM y capacidad
            territorial para acompañar infraestructura comercial y multisede.
          </p>
          <div className="hero-actions">
            <a className="btn primary" href="#cobertura">
              Explorar cobertura →
            </a>
            <a className="btn" href="#experiencia">
              Ver experiencia
            </a>
          </div>
          <div className="hero-tags">
            {TAGS.map((tag) => (
              <span className="hero-tag" key={tag}>
                <i />
                {tag}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
