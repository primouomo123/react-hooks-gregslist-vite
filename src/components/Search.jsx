function Search({ onSearch }) {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        onChange={(e) => onSearch(e.target.value)} // ✅ updates search state
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
