import Translate from '@docusaurus/Translate'
import type { Props } from '@theme/TOCCollapsible/CollapseButton'
import clsx from 'clsx'
import { type ReactNode } from 'react'

import styles from './styles.module.scss'

export default function TOCCollapsibleCollapseButton({ collapsed, ...props }: Props): ReactNode {
  return (
    <button
      type="button"
      {...props}
      className={clsx(
        'clean-btn',
        styles.tocCollapsibleButton,
        !collapsed && styles.tocCollapsibleButtonExpanded,
        props.className
      )}
    >
      <span>
        <Translate
          id="theme.TOCCollapsible.toggleButtonLabel"
          description="The label used by the button on the collapsible TOC component"
        >
          On this page
        </Translate>
      </span>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  )
}
