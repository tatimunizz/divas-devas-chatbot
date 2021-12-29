# divas-devas-chatbot



## WhatsApp chatbot using Node.js

Example application using [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) and [Node.js](https://nodejs.org/) where a simple chatbot will be implemented using the [Zenvia](https://www.zenvia.com/) platform to integrate with WhatsApp and the [AudD](https://audd.io/) platform to integrate with music recognize in order to test some WhatsApp Business API features such as sending and receiving text and file (image and audio) messages. 



## Prerequisites


Before you start, you need to install and configure the tools and services:

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/))
* [Zenvia](https://app.zenvia.com/) account
* [AudD](https://audd.io/) account
* [ngrok](https://dashboard.ngrok.com/signup) account

## Dependencies

```npm install dotenv express axios```

## Getting started


**1.** Clone the repository.

```shell
git clone git@github.com:tatimunizz/devas-devas-chatbot.git
```

**2.** Install the dependencies.

```shell
npm ci
```

**3.** Change the `.env` file and add the [Zenvia](https://app.zenvia.com/home/api) and [AudD](https://dashboard.audd.io/) tokens. 

**4.** Run the application.

```shell
npm start
```