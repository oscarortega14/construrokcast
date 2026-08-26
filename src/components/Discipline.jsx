import Reveal from './Reveal'
import './Discipline.css'

// Bloque reutilizable para las secciones de BIM (oscura) e ingeniería
// eléctrica (clara, con las imágenes primero).
export default function Discipline({ data, light = false, imagesFirst = false }) {
  const copy = (
    <Reveal key="copy">
      <div className="eyebrow">{data.eyebrow}</div>
      <h2 className="section-title">{data.title}</h2>
      <p className="lead">{data.lead}</p>
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
      </div>
    </section>
  )
}
