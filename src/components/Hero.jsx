const Hero = ({ backgroundVideo }) => (
  <header className="hero" id="inicio">
    <div className="hero__media">
      <video className="hero__video" src={backgroundVideo} autoPlay muted loop playsInline />
    </div>
    <div className="hero__overlay">
      <div className="hero__content">
        <div className="hero__heading">
          <span className="hero__eyebrow">Joaquín Caparrós • Portfolio 2025</span>
          <h1 className="hero__title">
            Historias visuales que
            <br />
            encienden emociones.
          </h1>
          <p className="hero__subtitle">
            Fotógrafo editorial y de retratos basado en Madrid. Especializado en narrativas visuales que combinan
            estética minimalista, luz natural y dirección creativa para marcas y artistas.
          </p>
        </div>

        <div className="hero__meta">
          <div className="hero__stat">
            <span className="hero__stat-number">12+</span>
            <span className="hero__stat-label">años capturando momentos</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">37</span>
            <span className="hero__stat-label">editoriales publicadas</span>
          </div>
          <div className="hero__stat">
            <span className="hero__stat-number">18</span>
            <span className="hero__stat-label">premios &amp; menciones</span>
          </div>
        </div>

        <div className="hero__cta">
          <a className="hero__button" href="#contacto">
            Reservar sesión
          </a>
          <a className="hero__secondary" href="#servicios">
            Ver servicios
          </a>
          <span className="hero__note">Disponibilidad limitada • Madrid y proyectos internacionales</span>
        </div>
      </div>
    </div>
  </header>
);

export default Hero;
