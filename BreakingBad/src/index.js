import "./styles.css";
import {
  getBreakingBadCharacters,
  getCharacter,
  getBreakingBadEpisodes,
} from "./data-business.js";
import { createCharacterRow } from "./utils";
import { showEpisodes } from "./extra-utils";

getBreakingBadCharacters().then((data) => {
  const element = document.querySelector("#root");
  element.innerText = "";
  for (let character of data) {
    const elementCharacter = createCharacterRow(character);
    elementCharacter.id = character.char_id;
    elementCharacter.addEventListener("click", getCharacter);

    element.appendChild(elementCharacter);
  }
});

getBreakingBadEpisodes().then((data) => {
  const element = document.querySelector("#episodes");
  element.innerText = "";
  for (let episode of data) {
    const elementEpisode = showEpisodes(episode);

    element.appendChild(elementEpisode);
  }
});
