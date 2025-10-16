import ListingCard from "./ListingCard";

// destructure updateListing from props object
function ListingsContainer({ listings, updateListing }) {
  return (
    <main>
      <ul className="cards">
        { /* add updateListing as prop to ListingCard */ }
        {listings.map(listing => <ListingCard 
          key={listing.id}
          {...listing}
          updateListing={updateListing} 
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;

