import { IconBrandGithub, IconBrandInstagram, IconBrandLinkedin } from "@tabler/icons-react";
import SectionHeading from "../../components/section-heading/section-heading";
import social from "../../data/social";
import type { SocialIconKey } from "../../types/social";
import "./contact.css";

const SOCIAL_ICONS: Record<SocialIconKey, typeof IconBrandGithub> = {
  github: IconBrandGithub,
  linkedin: IconBrandLinkedin,
  instagram: IconBrandInstagram,
};

const Contact = () => {
  return (
    <div className="contact">
      <SectionHeading eyebrow="05 — Contacto" title="Hablemos" />
      <div className="contact__tiles">
        <a href="mailto:kcabreraalcala@gmail.com" className="contact__tile">
          <span className="contact__tile-label">Email</span>
          <span className="contact__tile-value">kcabreraalcala@gmail.com</span>
        </a>
        <a href="tel:+51931452371" className="contact__tile">
          <span className="contact__tile-label">Teléfono</span>
          <span className="contact__tile-value">+51 931 452 371</span>
        </a>
      </div>
      <div className="contact__social">
        {social.map((link) => {
          const Icon = SOCIAL_ICONS[link.id];
          return (
            <a key={link.id} href={link.href} target="_blank" rel="noreferrer" aria-label={link.label}>
              <Icon stroke={1.6} size={19} />
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Contact;
