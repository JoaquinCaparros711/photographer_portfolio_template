const AboutSection = ({ highlights, timeline }) => (
  <section className="about" id="sobre-mi">
    <div className="about__wrapper">
      <div className="about__intro">
        <span className="about__eyebrow">Sobre mí</span>
        <h2 className="about__title">Fotografía con intención, ritmo y honestidad.</h2>
        <p className="about__body">
          Me mueven las historias reales. Trabajo codo a codo con cada cliente para entender su visión y traducirla
          en piezas visuales que conectan emociones con estética contemporánea.
        </p>
        <ul className="about__highlights">
          {highlights.map((item) => (
            <li key={item} className="about__highlight">
              {item}
            </li>
          ))}
        </ul>
      </div>

      <div className="about__timeline">
        <h3 className="about__timeline-title">Recorrido</h3>
        <ul className="about__timeline-list">
          {timeline.map((milestone) => (
            <li key={milestone.year} className="about__timeline-item">
              <span className="about__timeline-year">{milestone.year}</span>
              <div className="about__timeline-content">
                <h4>{milestone.title}</h4>
                <p>{milestone.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default AboutSection;
