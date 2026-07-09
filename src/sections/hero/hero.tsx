import "./hero.css";

const FLOAT_DOTS = [0, 1, 2, 3, 4, 5];

const scrollToContact = () => {
  document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
};

const openCv = () => {
  window.open("/assets/documents/keyla-cabrera-alcala.pdf", "_blank");
};

const Hero = () => {
  return (
    <section id="home" className="hero">
      <div className="hero__content">
        <div className="hero__intro">
          <p className="hero__eyebrow">Hola, soy</p>
          <h1 className="hero__title">
            Keyla Cabrera
            <br />
            Alcalá
          </h1>
          <span className="hero__subtitle">
            FullStack Developer &middot; Bachiller en Ingeniería de Software
          </span>
          <div className="hero__actions">
            <button onClick={scrollToContact} className="primary-button">
              Contáctame
            </button>
            <button onClick={openCv} className="secondary-button">
              Ver CV
            </button>
          </div>
        </div>

        <div className="hero__portrait">
          <div className="hero__portrait-ring" />
          <div className="hero__portrait-frame">
            <img src="/assets/photo.jpg" alt="Keyla Cabrera" />
          </div>
          {FLOAT_DOTS.map((i) => (
            <span
              key={i}
              className="hero__float-dot"
              style={{
                width: `${6 + (i % 3) * 3}px`,
                height: `${6 + (i % 3) * 3}px`,
                top: `${(i * 37) % 100}%`,
                left: `${(i * 53) % 100}%`,
                animationDuration: `${4 + i}s`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
