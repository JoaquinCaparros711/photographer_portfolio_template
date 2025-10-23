const GalleryRow = ({ title, blurb, images }) => (
  <section className="gallery-section" data-scroll>
    <div className="gallery-section__content">
      <ul className="gallery wrapper" data-wrapper>
        {images.map(({ src, alt, meta }) => (
          <li className="gallery__item" key={src}>
            <figure className="gallery__figure">
              <div className="gallery__media">
                <img
                  className="gallery__image"
                  data-preload
                  src={src}
                  alt={alt}
                  width={1240}
                  height={874}
                  loading="lazy"
                />
              </div>
              <figcaption className="gallery__caption">
                <span>{title}</span>
                <span>{meta}</span>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
      <aside className="gallery__aside">
        <h2 className="gallery__title">{title}</h2>
        <p className="gallery__blurb">{blurb}</p>
      </aside>
    </div>
  </section>
);

export default GalleryRow;
