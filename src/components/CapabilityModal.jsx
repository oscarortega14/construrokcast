import { useEffect, useRef } from 'react'
import './CapabilityModal.css'

// Usa <dialog> nativo: aporta gratis el atrapado de foco, el cierre con Escape
// y el backdrop, sin dependencias externas.
export default function CapabilityModal({ capability, onClose }) {
  const dialogRef = useRef(null)
  const closeRef = useRef(null)
  const open = Boolean(capability)

  useEffect(() => {
    const dialog = dialogRef.current
    if (!dialog) return

    if (open && !dialog.open) {
      dialog.showModal()
      // showModal() enfocaría .capmodal-inner, que al ser contenedor con scroll
      // recibe el anillo de foco del navegador. React no emite el atributo
      // autofocus (llama a .focus()), así que hay que hacerlo a mano.
      closeRef.current?.focus()
    }
    if (!open && dialog.open) dialog.close()
  }, [open])

  // showModal() no bloquea el scroll del body en todos los navegadores.
  useEffect(() => {
    if (!open) return
    const previous = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = previous
    }
  }, [open])

  if (!capability) return null

  return (
    <dialog
      ref={dialogRef}
      className="capmodal"
      aria-labelledby="capmodal-title"
      onClose={onClose}
      onClick={(event) => {
        // Sólo cierra si el clic cae en el backdrop, no en el contenido.
        if (event.target === dialogRef.current) onClose()
      }}
    >
      <div className="capmodal-inner">
        <button
          ref={closeRef}
          type="button"
          className="capmodal-close"
          onClick={onClose}
          aria-label="Cerrar"
        >
          ✕
        </button>

        <header className="capmodal-head">
          <span className="capmodal-num">{capability.num}</span>
          <h3 id="capmodal-title">{capability.title}</h3>
          <p className="capmodal-intro">{capability.intro}</p>
        </header>

        <div className="capmodal-cols">
          <section>
            <div className="capmodal-label">Alcance</div>
            <ul className="capmodal-list">
              {capability.scope.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
          <section>
            <div className="capmodal-label">Entregables</div>
            <ul className="capmodal-list">
              {capability.deliverables.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>
        </div>

        {capability.note && <p className="capmodal-note">{capability.note}</p>}

        <a className="btn primary capmodal-cta" href="#contacto" onClick={onClose}>
          Consultar por esta capacidad →
        </a>
      </div>
    </dialog>
  )
}
