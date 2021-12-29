const webhook = () => {
  const webhook = new WebhookController({
    channel: "whatsapp",
    messageEventHandler: async (messageEvent) => {
      let content = [new TextContent("Testado")];

      if (
        messageEvent.message.contents[0].type === "file" &&
        messageEvent.message.contents[0].fileMimeType.includes("audio")
      ) {
        const music = await recognizeMusic(
          messageEvent.message.contents[0].fileUrl
        );

        if (music) {
          let text = "";
          if (music.artist) {
            text = `${text}Artista: *${music.artist}*\n`;
          }
          if (music.title) {
            text = `${text}Título: *${music.title}*\n`;
          }
          if (music.album) {
            text = `${text}Álbum: *${music.album}*\n`;
          }
          content = [new TextContent(text)];
          if (music.deezer && music.deezer.picture) {
            content.push(new FileContent(music.deezer.picture, "image/jpeg"));
          }
          if (music.deezer && music.deezer.preview) {
            content.push(new FileContent(music.deezer.preview, "audio/mpeg"));
          }
        } else {
          content = [
            new TextContent("Não foi possível identificar a música do áudio."),
          ];
        }
      }

      whatsapp
        .sendMessage(
          messageEvent.message.to,
          messageEvent.message.from,
          ...content
        )
        .then((response) => {
          console.debug("Response:", response);
        });
    },
  });

  return webhook;
}

module.exports = { webhook };
