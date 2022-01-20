const axios = require("axios");

const request = async (url, token) => {
  const response = await axios.post({
    //method: "post",
    url: "https://api.audd.io/",
    data: {
      api_token: token,
      url: url,
      return: "deezer",
    },
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
  return response.data;
};

module.exports = { request };
