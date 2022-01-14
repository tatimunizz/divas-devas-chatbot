const { test, expect, describe, it } = require("@jest/globals");
const { textReply } = require("../functions/textReply");
const music = {
  artist: "1",
  title: "2",
  album: "1",
};

test("deve retornar um objeto com artista, titulo e album", () => {
  expect(textReply(music).toEqual(music));
});
