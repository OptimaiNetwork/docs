import type { Props } from '@theme/Admonition/Icon/Danger'
import { type ReactNode } from 'react'

export default function AdmonitionIconDanger(props: Props): ReactNode {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none" {...props}>
      <path
        d="M8.5 15C9.16304 15 9.79893 14.7366 10.2678 14.2678C10.7366 13.7989 11 13.163 11 12.5C11 11.12 10.5 10.5 10 9.5C8.928 7.357 9.776 5.446 12 3.5C12.5 6 14 8.4 16 10C18 11.6 19 13.5 19 15.5C19 16.4193 18.8189 17.3295 18.4672 18.1788C18.1154 19.0281 17.5998 19.7997 16.9497 20.4497C16.2997 21.0998 15.5281 21.6154 14.6788 21.9672C13.8295 22.3189 12.9193 22.5 12 22.5C11.0807 22.5 10.1705 22.3189 9.32122 21.9672C8.47194 21.6154 7.70026 21.0998 7.05025 20.4497C6.40024 19.7997 5.88463 19.0281 5.53284 18.1788C5.18106 17.3295 5 16.4193 5 15.5C5 14.347 5.433 13.206 6 12.5C6 13.163 6.26339 13.7989 6.73223 14.2678C7.20107 14.7366 7.83696 15 8.5 15Z"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}
