const ServicesSection = ({ services }) => (
  <section className="services" id="servicios">
    <div className="services__header">
      <span className="services__eyebrow">Servicios</span>
      <h2 className="services__title">Experiencias fotográficas diseñadas a medida.</h2>
      <p className="services__description">
        Desde sesiones íntimas hasta producciones editoriales completas. Cada proyecto se planifica con detalle,
        cuidando la dirección creativa, el scouting y la postproducción.
      </p>
    </div>

    <div className="services__grid">
      {services.map((service) => (
        <article key={service.title} className="services__card">
          <div className="services__card-header">
            <h3>{service.title}</h3>
            <span className="services__price">{service.price}</span>
          </div>
          <p className="services__summary">{service.summary}</p>
          <ul className="services__features">
            {service.features.map((feature) => (
              <li key={feature}>{feature}</li>
            ))}
          </ul>
          <a className="services__link" href="#contacto">
            Solicitar información
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default ServicesSection;
