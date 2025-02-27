import type { ReactNode } from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className={styles.videoContainer}>
        <video autoPlay muted loop playsInline className={styles.fullscreenVideo}>
          <source src={require('@site/static/videos/LP.webm').default} type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>
      <div className={styles.contentFrame}>
        <Heading as="h1" className={styles.heroTitle}>
          OptimAI Network
        </Heading>
        <p className={styles.heroSubtitle}>Mine Data. Fuel AI. Earn Rewards.</p>
        <p className={styles.heroDescription}>
          L2 DePIN GenAI Reinforcement Data Network.
        </p>
        <div className={styles.buttons}>
          <Link className={clsx("button", styles.customButton)} to="/docs/">
            Getting Started
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout title={`Hello from ${siteConfig.title}`} description="Welcome to OptimAI Network Documentation!">
      <HomepageHeader />
      <main>
        {/* <HomepageFeatures /> */}
      </main>
    </Layout>
  );
}
