import { useCurrentSidebarCategory } from '@docusaurus/plugin-content-docs/client'
import { PageMetadata } from '@docusaurus/theme-common'
import useBaseUrl from '@docusaurus/useBaseUrl'
import DocBreadcrumbs from '@theme/DocBreadcrumbs'
import DocCardList from '@theme/DocCardList'
import type { Props } from '@theme/DocCategoryGeneratedIndexPage'
import DocPaginator from '@theme/DocPaginator'
import DocVersionBadge from '@theme/DocVersionBadge'
import DocVersionBanner from '@theme/DocVersionBanner'
import Heading from '@theme/Heading'
import { type ReactNode } from 'react'

import styles from './styles.module.css'

function DocCategoryGeneratedIndexPageMetadata({ categoryGeneratedIndex }: Props): ReactNode {
  return (
    <PageMetadata
      title={categoryGeneratedIndex.title}
      description={categoryGeneratedIndex.description}
      keywords={categoryGeneratedIndex.keywords}
      // TODO `require` this?
      image={useBaseUrl(categoryGeneratedIndex.image)}
    />
  )
}

function DocCategoryGeneratedIndexPageContent({ categoryGeneratedIndex }: Props): ReactNode {
  const category = useCurrentSidebarCategory()
  return (
    <div className={styles.generatedIndexPage}>
      <DocVersionBanner />
      <DocBreadcrumbs />
      <DocVersionBadge />
      <header>
        <Heading as="h1" className={styles.title}>
          {categoryGeneratedIndex.title}
        </Heading>
        {categoryGeneratedIndex.description && <p>{categoryGeneratedIndex.description}</p>}
      </header>
      <article className={styles.article}>
        <DocCardList items={category.items} className={styles.list} />
      </article>
      <footer className={styles.footer}>
        <DocPaginator
          previous={categoryGeneratedIndex.navigation.previous}
          next={categoryGeneratedIndex.navigation.next}
        />
      </footer>
    </div>
  )
}

export default function DocCategoryGeneratedIndexPage(props: Props): ReactNode {
  return (
    <>
      <DocCategoryGeneratedIndexPageMetadata {...props} />
      <DocCategoryGeneratedIndexPageContent {...props} />
    </>
  )
}
