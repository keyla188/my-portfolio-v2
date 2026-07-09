import "./ambient-background.css";

const AmbientBackground = () => {
  return (
    <div className="ambient-background" aria-hidden="true">
      <div className="ambient-background__blob ambient-background__blob--top" />
      <div className="ambient-background__blob ambient-background__blob--bottom" />
    </div>
  );
};

export default AmbientBackground;
