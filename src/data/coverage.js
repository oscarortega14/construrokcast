// Puntos de cobertura operativa. `radius` está en kilómetros y se dibuja
// como una elipse sobre la proyección equirectangular del mapa.
export const COVERAGE_POINTS = [
  { department: 'Nariño', city: 'Pasto', lat: 1.2136, lng: -77.2811, radius: 150 },
  { department: 'Nariño', city: 'Ipiales', lat: 0.8302, lng: -77.6496, radius: 95 },
  { department: 'Valle del Cauca', city: 'Cali', lat: 3.4516, lng: -76.532, radius: 170 },
  { department: 'Atlántico', city: 'Barranquilla', lat: 10.9685, lng: -74.7813, radius: 170 },
  { department: 'Bolívar', city: 'Cartagena', lat: 10.391, lng: -75.4794, radius: 130 },
  { department: 'Córdoba', city: 'Montería', lat: 8.75, lng: -75.8814, radius: 130 },
  { department: 'Sucre', city: 'Sincelejo', lat: 9.3047, lng: -75.3978, radius: 75 },
  { department: 'Bogotá D.C.', city: 'Bogotá', lat: 4.711, lng: -74.0721, radius: 180 },
  { department: 'Meta', city: 'Villavicencio', lat: 4.142, lng: -73.6266, radius: 150 },
  { department: 'Putumayo', city: 'Mocoa', lat: 1.1528, lng: -76.6521, radius: 120 },
  { department: 'Antioquia', city: 'Medellín', lat: 6.2442, lng: -75.5812, radius: 160 },
  { department: 'Cauca', city: 'Popayán', lat: 2.4448, lng: -76.6147, radius: 90 },
  { department: 'Santander', city: 'Bucaramanga', lat: 7.1193, lng: -73.1227, radius: 120 },
]

export const DEFAULT_DEPARTMENT = 'Nariño'

// Encuadre del SVG de Colombia usado como fondo del geovisor.
export const MAP = {
  width: 512,
  height: 579,
  north: 16.594,
  south: -4.609,
  west: -85.056,
  east: -66.401,
}

const normalize = (value) =>
  String(value || '')
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .toUpperCase()

export const sameDepartment = (a, b) => normalize(a) === normalize(b)

export const DEPARTMENTS = [...new Set(COVERAGE_POINTS.map((p) => p.department))].sort((a, b) =>
  a.localeCompare(b, 'es'),
)

export function project(lng, lat) {
  return [
    ((lng - MAP.west) / (MAP.east - MAP.west)) * MAP.width,
    ((MAP.north - lat) / (MAP.north - MAP.south)) * MAP.height,
  ]
}

// Convierte el radio en km a una elipse en coordenadas del SVG, corrigiendo
// la convergencia de meridianos con el coseno de la latitud.
export function toEllipse(point) {
  const latRad = (point.lat * Math.PI) / 180
  const dLat = point.radius / 111.32
  const dLng = point.radius / (111.32 * Math.max(0.22, Math.cos(latRad)))
  const [x, y] = project(point.lng, point.lat)
  const [x2] = project(point.lng + dLng, point.lat)
  const [, y2] = project(point.lng, point.lat + dLat)
  return { x, y, rx: Math.abs(x2 - x), ry: Math.abs(y2 - y) }
}
