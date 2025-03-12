import { Details as DetailsGeneric } from '@docusaurus/theme-common/Details'
import type { Props } from '@theme/Details'
import clsx from 'clsx'
import { type ReactNode } from 'react'

import styles from './styles.module.scss'

// Should we have a custom details/summary comp in Infima instead of reusing
// alert classes?
const InfimaClasses = 'alert alert--info'

export default function Details({ ...props }: Props): ReactNode {
  return <DetailsGeneric {...props} className={clsx(styles.details, props.className)} />
}
