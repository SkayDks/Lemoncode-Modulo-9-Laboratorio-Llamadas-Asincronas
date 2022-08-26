/**
 *  Base url: "https://www.breakingbadapi.com/api/"
 * // characters: "https://breakingbadapi.com/api/characters"
 * // deaths: "https://breakingbadapi.com/api/deaths"
 * // episodes: "https://breakingbadapi.com/api/episodes"
 * // quotes: "https://breakingbadapi.com/api/quotes"
 *
 * */
import { showCharacter } from "./utils";
import { showExtraInformation } from "./extra-utils";

const base = "https://breakingbadapi.com/api/";

const ApiError = (api) => (error) => {
  console.log("Se ha producido un error en la api de : ", api);
  console.log("Estado del error: ", error);
};

let data = { characters: `${base}characters/`, episodes: `${base}episodes/` };

export function getBreakingBadCharacters() {
  return fetch(data.characters)
    .then((response) => response.json())
    .catch(ApiError(data.characters));
}

export function getBreakingBadEpisodes() {
  return fetch(data.episodes)
    .then((response) => response.json())
    .catch(ApiError(data.episodes));
}

export function getCharacter(e) {
  let character = `${base}characters/${e.target.id}`;
  let quotes;
  fetch(character)
    .then((response) => response.json())
    .then((data) => {
      quotes = `${base}quote/random?author=${data[0].name.replace(" ", "+")}`;
      showCharacter(data[0]);
      fetch(quotes)
        .then((response) => response.json())
        .then((data) => showExtraInformation(data))
        .catch(ApiError(quotes));
    })
    .then()
    .catch(ApiError(character));
}
