import { useEffect, useRef, useState } from 'react';
import Icon from './Icon';

const links = [
  { href: '#solucoes', label: 'Soluções' },
  { href: '#processo', label: 'Como trabalhamos' },
  { href: '#sobre', label: 'Sobre' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef(null);

  useEffect(() => {
    if (!menuOpen) {
      return undefined;
    }

    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    }

    window.addEventListener('keydown', closeOnEscape);
    return () => window.removeEventListener('keydown', closeOnEscape);
  }, [menuOpen]);

  function closeMenu() {
    setMenuOpen(false);
  }

  return (
    <header className="site-header">
      <a className="skip-link" href="#conteudo">
        Pular para o conteúdo
      </a>
      <div className="nav-shell">
        {/* biome-ignore lint/a11y/useValidAnchor: This keeps native hash navigation; the handler only closes the mobile menu. */}
        <a aria-label="Francos Corporation — início" className="brand" href="#inicio" onClick={closeMenu}>
          <span aria-hidden="true" className="brand-mark">FC</span>
          <span className="brand-name">
            <strong>Francos</strong>
            <span>Corporation</span>
          </span>
        </a>

        <button
          ref={menuButtonRef}
          aria-controls="primary-navigation"
          aria-expanded={menuOpen}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          className="menu-toggle"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
          type="button"
        >
          <Icon name={menuOpen ? 'close' : 'menu'} />
        </button>

        <nav
          aria-label="Navegação principal"
          className={`nav-menu${menuOpen ? ' is-open' : ''}`}
          id="primary-navigation"
        >
          {links.map((link) => (
            <a className="nav-link" href={link.href} key={link.href} onClick={closeMenu}>
              {link.label}
            </a>
          ))}
          {/* biome-ignore lint/a11y/useValidAnchor: This keeps native hash navigation; the handler only closes the mobile menu. */}
          <a className="nav-cta" href="#contato" onClick={closeMenu}>
            Vamos conversar <Icon name="arrow" />
          </a>
        </nav>
      </div>
    </header>
  );
}
