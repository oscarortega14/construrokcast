import { createContext, useCallback, useContext, useState } from 'react'
import ProjectModal from './ProjectModal'

// El modal de proyecto se abre desde cuatro sitios distintos del árbol
// (Proyectos, el caso destacado BIM, el portafolio BIM y el botón de la sección
// eléctrica). Igual que en el original hay un único modal montado una sola vez;
// el contexto evita pasar el callback a mano por todas las secciones.
const OpenProjectContext = createContext(() => {})

export const useOpenProject = () => useContext(OpenProjectContext)

export default function ProjectModalProvider({ children }) {
  const [projectId, setProjectId] = useState(null)
  const openProject = useCallback((id) => setProjectId(id), [])

  return (
    <OpenProjectContext.Provider value={openProject}>
      {children}
      <ProjectModal projectId={projectId} onClose={() => setProjectId(null)} />
    </OpenProjectContext.Provider>
  )
}
