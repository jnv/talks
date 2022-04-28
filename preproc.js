// headings trigger a new slide
// headings with a caret (e.g., '##^ foo`) trigger a new vertical slide
// https://github.com/webpro/reveal-md/#pre-process-markdown

function convertUrl(givenUrl) {
  if (givenUrl.includes("//giphy.com")) {
    // https://giphy.com/gifs/g-help-11Wkoq2MaUbLXi
    const matches = givenUrl.match(/\w+$/);
    const id = matches[0];
    // https://media.giphy.com/media/11Wkoq2MaUbLXi/giphy.mp4
    return `https://media.giphy.com/media/${id}/giphy.mp4`;
  }
  if (givenUrl.includes("/media.giphy.com") && givenUrl.endsWith(".gif")) {
    return givenUrl.replace(/\.gif$/, ".mp4");
  }
  return givenUrl;
}

function slideVidBg(bgUrl) {
  return `<!-- .slide: data-background-video="${bgUrl}" data-background-video-loop="loop" data-background-size="contain" data-background-video-muted -->`;
}

module.exports = (markdown, options) => {
  return new Promise((resolve, reject) => {
    return resolve(
      markdown
        .split("\n")
        .map((line, index) => {
          if (!line.startsWith("vidbg: ") || index === 0) {
            return line;
          }
          const match = line.match(/^vidbg: (.*)$/);
          return slideVidBg(convertUrl(match[1]));
        })
        .join("\n")
    );
  });
};
