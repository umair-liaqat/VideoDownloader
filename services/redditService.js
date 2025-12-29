const axios = require("axios");

async function redditDownloader(url) {
  try {
    const res = await axios.post(
      "https://submagic-free-tools.fly.dev/api/reddit-download",
      { url },
      {
        headers: {
          accept: "*/*",
          "content-type": "application/json",
          referer: "https://submagic-free-tools.fly.dev/reddit-downloader",
        },
      }
    );

    return res.data.videoFormats[0].url; // Assuming you want the first video format URL
    // return res.data;
  } catch (err) {
    throw new Error(err.message);
  }
}

module.exports = redditDownloader;
