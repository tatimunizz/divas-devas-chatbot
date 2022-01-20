# divas-devas-chatbot

Aplicação desenvolvida com base no [tutorial](https://www.zenvia.com/blog/developers/whatsapp-bot-nodejs/) da Zenvia de chatbot que reconhece uma música e retorna informações sobre a mesma.


## Chatbot WhatsApp com Node.js

Exemplo de aplicação em [JavaScript](https://developer.mozilla.org/docs/Web/JavaScript) e [Node.js](https://nodejs.org/) no qual o chatbot é implementado utilizando o sandbox da [Zenvia](https://www.zenvia.com/) que integra com o Whatsapp e com a [AudD](https://audd.io/), uma plataforma que fornece uma API que realiza o reconhecimento de músicas para testar features no WhatsApp Business API, tais como receber e enviar mensagens de audio



## Pré-requisitos


Antes de iniciar, é necessário instalar e configurar os seguintes serviços: 

* [git](https://git-scm.com/)
* [Node.js and npm](https://nodejs.org/)
* IDE (e.g. [Visual Studio Code](https://code.visualstudio.com/))
* [Zenvia](https://app.zenvia.com/) - crie uma conta
* [AudD](https://audd.io/) - crie uma conta
* [localtunnel](https://github.com/localtunnel/localtunnel)
* [Docker]

## Dependências

```npm install dotenv express axios```
```npm install --save-dev jest```

## Inicio


**1.** Clone o repositório.

```shell
git clone git@github.com:tatimunizz/devas-devas-chatbot.git
```

**2.** Instale as dependências.

```shell
npm i
```

**3.** Modifique o arquivo `.env-example` para `.env` e adicione os tokens da [Zenvia](https://app.zenvia.com/home/api) e  [AudD](https://dashboard.audd.io/) para utilizar a aplicação. 

**4.** Execute a aplicação.

No terminal, execute o comando:
```shell
npm run dev
```
