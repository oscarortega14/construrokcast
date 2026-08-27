import Reveal from './Reveal'
import { ELECTRICA } from '../data/content'
import './ElectricEvidence.css'

// Cierre de la sección eléctrica: enfoque técnico y experiencia demostrada.
export default function ElectricEvidence() {
  return (
    <Reveal className="elect-evidence">
      {ELECTRICA.evidence.map((item) => (
        <div className="elect-evidence-card" key={item.title}>
          <b>{item.title}</b>
          <p>{item.text}</p>
        </div>
      ))}
    </Reveal>
  )
}
