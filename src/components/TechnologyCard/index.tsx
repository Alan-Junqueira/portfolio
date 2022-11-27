import styles from './styles.module.css';

import { HtmlLogo } from '../Svgs/Languages/HtmlLogo';
import { CssLogo } from '../Svgs/Languages/CssLogo';
import { JavascriptLogo } from '../Svgs/Languages/JavascriptLogo';
import { GitLogo } from '../Svgs/Languages/GitLogo';
import { ReactLogo } from '../Svgs/Languages/ReactLogo';
import { TypescriptLogo } from '../Svgs/Languages/TypescriptLogo';
import { NextLogo } from '../Svgs/Languages/NextLogo';
import { NodeLogo } from '../Svgs/Languages/NodeLogo';
import { GitHubLogo } from '../Svgs/Languages/GitHubLogo';
import { SassLogo } from '../Svgs/Languages/SassLogo';

type Props = {
  label: string;
  color: string;
  backgroundColor?: string;
};

export const TechnologyCard = ({ label, color, backgroundColor }: Props) => {
  return (
    <>
      {label === 'html' && (
        <div style={{ backgroundColor }} className={styles.html}>
          <HtmlLogo />
          <span style={{ color }}>HTML</span>
        </div>
      )}
      {label === 'css' && (
        <div style={{ backgroundColor }} className={styles.css}>
          <CssLogo />
          <span style={{ color }}>CSS</span>
        </div>
      )}

      {label === 'javascript' && (
        <div style={{ backgroundColor }} className={styles.js}>
          <JavascriptLogo />
          <span style={{ color }}>Javascript</span>
        </div>
      )}

      {label === 'git' && (
        <div style={{ backgroundColor }} className={styles.git}>
          <GitLogo />
          <span style={{ color }}>Git</span>
        </div>
      )}

      {label === 'reactjs' && (
        <div style={{ backgroundColor }} className={styles.react}>
          <ReactLogo />
          <span style={{ color }}>React Js</span>
        </div>
      )}

      {label === 'typescript' && (
        <div style={{ backgroundColor }} className={styles.ts}>
          <TypescriptLogo />
          <span style={{ color }}>Typescript</span>
        </div>
      )}

      {label === 'nextjs' && (
        <div style={{ backgroundColor }} className={styles.next}>
          <NextLogo />
          <span style={{ color }}>Next Js</span>
        </div>
      )}

      {label === 'nodejs' && (
        <div style={{ backgroundColor }} className={styles.node}>
          <NodeLogo />
          <span style={{ color }}>Node Js</span>
        </div>
      )}

      {label === 'github' && (
        <div style={{ backgroundColor }} className={styles.gh}>
          <GitHubLogo />
          <span style={{ color }}>Git Hub</span>
        </div>
      )}

      {label === 'sass' && (
        <div style={{ backgroundColor }} className={styles.sass}>
          <SassLogo />
          <span style={{ color }}>Sass</span>
        </div>
      )}
    </>
  );
};
