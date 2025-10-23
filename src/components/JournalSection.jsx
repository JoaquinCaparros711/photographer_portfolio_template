const JournalSection = ({ entries }) => (
  <section className="journal" id="journal">
    <div className="journal__header">
      <span className="journal__eyebrow">Journal</span>
      <h2>Exploraciones recientes, proyectos y detrás de cámaras.</h2>
      <p>
        Un espacio para compartir procesos, referencias y pequeñas historias que inspiran cada sesión. Actualizado
        mensualmente con proyectos en curso.
      </p>
    </div>

    <div className="journal__grid">
      {entries.map((entry) => (
        <article key={entry.slug} className="journal__card">
          <span className="journal__date">{entry.date}</span>
          <h3 className="journal__title">{entry.title}</h3>
          <p className="journal__excerpt">{entry.excerpt}</p>
          <a className="journal__link" href={entry.href}>
            Leer más
          </a>
        </article>
      ))}
    </div>
  </section>
);

export default JournalSection;
