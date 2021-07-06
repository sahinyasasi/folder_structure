import axios from "../utils/axios";
export const apiService = {
  getLatLong,
};

function getLatLong(place_id) {
  return axios.get(
    `https://maps.googleapis.com/maps/api/geocode/json?place_id=${place_id}&key=AIzaSyA-SvePR8DwM531CEbfJAipwszxCJwdvXk`
  );
}
