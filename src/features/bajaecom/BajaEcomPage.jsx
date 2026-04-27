function BajaEcomPage() {
  return (
    <section className="baja-page content-block" aria-labelledby="bajaecom-title">
      <p className="eyebrow">Western Baja Racing</p>
      <h1 id="bajaecom-title">Baja Ecom</h1>
      <p className="baja-page-copy">
        Repository links for the Baja Ecom storefront and service layer.
      </p>

      <div className="baja-page-actions" aria-label="Baja Ecom repositories">
        <a
          className="primary-link"
          href="https://github.com/WesternBajaRacing/BajaEcom-Frontend"
          target="_blank"
          rel="noreferrer"
        >
          Frontend
        </a>
        <a
          className="primary-link"
          href="https://github.com/WesternBajaRacing/BajaEcom-Backend"
          target="_blank"
          rel="noreferrer"
        >
          Backend
        </a>
      </div>
    </section>
  )
}

export default BajaEcomPage
