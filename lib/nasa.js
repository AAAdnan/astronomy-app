export const getNasaPhotos = async (query) => {
    const res = await fetch(`https://images-api.nasa.gov/search?media_type=image&q=${query}`)

    const previews = await res.json();

    return previews.collection.items
  };

  export const getNasaPhotosByID = async (id) => {
    const res = await fetch(`https://images-api.nasa.gov/search?media_type=image&nasa_id=${id}`)

    const previews = await res.json();

    return previews.collection.items
  };