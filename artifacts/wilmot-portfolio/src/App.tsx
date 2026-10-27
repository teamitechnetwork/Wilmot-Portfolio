import { type ReactNode } from 'react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ErrorBoundary } from '@/components/error-boundary';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import NotFound from '@/pages/not-found';
import { ArrowDownRight, ArrowUpRight } from 'lucide-react';
import {
  Route,
  Switch,
  useLocation,
  Router as WouterRouter,
} from 'wouter';

const queryClient = new QueryClient();

function Home() {
  return (
    <main className="portfolio">
      <header className="site-header">
        <div className="nav-wrap">
          <a className="brand" href="#top" aria-label="Wilmot Kerkulah, back to top">
            <span className="brand-mark" aria-hidden="true">WK</span>
            <span className="brand-name">Wilmot Kerkulah</span>
          </a>
          <nav className="nav-links" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#experience">Experience</a>
            <a href="#practice">Practice</a>
            <a href="#education">Education</a>
            <a href="#contact" className="nav-contact">Get in touch <ArrowUpRight size={13} aria-hidden="true" /></a>
          </nav>
        </div>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <div className="hero-inner">
          <div>
            <div className="eyebrow hero-eyebrow reveal">Monrovia, Liberia · Community & technology</div>
            <h1 className="reveal reveal-delay" id="hero-title">Wilmot Benedict<br /><em>Suah Kerkulah</em></h1>
            <p className="hero-intro reveal reveal-later">
              I bring people, programmes and practical technology together—building the capacity, communication and accountability that help community work move forward.
            </p>
            <div className="hero-actions reveal reveal-later">
              <a className="button-primary" href="#experience">Explore my work <ArrowDownRight size={16} aria-hidden="true" /></a>
              <a className="text-link" href="mailto:kerkulahwilmot492@gmail.com">Start a conversation</a>
            </div>
          </div>
          <div className="hero-side" aria-label="Five plus years of experience">
            <div className="orbit" aria-hidden="true">
              <div className="orbit-core">5<span style={{ fontSize: '.48em' }}>+</span></div>
              <span className="orbit-dot" />
              <span className="orbit-label">years of making things work</span>
            </div>
          </div>
        </div>
        <div className="hero-foot" aria-hidden="true"><span>People-first progress</span><span>001 — 005</span></div>
      </section>

      <section className="section about-section" id="about" aria-labelledby="about-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow section-kicker">01 / The through-line</p>
            <h2 id="about-title">Good work begins <em>with people.</em></h2>
          </div>
          <div className="about-grid">
            <div className="about-copy">
              <p><strong>My work sits where community development meets useful technology.</strong> Across nonprofit leadership, programme delivery, education and communications, I help turn shared goals into organised, practical action.</p>
              <p>From community mobilisation and stakeholder partnerships to digital tools, financial management and monitoring, I care about the details that make programmes useful—and accountable to the people they serve.</p>
              <p>Alongside my professional practice, I’m pursuing data science and analytics: learning to ask better questions, work with evidence and make clearer decisions.</p>
            </div>
            <aside className="principle">
              <p className="principle-line">People-first technology.</p>
              <p className="principle-line">Community-rooted programmes.</p>
              <p className="principle-line">Accountable delivery.</p>
              <p className="principle-caption">The work, in three lines</p>
            </aside>
          </div>
        </div>
      </section>

      <section className="section experience-section" id="experience" aria-labelledby="experience-title">
        <div className="section-inner">
          <div className="experience-intro">
            <h2 id="experience-title">A career built by connecting the dots.</h2>
            <p>Leadership · programmes · communications · ICT</p>
          </div>
          <div className="timeline">
            <article className="timeline-item">
              <div className="timeline-date">2025 — Present</div>
              <div>
                <h3 className="timeline-title">Current professional engagements</h3>
                <p className="timeline-org">B4P CODE FOUND · Capacity For Youth · Lewanah LLC</p>
                <p className="timeline-desc">Social Media, Marketing & Operations Associate at B4P CODE FOUND; Social Media & Brand Officer at Capacity For Youth; and B2B & Technical Director at Lewanah LLC.</p>
              </div>
              <span className="timeline-index">01</span>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">2024 — Present</div>
              <div>
                <h3 className="timeline-title">Graphic Designer, Secretary General & Communication Consultant</h3>
                <p className="timeline-org">Health Tech Liberia</p>
                <p className="timeline-desc">Supports organisational coordination and communications, bringing design and clear messaging into health technology work.</p>
              </div>
              <span className="timeline-index">02</span>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">2024</div>
              <div>
                <h3 className="timeline-title">Local Governance Act awareness campaign member</h3>
                <p className="timeline-org">UNDP / Capacity for Youth</p>
                <p className="timeline-desc">Contributed to public awareness work focused on the Local Governance Act.</p>
              </div>
              <span className="timeline-index">03</span>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">2024</div>
              <div>
                <h3 className="timeline-title">ITN campaign distribution supervisor</h3>
                <p className="timeline-org">Ministry of Health / Plan International / DEN-L</p>
                <p className="timeline-desc">Supervised distribution activity, helping coordinate delivery and on-the-ground implementation.</p>
              </div>
              <span className="timeline-index">04</span>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">2023 — Present</div>
              <div>
                <h3 className="timeline-title">Founder & Executive Director</h3>
                <p className="timeline-org">iTech Network Africa</p>
                <p className="timeline-desc">Leads an organisation focused on connecting communities with technology, education and opportunities for practical digital participation.</p>
              </div>
              <span className="timeline-index">05</span>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">2023 — Present</div>
              <div>
                <h3 className="timeline-title">Technical Consultant</h3>
                <p className="timeline-org">Children’s Reading Competition Program</p>
                <p className="timeline-desc">Provides technical support to a programme that encourages children’s reading.</p>
              </div>
              <span className="timeline-index">06</span>
            </article>
            <article className="timeline-item">
              <div className="timeline-date">2021 — Present</div>
              <div>
                <h3 className="timeline-title">Executive Director & Financial Management Specialist Consultant</h3>
                <p className="timeline-org">Hope Alive Development Foundation</p>
                <p className="timeline-desc">Combines organisational leadership with financial management support for development programming.</p>
              </div>
              <span className="timeline-index">07</span>
            </article>
          </div>
          <div className="earlier">
            <div className="timeline-date">Earlier experience</div>
            <div>
              <h3>Kwageh Enterprise School</h3>
              <p>Programme, teaching and design roles—an early foundation in learning, communication and bringing ideas to life.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section practice-section" id="practice" aria-labelledby="practice-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow section-kicker">02 / How I contribute</p>
            <h2 id="practice-title">A practical toolkit, <em>rooted in service.</em></h2>
          </div>
          <p className="practice-intro">The strongest outcomes rarely come from one discipline alone. These are the capabilities I bring together to help teams plan well, communicate clearly and follow through.</p>
          <div className="skill-columns">
            <div className="skill-group">
              <h3>People & programmes</h3>
              <ul><li>Community mobilisation</li><li>Programme design & management</li><li>Stakeholder partnerships</li><li>Grant writing</li><li>Monitoring & evaluation</li></ul>
            </div>
            <div className="skill-group">
              <h3>Technology & evidence</h3>
              <ul><li>ICT strategy</li><li>Web development</li><li>Data analytics</li><li>Digital literacy training</li></ul>
            </div>
            <div className="skill-group">
              <h3>Communication & stewardship</h3>
              <ul><li>Graphic design</li><li>Brand communications</li><li>Financial management</li></ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section education-section" id="education" aria-labelledby="education-title">
        <div className="section-inner">
          <div className="section-heading">
            <p className="eyebrow section-kicker">03 / Learning in progress</p>
            <h2 id="education-title">Curiosity is part of <em>the work.</em></h2>
          </div>
          <div className="education-grid">
            <article className="education-card">
              <span className="year">Currently pursuing</span>
              <div><h3>BSc, Data Science & Analytics</h3><p>Liberia Christian College</p></div>
            </article>
            <article className="education-card">
              <span className="year">Currently pursuing</span>
              <div><h3>Bachelor of Theology</h3><p>Global Baptist Bible College</p></div>
            </article>
            <article className="education-card">
              <span className="year">Graduated · 2024</span>
              <div><h3>Secondary education</h3><p>St. Mark Lutheran High School</p></div>
            </article>
          </div>
        </div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-grid section-inner">
          <div>
            <p className="eyebrow section-kicker">04 / Let’s connect</p>
            <h2 className="contact-title">What can we<br /><em>build together?</em></h2>
            <p className="contact-copy">For collaboration, consulting or a conversation about community-centred technology and programmes, reach out.</p>
          </div>
          <div className="contact-links" aria-label="Contact details">
            <a className="contact-row" href="mailto:kerkulahwilmot492@gmail.com">
              <span className="label">Email</span><span className="value">kerkulahwilmot492@gmail.com <ArrowUpRight size={14} aria-hidden="true" /></span>
            </a>
            <a className="contact-row" href="tel:+231555770641">
              <span className="label">Call</span><span className="value">+231 555 770 641 <ArrowUpRight size={14} aria-hidden="true" /></span>
            </a>
            <a className="contact-row" href="tel:+231776836689">
              <span className="label">Call</span><span className="value">+231 776 836 689 <ArrowUpRight size={14} aria-hidden="true" /></span>
            </a>
            <div className="contact-row">
              <span className="label">Based in</span><span className="value">Monrovia, Liberia</span>
            </div>
          </div>
        </div>
        <div className="footer"><span>© {new Date().getFullYear()} Wilmot Benedict Suah Kerkulah</span><a href="#top">Back to the beginning ↑</a></div>
      </footer>
    </main>
  );
}

function Router() {
  return (
    // Keep a shared shell (sidebar, navbar) outside the boundary so it
    // survives a page crash.
    <RoutedErrorBoundary>
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </RoutedErrorBoundary>
  );
}

function RoutedErrorBoundary({ children }: { children: ReactNode }) {
  const [location] = useLocation();
  return <ErrorBoundary resetKey={location}>{children}</ErrorBoundary>;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
