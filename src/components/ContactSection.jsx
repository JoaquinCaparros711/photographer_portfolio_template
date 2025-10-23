const ContactSection = () => (
  <section className="contact" id="contacto">
    <div className="contact__wrapper">
      <div className="contact__intro">
        <span className="contact__eyebrow">Contacto</span>
        <h2>Cuéntame tu proyecto y diseñemos algo juntos.</h2>
        <p>
          Escríbeme con los detalles de la sesión que tienes en mente. Respondo en menos de 24 h con propuesta,
          disponibilidad y presupuestos.
        </p>
        <div className="contact__info">
          <a href="mailto:hola@alexrivera.studio">hola@alexrivera.studio</a>
          <span>Madrid • Disponible para viajes internacionales</span>
        </div>
      </div>

      <form className="contact__form" aria-label="Formulario de contacto">
        <label className="contact__field">
          <span>Nombre completo</span>
          <input type="text" name="name" placeholder="Tu nombre" required />
        </label>

        <label className="contact__field">
          <span>Email</span>
          <input type="email" name="email" placeholder="tu@email.com" required />
        </label>

        <label className="contact__field">
          <span>Tipo de sesión</span>
          <select name="type" defaultValue="editorial" required>
            <option value="editorial">Editorial</option>
            <option value="retrato">Retrato individual</option>
            <option value="boda">Bodas íntimas</option>
            <option value="comercial">Proyecto comercial</option>
          </select>
        </label>

        <label className="contact__field contact__field--full">
          <span>Mensaje</span>
          <textarea name="message" rows="4" placeholder="Comparte fechas, lugar y referencias" required />
        </label>

        <button className="contact__submit" type="submit">
          Enviar mensaje
        </button>
      </form>
    </div>
  </section>
);

export default ContactSection;
