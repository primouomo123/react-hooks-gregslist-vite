import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";

function App() {
  const [listings, setListings] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => {
        if (!r.ok) throw new Error("failed to get listings");
        return r.json();
      })
      .then(setListings)
      .catch(error => console.error(error.message));
  }, []);

  const addListing = (newListing) =>
    setListings((previousListings) => [...previousListings, newListing]);

  const updateListing = (updatedListing) =>
    setListings((previousListings) =>
      previousListings.map((listing) =>
        listing.id === updatedListing.id ? updatedListing : listing
      )
    );

  const deleteListing = (deletedListingId) =>
    setListings((previousListings) =>
      previousListings.filter((listing) => listing.id !== deletedListingId)
    );

  // filter listings by search query
  const displayedListings = listings.filter((listing) =>
    listing.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app">
      <Header onSearch={setSearch} />
      <ListingForm addListing={addListing} />
      <ListingsContainer
        listings={displayedListings}  // ✅ use filtered listings
        updateListing={updateListing}
        deleteListing={deleteListing} // ✅ correctly passed
      />
    </div>
  );
}

export default App;
