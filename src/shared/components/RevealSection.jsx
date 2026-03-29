import useRevealOnScroll from '../../hooks/useRevealOnScroll'

function RevealSection({ as = 'section', children, className = '', immediate = false, id }) {
  const { isVisible, ref } = useRevealOnScroll({ disabled: immediate })
  const classes = ['reveal', isVisible ? 'visible' : '', className].filter(Boolean).join(' ')
  const Tag = as

  return (
    <Tag ref={ref} className={classes} id={id}>
      {children}
    </Tag>
  )
}

export default RevealSection
