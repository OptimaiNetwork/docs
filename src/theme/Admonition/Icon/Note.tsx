import type { Props } from '@theme/Admonition/Icon/Note'
import { type ReactNode } from 'react'

export default function AdmonitionIconNote(props: Props): ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M12 15.2V12M12 8.8H12.008M20 12C20 16.4183 16.4183 20 12 20C7.58172 20 4 16.4183 4 12C4 7.58172 7.58172 4 12 4C16.4183 4 20 7.58172 20 12Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
