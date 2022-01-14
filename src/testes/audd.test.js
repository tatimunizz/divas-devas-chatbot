const { test, expect, describe, it } = require("@jest/globals");
const axios = require("axios");
const { request } = require("../services/audd");
jest.mock("axios");

describe("Audd service", () => {
  it("retorna info de uma musica", async () => {
    await axios.post.mockResolvedValue({
      /*data: {
        status: "success",
        result: {
          artist: "Imagine Dragons",
          title: "Warriors",
          album: "Warriors",
          release_date: "2014-09-18",
          label: "Universal Music",
          timecode: "02:32",
          song_link: "https://lis.tn/Warriors",
          apple_music: {
            previews: [
              {
                url: "https://audio-ssl.itunes.apple.com/itunes-assets/AudioPreview118/v4/65/07/f5/6507f5c5-dba8-f2d5-d56b-39dbb62a5f60/mzaf_1124211745011045566.plus.aac.p.m4a",
              },
            ],
            artwork: {
              width: 1500,
              height: 1500,
              url: "https://is2-ssl.mzstatic.com/image/thumb/Music128/v4/f4/78/f5/f478f58e-97cf-83b5-b5da-03d31f14e648/00602547623805.rgb.jpg/{w}x{h}bb.jpeg",
              bgColor: "7f5516",
              textColor1: "ffe2aa",
              textColor2: "f8e0bd",
              textColor3: "e5c58c",
              textColor4: "e0c59c",
            },
            artistName: "Imagine Dragons",
            url: "https://music.apple.com/us/album/warriors/1440831203?i=1440831624",
            discNumber: 1,
            genreNames: ["Alternative", "Music"],
            durationInMillis: 170799,
            releaseDate: "2014-09-18",
            name: "Warriors",
            isrc: "USUM71414163",
            albumName: "Smoke + Mirrors (Deluxe)",
            playParams: {
              id: "1440831624",
              kind: "song",
            },
            trackNumber: 18,
            composerName: "Imagine Dragons, Alex Da Kid & Josh Mosser",
          },
          spotify: {
            album: {
              album_type: "album",
              artists: [
                {
                  external_urls: {
                    spotify:
                      "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
                  },
                  href: "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
                  id: "53XhwfbYqKCa1cC15pYq2q",
                  name: "Imagine Dragons",
                  type: "artist",
                  uri: "spotify:artist:53XhwfbYqKCa1cC15pYq2q",
                },
              ],
              available_markets: null,
              external_urls: {
                spotify:
                  "https://open.spotify.com/album/6ecx4OFG0nlUMqAi9OXQER",
              },
              href: "https://api.spotify.com/v1/albums/6ecx4OFG0nlUMqAi9OXQER",
              id: "6ecx4OFG0nlUMqAi9OXQER",
              images: [
                {
                  height: 640,
                  url: "https://i.scdn.co/image/d3acaeb069f37d8e257221f7224c813c5fa6024e",
                  width: 640,
                },
                {
                  height: 300,
                  url: "https://i.scdn.co/image/b039549954758689330893bd4a92585092a81cf5",
                  width: 300,
                },
                {
                  height: 64,
                  url: "https://i.scdn.co/image/67407947517062a649d86e06c7fa17670f7f09eb",
                  width: 64,
                },
              ],
              name: "Smoke + Mirrors (Deluxe)",
              release_date: "2015-10-30",
              release_date_precision: "day",
              total_tracks: 21,
              type: "album",
              uri: "spotify:album:6ecx4OFG0nlUMqAi9OXQER",
            },
            artists: [
              {
                external_urls: {
                  spotify:
                    "https://open.spotify.com/artist/53XhwfbYqKCa1cC15pYq2q",
                },
                href: "https://api.spotify.com/v1/artists/53XhwfbYqKCa1cC15pYq2q",
                id: "53XhwfbYqKCa1cC15pYq2q",
                name: "Imagine Dragons",
                type: "artist",
                uri: "spotify:artist:53XhwfbYqKCa1cC15pYq2q",
              },
            ],
            available_markets: null,
            disc_number: 1,
            duration_ms: 170066,
            explicit: false,
            external_ids: {
              isrc: "USUM71414163",
            },
            external_urls: {
              spotify: "https://open.spotify.com/track/1lgN0A2Vki2FTON5PYq42m",
            },
            href: "https://api.spotify.com/v1/tracks/1lgN0A2Vki2FTON5PYq42m",
            id: "1lgN0A2Vki2FTON5PYq42m",
            is_local: false,
            name: "Warriors",
            popularity: 66,
            track_number: 18,
            type: "track",
            uri: "spotify:track:1lgN0A2Vki2FTON5PYq42m",
          },
        },
      }, */
    });
    const artist = await request(
      "https://audd.tech/example.mp3",
      "qualquercoisa"
    );
    //expect(artist).toEqual("Imagine Dragons");
  });
});
