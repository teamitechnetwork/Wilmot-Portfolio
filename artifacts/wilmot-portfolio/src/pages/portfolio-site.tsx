import {
  affiliations,
  achievements,
  availability,
  careerDirection,
  certifications,
  communityContributions,
  competencyGroups,
  developmentApproach,
  digitalSkills,
  education,
  experience,
  interests,
  languages,
  leadershipValues,
  profile,
} from '@/content/portfolio';

const navigation = [
  { label: 'Profile', href: '#profile' },
  { label: 'Experience', href: '#experience' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'Training', href: '#certifications' },
  { label: 'Service', href: '#impact' },
];

function SectionIntro({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-intro">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

function PortfolioSite() {
  return (
    <div className="cv-portfolio" id="top">
      <a className="skip-link" href="#main">
        Skip to content
      </a>

      <header className="site-header">
        <div className="container header-inner">
          <a className="wordmark" href="#top" aria-label="Wilmot Kerkulah home">
            Wilmot Kerkulah
          </a>
          <nav className="desktop-nav" aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>
          <details className="mobile-nav">
            <summary>Menu</summary>
            <nav aria-label="Mobile navigation">
              {navigation.map((item) => (
                <a key={item.href} href={item.href} onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}>
                  {item.label}
                </a>
              ))}
              <a href="#contact" onClick={(event) => event.currentTarget.closest('details')?.removeAttribute('open')}>Contact</a>
            </nav>
          </details>
          <a className="header-contact" href="#contact">
            Contact
          </a>
        </div>
      </header>

      <main id="main">
        <section className="hero" aria-labelledby="hero-title">
          <div className="container hero-content">
            <div className="hero-copy">
              <p className="hero-location">
                {profile.location} <span aria-hidden="true">/</span> {profile.nationality}
              </p>
              <h1 id="hero-title">
                <span className="hero-name-first">Wilmot</span>
                <span className="hero-name-last"> Kerkulah</span>
              </h1>
              <p className="founder-line">Founder of iTech Network Africa</p>
              <p className="hero-headline">
                <span className="headline-muted">Community development leader,</span>
                <span className="headline-bright">
                  <span className="headline-gradient"> programme manager and ICT consultant</span>; studying data science and analytics.
                </span>
              </p>
              <p className="hero-summary">
                More than five years of experience across community development, ICT,
                education, communications and programme leadership.
              </p>
              <div className="hero-actions">
                <a className="button button-primary" href="#experience">
                  View experience
                </a>
                <a className="button button-outline" href={`mailto:${profile.contact.email}`}>
                  Get in touch
                </a>
              </div>
            </div>
            <div className="portrait-wrap">
              <div className="portrait-frame">
                <img src="/images/wilmot-kerkula.jpg" alt="Portrait of Wilmot Kerkulah" fetchPriority="high" />
              </div>
              <span className="portrait-caption">Community · Technology · Service</span>
            </div>
          </div>
        </section>

        <section className="dream-section" aria-label="A simple principle">
          <div className="container">
            <div className="dream-feature">
              <div className="dream-copy">
                <p className="eyebrow">A simple principle</p>
                <h2>Dream big.<br /><span>Start small. Act now.</span></h2>
              </div>
              <div className="dream-art">
                <img src="/images/dream-big-start-small.jpg" alt="" loading="lazy" />
              </div>
            </div>
          </div>
        </section>

        <section className="page-section" id="profile">
          <div className="container">
            <SectionIntro
              eyebrow="Professional profile"
              title="Community development, technology and service."
            />
            <div className="profile-grid">
              <div className="prose">
                {profile.summary.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <aside className="objective">
                <h3>Career objective</h3>
                <p>{profile.objective}</p>
              </aside>
            </div>
          </div>
        </section>

        <section className="page-section section-muted" id="experience">
          <div className="container">
            <SectionIntro
              eyebrow="Professional experience"
              title="Roles and responsibilities"
              description="The role descriptions below preserve the scope of work listed in the CV. Expand any role to see its responsibilities."
            />
            <div className="experience-list">
              {experience.map((item) => (
                <article className="experience-item" key={`${item.role}-${item.organization}`}>
                  <div className="experience-date">{item.dates}</div>
                  <div className="experience-body">
                    <h3>{item.role}</h3>
                    <p className="experience-organization">{item.organization}</p>
                    <p className="experience-meta">{item.location}</p>
                    <p className="experience-summary">{item.summary}</p>
                    <details>
                      <summary>Responsibilities</summary>
                      <ul>
                        {item.responsibilities.map((responsibility) => (
                          <li key={responsibility}>{responsibility}</li>
                        ))}
                      </ul>
                    </details>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="page-section" id="education">
          <div className="container">
            <SectionIntro eyebrow="Education" title="Academic qualifications" />
            <div className="education-list">
              {education.map((item) => (
                <article className="education-item" key={item.qualification}>
                  <div>
                    <h3>{item.qualification}</h3>
                    <p className="item-subtitle">{item.institution}</p>
                    <p className="item-location">{item.location}</p>
                    <p>{item.detail}</p>
                  </div>
                  <p className="item-status">{item.status}</p>
                </article>
              ))}
            </div>

            <div className="subsection">
              <h3>Languages</h3>
              <div className="simple-table">
                {languages.map((language) => (
                  <div className="simple-row language-row" key={language.name}>
                    <strong>{language.name}</strong>
                    <span>{language.level}</span>
                    <span>{language.abilities}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section section-muted" id="certifications">
          <div className="container">
            <SectionIntro
              eyebrow="Professional development"
              title="Training and certifications"
              description="Credentials and training listed in the CV."
            />
            <ul className="credential-list">
              {certifications.map((item) => (
                <li className="credential-item" key={`${item.provider}-${item.name}`}>
                  <div>
                    <h3>{item.name}</h3>
                    <p>{item.provider}</p>
                  </div>
                  <span>{item.year}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="page-section" id="skills">
          <div className="container">
            <SectionIntro
              eyebrow="Core competencies"
              title="Skills across six practice areas"
            />
            <div className="competency-grid">
              {competencyGroups.map((group) => (
                <article className="competency-group" key={group.title}>
                  <h3>{group.title}</h3>
                  <ul>
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>

            <div className="subsection">
              <h3>Computer and digital skills</h3>
              <div className="digital-skills-grid">
                {digitalSkills.map((group) => (
                  <article className="digital-skill-group" key={group.title}>
                    <h4>{group.title}</h4>
                    <ul>
                      {group.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="page-section section-muted" id="impact">
          <div className="container">
            <SectionIntro
              eyebrow="Selected achievements"
              title="Work and contributions"
            />
            <ul className="achievement-list">
              {achievements.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        </section>

        <section className="page-section" id="service">
          <div className="container">
            <SectionIntro
              eyebrow="Professional affiliations"
              title="Organisations and memberships"
            />
            <ul className="affiliation-list">
              {affiliations.map((item) => (
                <li key={item.organization}>
                  <div className="affiliation-organization">
                    <strong>{item.organization}</strong>
                    <small>{item.location}</small>
                  </div>
                  <span>{item.role}</span>
                </li>
              ))}
            </ul>

            <div className="subsection">
              <SectionIntro eyebrow="Community service" title="Civic and volunteer work" />
              <ul className="plain-list">
                {communityContributions.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>

            <div className="subsection">
              <SectionIntro eyebrow="Leadership" title="Values and approach" />
              <div className="values-grid">
                {leadershipValues.map((value) => (
                  <article className="value-item" key={value.title}>
                    <h3>{value.title}</h3>
                    <p>{value.detail}</p>
                  </article>
                ))}
              </div>
              <h3 className="subsection-title">Approach to community development</h3>
              <ul className="plain-list">
                {developmentApproach.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="page-section section-muted" id="career">
          <div className="container career-grid">
            <div>
              <SectionIntro eyebrow="Career direction" title="Areas of future focus" />
              <ul className="plain-list">
                {careerDirection.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
            <div>
              <SectionIntro eyebrow="Interests" title="Outside the role" />
              <ul className="plain-list">
                {interests.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
          <div className="container availability">
            <h3>Availability and work preferences</h3>
            <div className="availability-grid">
              {availability.map((item) => (
                <div className="availability-item" key={item.label}>
                  <strong>{item.label}</strong>
                  <span>{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="contact-section" id="contact">
          <div className="container contact-inner">
            <div>
              <p className="eyebrow">Contact</p>
              <h2>Wilmot Kerkulah</h2>
              <p>For collaboration, consulting and programme opportunities.</p>
            </div>
            <div className="contact-links">
              <a href={`mailto:${profile.contact.email}`}>{profile.contact.email}</a>
              {profile.contact.phones.map((phone) => (
                <a key={phone} href={`tel:${phone.replace(/[^\d+]/g, '')}`}>
                  {phone}
                </a>
              ))}
              <span>{profile.location}</span>
            </div>
          </div>
          <footer className="container footer">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <a href="#top">Back to top</a>
          </footer>
        </section>
      </main>
    </div>
  );
}

export default PortfolioSite;
