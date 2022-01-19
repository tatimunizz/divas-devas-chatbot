const { test, expect, describe, it } = require("@jest/globals");
const { textReply } = require("../functions/textReply");

const music = {
  artist: "artist",
  title: "2",
  album: "1",
};
const text = `Artista: *${music.artist}*\nTítulo: *${music.title}*\nÁlbum: *${music.album}*\n`;

describe("Retorna a resposta com a musica", () => {
  it("Monta o menu com os atributos do artista", () => {
    expect(textReply(music)).toEqual(text);
  });
});
