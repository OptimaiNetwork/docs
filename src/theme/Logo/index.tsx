import Link from '@docusaurus/Link'
import { useThemeConfig } from '@docusaurus/theme-common'
import useBaseUrl from '@docusaurus/useBaseUrl'
import { useMediaQuery } from '@site/src/hooks/useMediaQuery'
import type { Props } from '@theme/Logo'
import { type ReactNode } from 'react'

function LogoThemedImage() {
  const isMobile = useMediaQuery('(max-width: 768px)')

  const mobileLogo = useBaseUrl('/img/branding/pi.svg')
  const desktopLogo = useBaseUrl('/img/branding/optimai-documentation-logo.svg')
  const source = isMobile ? mobileLogo : desktopLogo

  return <img className="navbar__logo" src={source} alt="OptimAI Documentation Logo" />
}

export default function Logo(props: Props): ReactNode {
  const {
    navbar: { logo },
  } = useThemeConfig()

  const { imageClassName, titleClassName, ...propsRest } = props
  const logoLink = useBaseUrl(logo?.href || '/')

  return (
    <Link to={logoLink} {...propsRest} {...(logo?.target && { target: logo.target })}>
      <LogoThemedImage />
    </Link>
  )
}
