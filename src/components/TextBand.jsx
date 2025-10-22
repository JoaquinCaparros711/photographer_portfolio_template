const TextBand = ({ text }) => (
  <section className="text-band" data-scroll>
    <div className="wrapper text-band__wrapper" data-wrapper>
      <p className="text-band__text" aria-hidden="true">
        {text}
      </p>
    </div>
  </section>
);

export default TextBand;
