import "./Character.css";

const Character = ({ ch }) => {
  return (
    <div className="character">
      <span>{ch ? ch.toUpperCase() : ch}</span>
    </div>
  );
};

export default Character;
