import "./App.css";
import { Separator, Tabs, Toolbar } from "@base-ui/react";
import { useMediaQuery } from "@base-ui/react/unstable-use-media-query";
import {
  background,
  profile,
  projects,
  stack,
  type BackgroundEntry,
  type Project,
} from "./data";
import { Blobs, ButtonSparkles, SparkleTrail, StarIcon } from "./effects";

function Hero() {
  return (
    <header className="hero">
      <p className="eyebrow-hero">
        {profile.title} · {profile.location}
      </p>
      <div className="hero-title-row">
        <h1>{profile.name}</h1>
        <span className="twinkle" aria-hidden="true">
          <StarIcon size={28} />
        </span>
      </div>
      <div className="hero-bio">
        <p>{profile.bio[0]}</p>
        <p>
          I turn Figma mockups into React and TypeScript apps that are{" "}
          <mark>
            pretty <em>and</em> properly built
          </mark>
          .
        </p>
      </div>
      <Toolbar.Root className="btn-container" aria-label="Contact and links">
        <Toolbar.Link className="btn" href={`mailto:${profile.email}`}>
          Contact me
          <ButtonSparkles />
        </Toolbar.Link>
        <Toolbar.Link
          className="btn"
          href={profile.github}
          target="_blank"
          rel="noreferrer"
        >
          GitHub
          <ButtonSparkles />
        </Toolbar.Link>
        <Toolbar.Link
          className="btn"
          href={`${import.meta.env.BASE_URL}${profile.cvFile}`}
          download
        >
          Download CV
          <ButtonSparkles />
        </Toolbar.Link>
      </Toolbar.Root>
    </header>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card">
      <h3>{project.title}</h3>
      <p className="mono stack-line">{project.stack.join(" · ")}</p>
      {project.intro && <p className="card-intro">{project.intro}</p>}
      <ul>
        {project.bullets.map((b) => (
          <li key={b}>{b}</li>
        ))}
      </ul>
      <Toolbar.Root
        className="card-actions"
        aria-label={`${project.title} links`}
      >
        {project.links.map((link) => (
          <Toolbar.Link
            key={link.href}
            className="text-link"
            href={link.href}
            target="_blank"
            rel="noreferrer"
          >
            {link.label} →
          </Toolbar.Link>
        ))}
      </Toolbar.Root>
    </article>
  );
}

function Projects() {
  return (
    <section className="projects">
      <h2>Things I’ve built</h2>
      <div className="cards">
        {projects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}

function Toolkit() {
  return (
    <aside className="aside">
      <h2>My toolkit</h2>
      <dl className="toolkit">
        {stack.map((row) => (
          <div className="toolkit-group" key={row.label}>
            <Separator className="rule" />
            <dt className="label">{row.label}</dt>
            <dd>{row.items.join(", ")}</dd>
          </div>
        ))}
      </dl>
    </aside>
  );
}

const backgroundHeadings: Record<keyof typeof background, string> = {
  Education: "Education",
  Experience: "Experience",
  Community: "Volunteering",
};

function Entry({ entry }: { entry: BackgroundEntry }) {
  return (
    <div className="entry">
      <Separator className="rule" />
      <p className="label">{entry.meta}</p>
      <p className="entry-title">{entry.title}</p>
      {entry.org && <p className="entry-org">{entry.org}</p>}
      {entry.text?.map((t) => (
        <p className="entry-text" key={t.body}>
          {t.label && <strong>{t.label} </strong>}
          {t.body}
        </p>
      ))}
    </div>
  );
}

const MOBILE = "(max-width: 720px)";

function Background() {
  const keys = Object.keys(background) as (keyof typeof background)[];
  const mobile = useMediaQuery(MOBILE, { noSsr: true });

  if (mobile) {
    // Stacked sections with headings instead of tabs on small screens.
    return (
      <div className="background">
        {keys.map((key) => (
          <section className="background-section" key={key}>
            <h2>{backgroundHeadings[key]}</h2>
            <div className="tab-panel">
              {background[key].map((entry) => (
                <Entry key={entry.title} entry={entry} />
              ))}
            </div>
          </section>
        ))}
      </div>
    );
  }

  return (
    <Tabs.Root className="background" defaultValue={keys[0]}>
      <Tabs.List className="tabs-list" aria-label="Background">
        {keys.map((key) => (
          <Tabs.Tab className="tab" value={key} key={key}>
            {backgroundHeadings[key]}
            <span className="tab-star twinkle" aria-hidden="true">
              <StarIcon size={16} />
            </span>
          </Tabs.Tab>
        ))}
      </Tabs.List>
      {keys.map((key) => (
        <Tabs.Panel className="tab-panel" value={key} key={key}>
          {background[key].map((entry) => (
            <Entry key={entry.title} entry={entry} />
          ))}
        </Tabs.Panel>
      ))}
    </Tabs.Root>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <Separator className="rule" />
      <p>Made with React, TypeScript and a little glitter.</p>
    </footer>
  );
}

export default function App() {
  return (
    <main className="page">
      <Blobs />
      <SparkleTrail />
      <Hero />
      <div className="columns">
        <Projects />
        <Toolkit />
      </div>
      <Background />
      <Footer />
    </main>
  );
}
