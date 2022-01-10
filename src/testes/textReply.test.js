const { test, expect, describe, it } = require("@jest/globals");
const { textReply } = require("../functions/textReply");
jest.mock("axios");
const mocked =  
music: {
    artist: "Imagine Dragons"
    title: "Warriors"
    album: "Warriors"
  
}

test("deve retornar um objeto com artista, titulo e album", () => {
  expect(textReply(mocked).toEqual(mocked)
},
);
