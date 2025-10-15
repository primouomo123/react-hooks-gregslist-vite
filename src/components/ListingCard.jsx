function ListingCard({ description, image, location, favorite }) {
  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        { /* add description and image based on prop value */ }
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {true ? (
          <button className="emoji-button favorite active">★</button>
        ) : (
          <button className="emoji-button favorite">☆</button>
        )}
        <strong>{"description"}</strong>
        <span> · {"location"}</span>
        <button className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
