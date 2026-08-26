import Reveal from './Reveal'
import { TEAM_PROFILES } from '../data/content'
import './Team.css'

export default function Team() {
  return (
    <section className="team">
      <div className="wrap">
        <div className="team-grid">
          <Reveal>
            <div className="eyebrow">10 · EQUIPO</div>
            <h2 className="section-title">
              Una estructura multidisciplinaria, no una suma de portafolios separados.
            </h2>
            <p className="lead team-lead">
              La empresa es la protagonista. La experiencia y especialidades de sus profesionales
              respaldan la capacidad para asumir necesidades que requieren más de una disciplina.
            </p>
          </Reveal>
          <Reveal className="profiles">
            {TEAM_PROFILES.map((profile) => (
              <div className="profile" key={profile.title}>
                <b>{profile.title}</b>
                <span>{profile.text}</span>
              </div>
            ))}
          </Reveal>
        </div>
      </div>
    </section>
  )
}
