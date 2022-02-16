import camelize from "camelize";

export const locationRequest = (searchTerm) => {
  return fetch(
    `http://192.168.100.2:5001/mealstogo-dd099/us-central1/geocode?city=${searchTerm}`
  ).then((res) => {
    return res.json();
  });
};

export const locationTransform = (result) => {
  const formattedResponse = camelize(result);
  const { geometry = {} } = formattedResponse.results[0];
  const { lat, lng } = geometry.location;

  return { lat, lng, viewport: geometry.viewport };
};
