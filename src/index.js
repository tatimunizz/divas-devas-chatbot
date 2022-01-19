const dotenv = require('dotenv');
const { Client } = require('@zenvia/sdk');
const { webhookController } = require('./controllers/webhookController');

dotenv.config();
const client = new Client(process.env.ZENVIA_TOKEN);
const whatsapp = client.getChannel("whatsapp");
const webhook = webhookController(whatsapp, process.env.AUDD_TOKEN);

webhook.on("listening", () => {
  console.log("Webhook is listening");
});

webhook.init();