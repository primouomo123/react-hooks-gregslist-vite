import React, { useEffect, useState } from "react";
import Header from "./Header";
import ListingForm from "./ListingForm";
import ListingsContainer from "./ListingsContainer";

function App() {  
  const [listings, setListings] = useState([])

  useEffect(() => {
    fetch("http://localhost:6001/listings")
      .then(r => {
        if (!r.ok) {throw new Error("failed to get listings") }
        return r.json()
      })
      .then(setListings)
      .catch(error => console.log(error.message))
  }, []);

  const addListing = newListing => setListings(previousListings => [...previousListings, newListing])

  const updateListing = updatedListing => setListings(previousListings => previousListings.map(listing => listing.id === updatedListing.id ? updatedListing : listing))

  // define function to delete a listing in state
  const deleteListing = deletedListingId => setListings(previousListings => previousListings.filter(listing => listing.id !== deletedListingId))
  
  return (
    <div className="app">
      <Header />
      <ListingForm addListing={addListing} />
      <ListingsContainer listings={listings} updateListing={updateListing} deleteListing={deleteListing} /> { /* pass deleteListing as a prop */ }
    </div>
  );
}

export default App;
