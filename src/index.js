const dotenv = require("dotenv");
const { Client, TextContent, WebhookController } = require("@zenvia/sdk");

dotenv.config();

const client = new Client(process.env.ZENVIA_TOKEN);

const whatsapp = client.getChannel("whatsapp");

/*
movido para controllers/audios.js
const webhook = new WebhookController({
    messageEventHandler: (messageEvent) => {
        console.log('Message event:', messageEvent);

        const content = new TextContent('Testado');

        whatsapp.sendMessage(messageEvent.message.to, messageEvent.message.from, content)
            .then(response => {
                console.log('Response:', response);
            });
    },
    channel: 'whatsapp',
}); */

webhook.on("listening", () => {
  console.log("Webhook is listening");
});

webhook.init();
