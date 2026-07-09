import "./marquee.css";

interface MarqueeProps {
  items: string[];
}

const Marquee = ({ items }: MarqueeProps) => {
  const rowLeft = [...items, ...items];
  const rowRight = [...items].reverse();
  const rowRightLoop = [...rowRight, ...rowRight];

  return (
    <div className="marquee">
      <div className="marquee__track marquee__track--left">
        {rowLeft.map((item, index) => (
          <span key={`left-${item}-${index}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
      <div className="marquee__track marquee__track--right">
        {rowRightLoop.map((item, index) => (
          <span key={`right-${item}-${index}`} className="marquee__item">
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
