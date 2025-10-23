const TestimonialsSection = ({ testimonials }) => (
  <section className="testimonials" id="testimonios">
    <div className="testimonials__wrapper">
      <div className="testimonials__header">
        <span className="testimonials__eyebrow">Testimonios</span>
        <h2>Colaboraciones que se convierten en relaciones duraderas.</h2>
      </div>

      <div className="testimonials__grid">
        {testimonials.map((testimonial) => (
          <article key={testimonial.name} className="testimonials__card">
            <p className="testimonials__quote">“{testimonial.quote}”</p>
            <div className="testimonials__meta">
              <span className="testimonials__name">{testimonial.name}</span>
              <span className="testimonials__role">{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
