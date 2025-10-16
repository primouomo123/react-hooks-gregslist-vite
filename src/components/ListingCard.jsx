// destructure deleteListing from props object
function ListingCard({ id, image, description, location, favorite, updateListing, deleteListing }) {

  const handleFavorite = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ favorite: !favorite })
    })
      .then(r => {
        if (!r.ok) {
          throw new Error("failed to update favorite status");
        }
        return r.json();
      })
      .then(updateListing)
      .catch(error => console.error(error.message));
  };

  const handleDelete = () => {
    fetch(`http://localhost:6001/listings/${id}`, {
      method: "DELETE"
    })
      .then(r => {
        if (!r.ok) {
          throw new Error("failed to delete listing");
        }
        // call deleteListing and pass in id
        deleteListing(id);
      })
      .catch(error => console.error(error.message));
  };

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        <button
          onClick={handleFavorite}
          className={`emoji-button favorite ${favorite ? "active" : ""}`}
        >
          {favorite ? "★" : "☆"}
        </button>
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDelete} className="emoji-button delete">
          🗑
        </button>
      </div>
    </li>
  );
}

export default ListingCard;
