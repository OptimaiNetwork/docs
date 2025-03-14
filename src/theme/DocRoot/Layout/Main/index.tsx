import { useDocsSidebar } from '@docusaurus/plugin-content-docs/client'
import type { Props } from '@theme/DocRoot/Layout/Main'
import clsx from 'clsx'
import { type ReactNode } from 'react'

import styles from './styles.module.scss'

export default function DocRootLayoutMain({ hiddenSidebarContainer, children }: Props): ReactNode {
  const sidebar = useDocsSidebar()
  return (
    <main
      className={clsx(styles.docMainContainer, (hiddenSidebarContainer || !sidebar) && styles.docMainContainerEnhanced)}
    >
      <div className={styles.docBackground} />
      <div className={clsx(styles.docItemWrapper)}>{children}</div>
    </main>
  )
}
