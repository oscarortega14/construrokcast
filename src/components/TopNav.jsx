import { useMemo } from 'react'
import { NAV_LINKS } from '../data/content'
import { useActiveSection } from '../hooks/useActiveSection'
import './TopNav.css'

export default function TopNav() {
  const ids = useMemo(() => NAV_LINKS.map((link) => link.href.slice(1)), [])
  const active = useActiveSection(ids)

  return (
    <header className="topnav">
      <div className="navinner">
        <a className="brand" href="#inicio">
          <span className="mark">CR</span>
          <span>
            <strong>CONSTRU ROKCAST S.A.S.</strong>
            <small>CONSTRUCCIÓN · INGENIERÍA · TECNOLOGÍA</small>
          </span>
        </a>
        <nav id="nav">
          {NAV_LINKS.map((link) => {
            const classes = [link.cta && 'navcta', active === link.href.slice(1) && 'active']
              .filter(Boolean)
              .join(' ')
            return (
              <a key={link.href} href={link.href} className={classes || undefined}>
                {link.label}
              </a>
            )
          })}
        </nav>
      </div>
    </header>
  )
}
