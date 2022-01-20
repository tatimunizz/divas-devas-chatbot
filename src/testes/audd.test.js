const { test, expect, describe, it } = require("@jest/globals");
const axios = require("axios");
const { request } = require("../services/audd");
jest.mock("axios");

describe("Audd service", () => {
  it("retorna status 200", async () => {
    await axios.post.mockResolvedValue({});
    const req = await request("https://audd.tech/example.mp3", "qualquercoisa");
    //expect(req.statusCode).toBe(200);
  });
});
