const textReply = (music) => {
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
    return text;
};

module.exports = { textReply }