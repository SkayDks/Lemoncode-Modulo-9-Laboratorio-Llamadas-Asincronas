import { createParagraph } from "./utils";

export const showExtraInformation = (quotes) => {
  const characterDetail = document.getElementById("character-detail");
  console.log(quotes);
  characterDetail.appendChild(createParagraph("Quote: " + quotes[0].quote));
};

const createDoubleParagraph = (textA, textB) => {
  const element = document.createElement("p");
  element.append(textA, " / ", textB);
  return element;
};

export const showEpisodes = (episodes) => {
  const episodesDetail = document.createElement("div");
  episodesDetail.appendChild(createParagraph("Serie: " + episodes.series));
  episodesDetail.appendChild(
    createDoubleParagraph(
      "Season: " + episodes.season,
      "Episode: " + episodes.episode
    )
  );
  episodesDetail.appendChild(createParagraph("Title: " + episodes.title));

  return episodesDetail;
};
