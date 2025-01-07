import { useEffect } from "react";
import "./starfield.css";

const Starfield = () => {
    useEffect(() => {
      const starfield = document.querySelector(".starfield");
  
      if (starfield) {
        function createStar() {
          const star = document.createElement("svg");
          star.classList.add("star");
  
          const size = Math.random() * 10 + 5; 
          star.style.width = `${size}px`;
          star.style.height = `${size}px`;
  
          const left = Math.random() * 100;
          star.style.left = `${left}%`;
  
          const duration = Math.random() * 15 + 15;
          star.style.animationDuration = `${duration}s`;
  
          const shouldBlink = Math.random() > 0.5;
          const blinkDuration = Math.random() * 2 + 1; 
  
          if (shouldBlink) {
            star.style.animation = `fall ${duration}s infinite linear, blink ${blinkDuration}s infinite ease-in-out`;
          } else {
            star.style.animation = `fall ${duration}s infinite linear`;
          }
  
          star.innerHTML = `
            <svg width="100%" height="100%" viewBox="0 0 200 200">
              <polygon points="100,10 40,198 190,78 10,78 160,198"
                style="fill:white;stroke:white;stroke-width:2;fill-rule:evenodd;"/>
            </svg>
          `;
  
          starfield?.appendChild(star);
  
          setTimeout(() => {
            star.remove();
          }, duration * 1500);
        }
  
        const interval = setInterval(createStar, 900);
  
        return () => clearInterval(interval);
      }
    }, []);
  
    return <div className="starfield"></div>;
  };
  

export default Starfield;
