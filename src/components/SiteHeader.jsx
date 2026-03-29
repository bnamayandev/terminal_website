function SiteHeader({ socialLinks }) {
  const navLinks = [
    { label: 'Languages', href: '#languages' },
    { label: 'Experience', href: '#experience' },
    { label: 'Projects', href: '#projects' },
    ...socialLinks,
    { label: 'Resume', href: '/resume.pdf' },
  ]

  return (
    <header className="topbar">
      <nav aria-label="Primary">
        {navLinks.map((link) => {
          const isExternal = !link.href.startsWith('#')

          return (
            <a
              key={link.label}
              href={link.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noreferrer' : undefined}
            >
            {link.label}
            </a>
          )
        })}
      </nav>
    </header>
  )
}

export default SiteHeader
