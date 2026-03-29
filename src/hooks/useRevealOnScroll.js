import { useEffect, useRef, useState } from 'react'

function useRevealOnScroll(options = {}) {
  const { disabled = false, threshold = 0.18, rootMargin = '0px 0px -10% 0px' } = options
  const ref = useRef(null)
  const [isVisible, setIsVisible] = useState(disabled)

  useEffect(() => {
    if (disabled) {
      setIsVisible(true)
      return undefined
    }

    const node = ref.current

    if (!node) {
      return undefined
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [disabled, rootMargin, threshold])

  return { isVisible, ref }
}

export default useRevealOnScroll
