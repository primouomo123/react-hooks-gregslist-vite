const ListingForm = () => {
    return (
        <div className="form-container">
            <p>Create a New Listing</p>
            <form>
                <label htmlFor="new-desc">Description:</label>
                <input id="new-desc" type="text" name="description" placeholder="description" />
                <label htmlFor="new-img">Image URL:</label>
                <input id="new-img" type="text" name="image" placeholder="image" />
                <label htmlFor="new-loc">Location:</label>
                <input id="new-loc" type="text" name="location" placeholder="location" />
                <input type="submit" value=" Create Listing "/>
            </form>
        </div>
    );
}

export default ListingForm;
