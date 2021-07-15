import axios from "../utils/axios";
export const apiService = {
  getLatLong,
  listCarBrands,
  listCarModels,
  listCarVariants,
};

function getLatLong(place_id) {
  return axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=AIzaSyA-SvePR8DwM531CEbfJAipwszxCJwdvXk`
  );
}
function listCarBrands() {
  return axios.get(`http://localhost:4000/api/attrs/brands`);
}

function listCarModels(brand) {
  return axios.get(`http://localhost:4000/api/attrs/models/${brand}`);
}
function listCarVariants(brand, model) {
  return axios.get(
    `http://localhost:4000/api/attrs/variants/${brand}/${model}`
  );
}
