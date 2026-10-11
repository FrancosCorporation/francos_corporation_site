import Header from '../components/Header';
import Icon from '../components/Icon';

const solutions = [
  {
    number: '01',
    icon: 'browser',
    title: 'Sites e plataformas',
    description: 'Experiências web rápidas, claras e adaptadas a cada tela — da primeira visita à próxima conversa.',
    detail: 'Presença digital',
  },
  {
    number: '02',
    icon: 'layers',
    title: 'Sistemas sob medida',
    description: 'Aplicações que organizam processos e aproximam as ferramentas do jeito que sua operação funciona.',
    detail: 'Produtos digitais',
  },
  {
    number: '03',
    icon: 'workflow',
    title: 'Integrações e automação',
    description: 'Conexões entre serviços e fluxos digitais para reduzir tarefas manuais e dar mais ritmo ao trabalho.',
    detail: 'Fluxos conectados',
  },
];

const steps = [
  {
    number: '01',
    title: 'Entender',
    description: 'Começamos pelo contexto, pelas pessoas e pelo problema que precisa de atenção.',
  },
  {
    number: '02',
    title: 'Desenhar',
    description: 'Organizamos prioridades e definimos um caminho simples para chegar ao resultado.',
  },
  {
    number: '03',
    title: 'Construir',
    description: 'Desenvolvemos a solução com clareza e espaço para aprender durante o processo.',
  },
];

function HeroArtwork() {
  return (
    <div aria-hidden="true" className="hero-art">
      <div className="hero-orbit hero-orbit--outer" />
      <div className="hero-orbit hero-orbit--inner" />
      <span className="hero-star hero-star--one" />
      <span className="hero-star hero-star--two" />
      <span className="hero-orb hero-orb--one" />
      <span className="hero-orb hero-orb--two" />
      <div className="concept-card">
        <div className="concept-card__top">
          <span className="concept-card__dots"><i /><i /><i /></span>
          <span>IDEIA EM MOVIMENTO</span>
          <span className="concept-card__status">●</span>
        </div>
        <div className="concept-card__body">
          <span className="concept-card__eyebrow">TECNOLOGIA COM INTENÇÃO</span>
          <strong>Do primeiro esboço a uma experiência digital.</strong>
          <div className="concept-card__flow">
            <span>Estratégia</span><i /><span>Design</span><i /><span>Código</span>
          </div>
          <div className="concept-card__line"><span className="concept-card__progress" /></div>
        </div>
      </div>
      <div className="art-note art-note--top"><Icon name="spark" /> Feito para pessoas</div>
      <div className="art-note art-note--bottom"><span className="art-note__signal" /> Sempre em evolução</div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      <Header />
      <main id="conteudo">
        <section aria-labelledby="hero-title" className="hero" id="inicio">
          <div className="hero-grid" />
          <div className="page-width hero-layout">
            <div className="hero-copy">
              <p className="eyebrow"><span /> Tecnologia, estratégia e criação digital</p>
              <h1 id="hero-title">Boas ideias merecem <span className="text-gradient">ganhar vida.</span></h1>
              <p className="hero-description">
                Criamos sites, sistemas e experiências digitais que aproximam a tecnologia das necessidades reais do seu negócio.
              </p>
              <div className="hero-actions">
                <a className="button button--primary" href="#solucoes">
                  Conheça as soluções <Icon name="arrow" />
                </a>
                <a className="button button--quiet" href="#contato">Fale com a Francos</a>
              </div>
              <div className="hero-caption">
                <span className="caption-line" />
                <span>Da primeira conversa a cada próxima versão.</span>
              </div>
            </div>
            <HeroArtwork />
          </div>
          <a aria-label="Role para conhecer as soluções" className="scroll-cue" href="#solucoes">
            <span className="scroll-cue__dot" />
          </a>
        </section>

        <section aria-labelledby="solutions-title" className="section solutions" id="solucoes">
          <div className="page-width">
            <div className="section-heading section-heading--split">
              <div>
                <p className="eyebrow eyebrow--light"><span /> O que fazemos</p>
              <h2 id="solutions-title">Tecnologia no ritmo <span className="text-gradient">do seu negócio.</span></h2>
              </div>
              <p className="section-intro">
                Cada desafio pede uma combinação diferente. A gente junta estratégia, design e desenvolvimento para encontrar a que faz sentido.
              </p>
            </div>
            <div className="solution-grid">
              {solutions.map((solution) => (
                <article className="solution-card" key={solution.number}>
                  <div className="solution-card__top">
                    <span className="solution-icon"><Icon name={solution.icon} /></span>
                    <span className="solution-number">{solution.number}</span>
                  </div>
                  <h3>{solution.title}</h3>
                  <p>{solution.description}</p>
                  <span className="solution-detail">{solution.detail}</span>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="process-title" className="section process" id="processo">
          <div className="page-width">
            <div className="section-heading">
              <p className="eyebrow eyebrow--light"><span /> Um caminho claro</p>
              <h2 id="process-title">Cada projeto começa <span className="text-gradient">com uma boa conversa.</span></h2>
              <p className="section-intro section-intro--wide">
                Tecnologia funciona melhor quando o processo também faz sentido. Por isso, cada etapa é construída junto com você.
              </p>
            </div>
            <div className="step-grid">
              {steps.map((step) => (
                <article className="step-card" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section aria-labelledby="about-title" className="section about" id="sobre">
          <div className="page-width about-layout">
            <div className="about-mark" aria-hidden="true">
              <div className="about-mark__ring about-mark__ring--one" />
              <div className="about-mark__ring about-mark__ring--two" />
              <span className="about-mark__letters">FC</span>
              <i className="about-mark__dot about-mark__dot--one" />
              <i className="about-mark__dot about-mark__dot--two" />
            </div>
            <div className="about-copy">
              <p className="eyebrow eyebrow--light"><span /> Sobre a Francos</p>
              <h2 id="about-title">Tecnologia só faz sentido quando <span className="text-gradient">aproxima pessoas.</span></h2>
              <p>
                A Francos Corporation acredita em soluções digitais úteis, fáceis de entender e feitas com atenção a quem vai usar. Nosso trabalho começa ouvindo e segue com colaboração em cada decisão.
              </p>
              <a className="text-link" href="https://github.com/FrancosCorporation" rel="noreferrer" target="_blank">
                Conheça a Francos no GitHub <Icon name="arrow" />
              </a>
            </div>
          </div>
        </section>

        <section aria-labelledby="contact-title" className="contact" id="contato">
          <div className="page-width contact-panel">
            <div className="contact-glow" aria-hidden="true" />
            <div className="contact-copy">
              <p className="eyebrow"><span /> Próximo passo</p>
              <h2 id="contact-title">Tem uma ideia? <span className="text-gradient">Vamos conversar.</span></h2>
              <p>Conte um pouco do desafio e descubra como a tecnologia pode ajudar a tirar seu projeto do papel.</p>
            </div>
            <a className="button button--contact" href="https://www.linkedin.com/in/francoscorp/" rel="noreferrer" target="_blank">
              Fale com a Francos no LinkedIn <Icon name="arrow" />
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="page-width footer-content">
          <a aria-label="Francos Corporation — início" className="brand brand--footer" href="#inicio">
            <span aria-hidden="true" className="brand-mark">FC</span>
            <span className="brand-name"><strong>Francos</strong><span>Corporation</span></span>
          </a>
          <p>Ideias melhores, experiências digitais mais humanas.</p>
          <div className="footer-links">
            <a href="https://github.com/FrancosCorporation" rel="noreferrer" target="_blank">GitHub</a>
            <a href="https://www.linkedin.com/in/francoscorp/" rel="noreferrer" target="_blank">LinkedIn</a>
          </div>
          <span className="copyright">© {new Date().getFullYear()} Francos Corporation</span>
        </div>
      </footer>
    </>
  );
}
