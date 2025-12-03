const ShowcaseSection = ({ images }) => (
  <section className="showcase" id="portafolio">
    <div className="showcase__header">
      <div className="showcase__titles">
        <span className="showcase__eyebrow">Más trabajos</span>
        <h2>Selección rápida de piezas editoriales, bodas minimalistas y exploraciones urbanas.</h2>
      </div>
      <p className="showcase__lead">
        Una vista mosaico para que los clientes vean variedad de luz, tono y narrativa en segundos.
      </p>
    </div>

    <ul className="showcase__grid">
      {images.map((item) => (
        <li
          key={item.src}
          className={`showcase__item${item.variant ? ` showcase__item--${item.variant}` : ''}`}
        >
          <div className="showcase__media">
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              width={1240}
              height={874}
              data-preload
            />
            <div className="showcase__overlay">
              <span className="showcase__label">{item.title}</span>
              <span className="showcase__meta">{item.meta}</span>
            </div>
          </div>
        </li>
      ))}
    </ul>
  </section>
);

export default ShowcaseSection;
