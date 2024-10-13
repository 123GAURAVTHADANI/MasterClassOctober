function Card({ item }) {
  return (
    <div className="card__container">
      <h3>{item.title}</h3>
      <img className="card__img" src={item.image} />
      <div>
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
export default Card;
