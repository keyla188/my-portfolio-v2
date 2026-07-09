import SectionHeading from "../../components/section-heading/section-heading";
import StatCard from "../../components/stat-card/stat-card";
import stats from "../../data/stats";
import "./about.css";

const About = () => {
  return (
    <>
      <div className="about__intro">
        <SectionHeading eyebrow="01 — Sobre mí" title="Construyo productos digitales de alto impacto." align="left" />
        <div className="about__bio">
          <p>
            Bachiller en Ingeniería de Software con experiencia en el desarrollo de plataformas SaaS,
            aplicaciones web, aplicaciones móviles y landing pages optimizadas para SEO. Especializada
            en frontend con Angular, Next.js, Astro y React Native, con experiencia fullstack integrando
            APIs mediante Node.js, MongoDB y GraphQL.
          </p>
          <p>
            He participado en la implementación de funcionalidades clave en productos digitales reales,
            contribuyendo a mejoras de hasta un 60% en rendimiento y un 35% en satisfacción de usuario.
          </p>
          <p className="about__bio-highlight">
            Me apasiona construir soluciones escalables que combinen una excelente experiencia de
            usuario con tecnología de alto impacto.
          </p>
        </div>
      </div>
      <div className="about__stats">
        {stats.map((stat) => (
          <StatCard key={stat.id} {...stat} />
        ))}
      </div>
    </>
  );
};

export default About;
