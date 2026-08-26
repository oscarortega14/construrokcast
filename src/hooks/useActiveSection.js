import { useEffect, useState } from 'react'

// Devuelve el id de la sección que ocupa la franja central del viewport,
// usada para resaltar el enlace correspondiente del menú.
export function useActiveSection(ids) {
  const [active, setActive] = useState(null)

  useEffect(() => {
    const nodes = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!nodes.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-38% 0px -55% 0px', threshold: 0 },
    )
    nodes.forEach((node) => observer.observe(node))
    return () => observer.disconnect()
  }, [ids])

  return active
}
