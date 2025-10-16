import ListingCard from "./ListingCard";

// destructure deleteListing from props object
function ListingsContainer({ listings, updateListing, deleteListing }) {
  return (
    <main>
      <ul className="cards">
        { /* add deleteListing as prop to ListingCard */ }
        {listings.map(listing => <ListingCard 
          key={listing.id}
          {...listing}
          updateListing={updateListing} 
          deleteListing={deleteListing}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
