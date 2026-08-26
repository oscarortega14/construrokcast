import { useMemo, useState } from 'react'
import Reveal from './Reveal'
import {
  COVERAGE_POINTS,
  DEFAULT_DEPARTMENT,
  DEPARTMENTS,
  MAP,
  sameDepartment,
  toEllipse,
} from '../data/coverage'
import './Coverage.css'

export default function Coverage() {
  const [department, setDepartment] = useState(DEFAULT_DEPARTMENT)

  const cities = useMemo(
    () => COVERAGE_POINTS.filter((p) => sameDepartment(p.department, department)),
    [department],
  )

  const shapes = useMemo(
    () =>
      COVERAGE_POINTS.map((point) => ({
        point,
        ellipse: toEllipse(point),
        active: sameDepartment(point.department, department),
      })),
    [department],
  )

  return (
    <section className="coverage" id="cobertura">
      <div className="wrap">
        <div className="eyebrow">04 · COBERTURA</div>
        <h2 className="section-title">
          Presencia territorial visible. Capacidad regional en expansión.
        </h2>
        <p className="lead coverage-lead">
          El geovisor presenta los puntos de cobertura disponibles y sus zonas de alcance, sin
          exponer información interna de personal, proveedores o disponibilidad operativa.
        </p>
        <div className="coverage-grid">
          <Reveal as="aside" className="cov-panel">
            <label className="fieldlabel" htmlFor="deptSelect">
              Explorar territorio
            </label>
            <select
              className="covselect"
              id="deptSelect"
              value={department}
              onChange={(event) => setDepartment(event.target.value)}
            >
              {DEPARTMENTS.map((name) => (
                <option key={name}>{name}</option>
              ))}
            </select>
            <div className="cov-detail">
              <div className="dept">{department}</div>
              <div className="status">
                <i />
                Zona de cobertura
              </div>
              <div className="fieldlabel">Puntos visibles</div>
              <div className="citychips">
                {cities.map((city) => (
                  <span className="citychip" key={city.city}>
                    {city.city}
                  </span>
                ))}
              </div>
            </div>
            <div className="cov-note">
              El mapa mantiene una lectura comercial: muestra cobertura geográfica y radios de
              atención sin publicar especialidades individuales, cantidades de personal, estados de
              agenda ni tiempos comprometidos.
            </div>
          </Reveal>

          <Reveal className="mapcard">
            <div className="map-overlay">
              <strong>COBERTURA OPERATIVA · COLOMBIA</strong>
              <span>Seleccione un punto o un departamento</span>
            </div>
            <svg
              id="coverageMap"
              viewBox={`0 0 ${MAP.width} ${MAP.height}`}
              role="img"
              aria-label="Mapa de Colombia con puntos y zonas de cobertura"
            >
              <image
                x="0"
                y="0"
                width={MAP.width}
                height={MAP.height}
                preserveAspectRatio="none"
                href="/img/colombia-map.svg"
              />
              <g id="radii">
                {shapes.map(({ point, ellipse, active }) => (
                  <ellipse
                    key={point.city}
                    cx={ellipse.x}
                    cy={ellipse.y}
                    rx={ellipse.rx}
                    ry={ellipse.ry}
                    fill={active ? 'rgba(198,123,60,.24)' : 'rgba(198,123,60,.09)'}
                    stroke={active ? '#c67b3c' : 'rgba(198,123,60,.44)'}
                    strokeWidth={active ? 1.6 : 1}
                    strokeDasharray="4 4"
                  />
                ))}
              </g>
              <g id="points">
                {shapes.map(({ point, ellipse, active }) => (
                  <g
                    key={point.city}
                    transform={`translate(${ellipse.x} ${ellipse.y})`}
                    className="map-point"
                    role="button"
                    tabIndex={0}
                    aria-label={`${point.city}, ${point.department}`}
                    onClick={() => setDepartment(point.department)}
                    onKeyDown={(event) => {
                      if (event.key === 'Enter' || event.key === ' ') {
                        event.preventDefault()
                        setDepartment(point.department)
                      }
                    }}
                  >
                    {active && (
                      <circle r="7" fill="none" stroke="#c67b3c" strokeWidth="1" opacity=".75">
                        <animate
                          attributeName="r"
                          values="7;13;7"
                          dur="2.4s"
                          repeatCount="indefinite"
                        />
                        <animate
                          attributeName="opacity"
                          values=".7;0;.7"
                          dur="2.4s"
                          repeatCount="indefinite"
                        />
                      </circle>
                    )}
                    <circle
                      r={active ? 8 : 6}
                      fill={active ? 'rgba(198,123,60,.18)' : 'rgba(255,255,255,.65)'}
                    />
                    <circle
                      r={active ? 4.8 : 3.8}
                      fill="#c67b3c"
                      stroke="#fff"
                      strokeWidth="1.4"
                    />
                    <text x="7" y="-5" className="map-label">
                      {point.city}
                    </text>
                  </g>
                ))}
              </g>
            </svg>
            <div className="map-legend">
              <i />
              Zona de cobertura
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
