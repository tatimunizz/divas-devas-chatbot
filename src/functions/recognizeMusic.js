const { request } = require("../services/audd");

const recognizeMusic = async (url, token) => {
  try {
    const response = await request(url, token);
    const audd = response.result;
    return {
      artist: audd.artist,
      title: audd.title,
      album: audd.album,
      deezer: {
        picture:
          audd.deezer && audd.deezer.artist
            ? audd.deezer.artist.picture_medium
            : undefined,
        preview: audd.deezer ? audd.deezer.preview : undefined,
      },
    };
  } catch (error) {
    throw error;
  }
};

module.exports = { recognizeMusic };
