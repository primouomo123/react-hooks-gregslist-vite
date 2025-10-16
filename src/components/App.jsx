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

  // define function to add listing to state
  const addListing = newListing => setListings(previousListings => [...previousListings, newListing])
  
  return (
    <div className="app">
      <Header />
      <ListingForm addListing={addListing} /> { /* pass addListing as a prop */ }
      <ListingsContainer listings={listings} />
    </div>
  );
}

export default App;
