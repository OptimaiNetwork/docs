import Translate, { translate } from '@docusaurus/Translate'
import type { Props } from '@theme/DocPaginator'
import PaginatorNavLink from '@theme/PaginatorNavLink'
import { type ReactNode } from 'react'

export default function DocPaginator(props: Props): ReactNode {
  const { previous, next } = props
  return (
    <nav
      className="pagination-nav"
      aria-label={translate({
        id: 'theme.docs.paginator.navAriaLabel',
        message: 'Docs pages',
        description: 'The ARIA label for the docs pagination',
      })}
    >
      {previous && (
        <PaginatorNavLink
          {...previous}
          subLabel={
            <Translate id="theme.docs.paginator.previous" description="The label used to navigate to the previous doc">
              Previous
            </Translate>
          }
        />
      )}
      {next && (
        <PaginatorNavLink
          {...next}
          subLabel={
            <Translate id="theme.docs.paginator.next" description="The label used to navigate to the next doc">
              Next
            </Translate>
          }
          isNext
        />
      )}
    </nav>
  )
}
