const randomNumber = (min, max) => {
  const number =
    ((Math.floor(Math.random() * (max - min + 1)) + min) / 100).toFixed() * 100;
  return number;
};

export const transformData = (data) => {
  return {
    id: data.id,
    name: data.name,
    img: data["background_image"],
    genres: data.genres,
    rating: data.rating,
    ratingsCount: data["ratings_count"],
    released: data.released,
    price: randomNumber(1200, 3500),
  };
};
