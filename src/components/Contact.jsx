export default function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="section-container">
        <div className="contact-wrapper">
          <div className="contact-content">
            <span className="section-label">Contato</span>
            <h2 className="contact-title">
              Vamos criar algo
              <br />
              <span className="highlight">incrível juntos?</span>
            </h2>
            <p className="contact-text">
              Estou sempre aberto a novas oportunidades, colaborações e
              conversas sobre tecnologia. Se você tem um projeto em mente ou
              apenas quer trocar uma ideia, entre em contato!
            </p>

            <div className="contact-info">
              <a href="mailto:jonathan.nwokolo@gmail.com" className="contact-link">
                <div className="contact-icon">
                  <i className="fas fa-envelope"></i>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Email</span>
                  <span className="contact-value">jonathan.nwokolo@gmail.com</span>
                </div>
              </a>

              <a
                href="https://wa.me/5511980195144"
                target="_blank"
                rel="noreferrer"
                className="contact-link"
              >
                <div className="contact-icon">
                  <i className="fab fa-whatsapp"></i>
                </div>
                <div className="contact-details">
                  <span className="contact-label">WhatsApp</span>
                  <span className="contact-value">+55 (11) 98019-5144</span>
                </div>
              </a>

              <div className="contact-link">
                <div className="contact-icon">
                  <i className="fas fa-map-marker-alt"></i>
                </div>
                <div className="contact-details">
                  <span className="contact-label">Localização</span>
                  <span className="contact-value">São Paulo, Brasil</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
