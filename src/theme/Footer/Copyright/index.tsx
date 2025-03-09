import type { Props } from '@theme/Footer/Copyright'
import { type ReactNode } from 'react'

export default function FooterCopyright({ copyright }: Props): ReactNode {
  return (
    <div
      className="footer__copyright"
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: copyright }}
    />
  )
}
