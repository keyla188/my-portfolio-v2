import type { Card } from "../../models/project"
import { IconBrandGithub } from '@tabler/icons-react';
import { IconPlayerTrackNext } from '@tabler/icons-react';
import { IconCodeOff } from '@tabler/icons-react';
import { IconVideoOff } from '@tabler/icons-react';
import "./card.css";

const Card=({id, name, img, technologies, githubLink, demoLink}: Card) => {
return(
    <div className="card">
    <div>
        {img.endsWith('.mp4') ? (
            <video src={img} autoPlay loop muted />
        ) : (

        <img src={img} />
        )}
    </div>
    <div className="card-info">
        <p>{name}</p>
        <div className="technologies-container">
            {technologies.map((technology) => (
                <div key={technology} className="technology">
                    <span>{technology}</span>
                </div>
            ))}
        </div>
        <div className="more-details-container">
            <div className="icons">
                {githubLink!==null ? (
                <a href={githubLink} target="_blank">
                <IconBrandGithub stroke={2} />
                </a>
                ) : (
                    <IconCodeOff stroke={2} />
                )}
                {demoLink!==null ? (
                <a href={demoLink} target="_blank">
                <IconPlayerTrackNext stroke={2} />
                </a>

                ) : (
                    <IconVideoOff stroke={2} />
                )}
            </div>
            <div>
            <a>
                <span>Leer mas</span>
            </a>
            </div>
        </div>
    </div>

    </div>
)
}

export default Card