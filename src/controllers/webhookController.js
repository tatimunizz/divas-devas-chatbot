const { FileContent, TextContent, WebhookController } = require('@zenvia/sdk');
const { recognizeMusic } = require('../functions/recognizeMusic');
const { textReply } = require('../functions/textReply');

const webhookController = (whatsapp, token) => {
    const webhook = new WebhookController({
        channel: "whatsapp",
        messageEventHandler: async (messageEvent) => {
            let content;

            if (
                messageEvent.message.contents[0].type === "file" &&
                messageEvent.message.contents[0].fileMimeType.includes("audio")
            ) {
                const music = await recognizeMusic(messageEvent.message.contents[0].fileUrl, token);

                if (music) {
                    const text = textReply(music);
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

module.exports = { webhookController };