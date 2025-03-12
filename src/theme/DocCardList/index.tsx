import { filterDocCardListItems, useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client'
import DocCard from '@theme/DocCard'
import type { Props } from '@theme/DocCardList'
import clsx from 'clsx'
import { type ReactNode } from 'react'
import styles from './styles.module.scss'

function DocCardListForCurrentSidebarCategory({ className }: Props) {
  const category = useCurrentSidebarCategory()
  return <DocCardList items={category.items} className={className} />
}

export default function DocCardList(props: Props): ReactNode {
  const { items, className } = props
  if (!items) {
    return <DocCardListForCurrentSidebarCategory {...props} />
  }
  const filteredItems = filterDocCardListItems(items)
  return (
    <section className={clsx(styles.container, className)}>
      {filteredItems.map((item, index) => (
        <article key={index} className={styles.article}>
          <DocCard item={item} />
        </article>
      ))}
    </section>
  )
}
