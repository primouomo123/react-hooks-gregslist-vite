import ListingCard from "./ListingCard";

// destructure listings from props
function ListingsContainer({ listings }) {
  return (
    <main>
      <ul className="cards">
        { /* render listing cards for each listing, passing properties and a key prop */ }
        {listings.map(listing => <ListingCard 
          key={listing.id}
          {...listing}
        />)}
      </ul>
    </main>
  );
}

export default ListingsContainer;
