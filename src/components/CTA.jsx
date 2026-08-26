import Reveal from './Reveal'
import { CONTACT } from '../data/content'
import './CTA.css'

export default function CTA() {
  return (
    <section className="cta" id="contacto">
      <Reveal className="wrap">
        <div className="eyebrow">VINCULACIÓN COMO PROVEEDOR</div>
        <h2>Listos para demostrar capacidad, empezando por la ejecución.</h2>
        <p>
          Buscamos participar en procesos de evaluación y vinculación para servicios de
          infraestructura, mantenimiento, adecuaciones e ingeniería, construyendo confianza desde
          intervenciones concretas y escalando con resultados.
        </p>
        <a className="btn primary" href={`mailto:${CONTACT.email}`}>
          Información para vinculación →
        </a>
        <div className="contactline">
          <span>
            <b>Tel.</b> <a href={`tel:+57${CONTACT.phone.replace(/\s/g, '')}`}>{CONTACT.phone}</a>
          </span>
          <span>
            <b>Correo</b> <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
          </span>
          <span>
            <b>Base</b> {CONTACT.base}
          </span>
        </div>
      </Reveal>
    </section>
  )
}
