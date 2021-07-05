export const postAdService = {
  postAd,
};

function postAd(ad) {
  return axios.post(`http://localhost:4000/api/apps/1001/users/2101/ads`, ad, {
    headers: { "Content-Type": "application/json" },
  });
}
