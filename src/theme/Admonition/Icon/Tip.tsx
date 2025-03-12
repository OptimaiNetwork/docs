import type { Props } from '@theme/Admonition/Icon/Tip'
import { type ReactNode } from 'react'

export default function AdmonitionIconTip(props: Props): ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M15 14.5C15.2 13.5 15.7 12.8 16.5 12C17.5 11.1 18 9.8 18 8.5C18 6.9087 17.3679 5.38258 16.2426 4.25736C15.1174 3.13214 13.5913 2.5 12 2.5C10.4087 2.5 8.88258 3.13214 7.75736 4.25736C6.63214 5.38258 6 6.9087 6 8.5C6 9.5 6.2 10.7 7.5 12C8.2 12.7 8.8 13.5 9 14.5M9 18.5H15M10 22.5H14"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
