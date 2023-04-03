const axios = require("axios");

axios
  .get("https://api.xoxno.com/nfts/SRC-27d8ff-0a0f")
  .then((response) => {
    const saleInfoNft = response.data.saleInfoNft;
    console.log(saleInfoNft);
  })
  .catch((error) => {
    console.log(error);
  });
