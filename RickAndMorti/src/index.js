import "./styles.css";
import {
  getRickMortyCharacters,
  getCharacter,
  getRickMortyEpisodes,
  getMoreEpisodes,
  getMoreCharacters,
} from "./data-rickAndMorty";
import { createCharacterRow } from "./utils";
import { showEpisodes } from "./extra-utils";

getRickMortyCharacters().then((data) => {
  console.log(data);
  let element = document.querySelector("#root");
  element.innerText = "";
  for (let character of data.results) {
    elementCharacter = createCharacterRow(character);
    elementCharacter.id = character.id;
    elementCharacter.addEventListener("click", getCharacter);

    element.appendChild(elementCharacter);
  }
  getMoreCharacters(data.info.next);
});

getRickMortyEpisodes().then((data) => {
  const element = document.querySelector("#episodes");
  element.innerText = "";
  for (let episode of data.results) {
    const elementEpisode = showEpisodes(episode);
    element.appendChild(elementEpisode);
  }
  getMoreEpisodes(data.info.next);
});
