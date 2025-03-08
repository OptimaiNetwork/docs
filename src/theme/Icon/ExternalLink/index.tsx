import type { Props } from '@theme/Icon/ExternalLink'
import { type ReactNode } from 'react'

import styles from './styles.module.css'

export default function IconExternalLink({ width = 13.5, height = 13.5 }: Props): ReactNode {
  return (
    <svg width={width} height={height} aria-hidden="true" viewBox="0 0 18 18" className={styles.iconExternalLink}>
      <g clip-path="url(#clip0_35_1241)">
        <path
          d="M16.5 9C16.5 10.4834 16.0601 11.9334 15.236 13.1668C14.4119 14.4001 13.2406 15.3614 11.8701 15.9291C10.4997 16.4968 8.99168 16.6453 7.53683 16.3559C6.08197 16.0665 4.7456 15.3522 3.6967 14.3033C2.64781 13.2544 1.9335 11.918 1.64411 10.4632C1.35472 9.00832 1.50325 7.50032 2.07091 6.12987C2.63856 4.75943 3.59986 3.58809 4.83323 2.76398C6.0666 1.93987 7.51664 1.5 9 1.5M16.5 1.5L9 9M16.5 1.5H12M16.5 1.5V6"
          stroke="currentColor"
          stroke-width="1.125"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_35_1241">
          <rect width="18" height="18" fill="white" />
        </clipPath>
      </defs>
    </svg>
  )
}
