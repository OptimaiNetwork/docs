import type { Props } from '@theme/Footer/Layout'
import { type ReactNode } from 'react'

export default function FooterLayout({ style, links, logo, copyright }: Props): ReactNode {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__logo-wrapper">{logo}</div>
        {links}
        {copyright}
      </div>
    </footer>
  )
}
