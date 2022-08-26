import { getMoreEpisodes, getMoreCharacters, getCharacter } from "./data-rickAndMorty";
import { createParagraph,createCharacterRow } from "./utils";

const createDoubleParagraph = (text) => {
  const element = document.createElement("p");
  let arrayText = text.split("S")[1].split("E");
  element.append(`Season: ${arrayText[0]} / Episode: ${arrayText[1]}`);
  return element;
};

export const showEpisodes = (episodes) => {
  const episodesDetail = document.createElement("div");
  episodesDetail.appendChild(createDoubleParagraph(episodes.episode));
  episodesDetail.appendChild(createParagraph("Title: " + episodes.name));

  return episodesDetail;
};

export const showMoreEpisodes = (episodes) => {
  const element = document.querySelector("#episodes");
  for (let episode of episodes.results) {
    const elementEpisode = showEpisodes(episode);
    element.appendChild(elementEpisode);
  }
  if (episodes.info.next) getMoreEpisodes(episodes.info.next);  
};

export const showMoreCharacters = (characters) => {
  const element = document.querySelector("#root");
  console.log(characters)
  for (let character of characters.results) {
    elementCharacter = createCharacterRow(character);
    elementCharacter.id = character.id;
    elementCharacter.addEventListener("click", getCharacter);

    element.appendChild(elementCharacter);
  }
  if (characters.info.next.slice(-1) < 5) getMoreCharacters(characters.info.next);  
};
