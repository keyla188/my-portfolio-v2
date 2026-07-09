import { useState } from "react";
import "./App.css";
import { DotLottie, DotLottieReact } from "@lottiefiles/dotlottie-react";
import Darkmode from "./components/darkmode/darkmode";
import projects from "./data/projects";
import Card from "./components/card/card";
import { IconExternalLink } from '@tabler/icons-react';
import { IconMessage2Share } from '@tabler/icons-react';
import { IconPhoneCall } from '@tabler/icons-react';
import { IconBrandGithub } from '@tabler/icons-react';
import { IconBrandLinkedin } from '@tabler/icons-react';
import { IconBrandInstagram } from '@tabler/icons-react';
import Marquee from "./components/marquee/marquee";
import Menu from "./components/menu/menu";
import Starfield from "./components/starfield/starfield";

function App() {
  const [dotLottie, setDotLottie] = useState<DotLottie | null>(null);

  const dotLottieRefCallback = (dotLottie: DotLottie | null) => {
    setDotLottie(dotLottie);
  };

  const handleContactClick = () => {
    // Busca la sección de contacto
    const contactSection = document.querySelector('#contact');
    if (contactSection) {
      // Desplázate hacia la sección de contacto de manera suave
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Menu />
      <div className="header container">
        <span>UWU</span>
        <Darkmode />
      </div>
      <section id="home" className="first container">
        <Starfield />
        <div className="welcome">
          <p>Hola! Soy</p>
          <h1>Keyla Cabrera Alcalá</h1>
          <span>Front End Developer | Software Engineer Student</span>
          <div className="buttons-container">
            <button onClick={handleContactClick} className="primary-button">Contáctame</button>
            <button onClick={() => window.open('/assets/keyla-cabrera-alcala.pdf', '_blank')} className="secondary-button">
              Ver CV
            </button>
          </div>
        </div>
      
      <div className="img-container">
        <div className="img-hover"
          onMouseEnter={() => dotLottie?.play()}
          onMouseLeave={() => {
            dotLottie?.play();
            dotLottie?.stop();
          }}
        >
          <DotLottieReact
            src="https://lottie.host/6fc76cd7-7d37-4d79-8824-0e6d83b291d9/t3jSByYISv.lottie"
            loop={false}
            autoplay={false}
            dotLottieRefCallback={dotLottieRefCallback}
          />
        </div>
      </div>
      </section>
      <section id="about-me" className="container">
          <h2>Sobre mí</h2>
          <div className="about-me">
          <div>
            <img src="/assets/photo.jpg" alt="my photo"/>
          </div>
          <div className="my-description">
            <p>
            Soy estudiante de Ingeniería de Software en el octavo ciclo 🎓 y apasionada por el desarrollo web 🌐, especialmente en el área de frontend con Angular 🚀. Disfruto creando interfaces dinámicas y funcionales que se integran perfectamente con el backend mediante APIs RESTful.            
            </p>
            <p>
            Tengo experiencia diseñando estilos atractivos y eficientes con HTML y SCSS 🎨, y desarrollando aplicaciones completas con tecnologías como JavaScript, TypeScript, NodeJS, MySQL y MongoDB 💻.            </p>
            <p>
            Además, soy miembro activa de comunidades como Developer Student Clubs y Dev Girls 🤝, donde he fortalecido habilidades clave como la comunicación efectiva 🗣️, el trabajo en equipo 🤝 y la resolución de problemas 🧠. 
            </p>
            <p>
            Siempre estoy buscando nuevos desafíos que me permitan aprender, crecer y aportar valor 🌟. 
            </p>
          </div>
          </div>
      </section>
      <section id="projects" className="container">
          <h2>Trabajos y Proyectos</h2>
          <div className="projects">
            {projects.map((project) => (
              <Card key={project.id}
              id={project.id}
              name={project.name}
              img={project.img}
              technologies={project.technologies}
              githubLink={project.githubLink}
              demoLink={project.demoLink}   
              />
            ))}
          </div>
      </section>
      <section id="tech" className="container">
        <h2>Tecnologías</h2>
        <div className="marquee-tech">
          <Marquee />
        </div>
      </section>
      <section id="contact" className="container">
        <h2>Contáctame</h2>
            <div className="contact-container">
              <div className="contact">
                <div className="redirect">
                  <a href="mailto:kcabreraalcala@gmail.com" target="_blank">
                    <IconExternalLink stroke={2} size={20} />
                  </a>
                </div>
                <div>
                  <IconMessage2Share stroke={2} size={35}/>
                  <p>Email</p>
                  <a href="mailto:kcabreraalcala@gmail.com" target="_blank">
                    <span>kcabreraalcala@gmail.com</span>
                  </a>
                </div>
              </div>
              <div className="contact">
                <div className="redirect">
                  <a href="tel:+51931452371" target="_blank">
                    <IconExternalLink stroke={2} size={20} />
                  </a>
                </div>
                <div>
                <IconPhoneCall stroke={2} size={35} />
                  <p>Teléfono</p>
                  <a href="tel:+51931452371" target="_blank">
                    <span>+51 931452371</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="social-media">
              <a href="https://github.com/keyla188" target="_blank">
                <IconBrandGithub stroke={1.5} size={30}/>
              </a>
              <a href="https://www.linkedin.com/in/keyla-cabrera-alcalá" target="_blank">
                <IconBrandLinkedin stroke={1.5} size={30} />
              </a>
              <a href="https://www.instagram.com/keylaacabrera/" target="_blank">
                <IconBrandInstagram stroke={1.5} size={30} />
              </a>
            </div>
      </section>
      <div className="footer-container">
            <div>
              <p>&copy; 2024 Keyla Cabrera Alcalá. All rights reserved</p>
            </div>
      </div>
    </div>
  );
}

export default App;
