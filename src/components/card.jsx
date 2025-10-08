import "../card.css"

export default function Card({ name, image, handleClick, showName}) {
  return (
    <button onClick={handleClick}  className="card-button">
          <div className="card__face card__face--front">
              <img src={image} alt={"image of " + name}/>
              {showName && <div className="name-card">{name}</div>}
          </div>
    </button>
  );
}
