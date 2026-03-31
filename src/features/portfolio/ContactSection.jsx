import RevealSection from '../../shared/components/RevealSection'

function ContactSection() {
  return (
    <RevealSection as="footer" className="site-footer" id="contact" immediate>
      <p className="site-footer-note">Contact</p>

      <div className="site-footer-contacts">
        <a className="site-footer-link" href="mailto:benjaminnamayandeh@gmail.com">
          <span>Email</span>
          <strong>benjaminnamayandeh@gmail.com</strong>
        </a>

        <a className="site-footer-link" href="tel:16476070275">
          <span>Mobile</span>
          <strong>(647) 607-0275</strong>
        </a>
      </div>
    </RevealSection>
  )
}

export default ContactSection
