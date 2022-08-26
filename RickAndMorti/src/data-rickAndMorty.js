/**
 *  Base url: "https://rickandmortyapi.com/api"
 * // characters: "https://rickandmortyapi.com/api/character"
 * // locations: "https://rickandmortyapi.com/api/location"
 * // episodes: "https://rickandmortyapi.com/api/episode"
 *
 *  */

import { showCharacter } from "./utils";
import { showMoreEpisodes, showMoreCharacters } from "./extra-utils";
import axios from "axios";

const base = "https://rickandmortyapi.com/api/";
const ApiError = (api) => (error) => {
  console.log("Se ha producido un error en la api de : ", api);
  console.log("Estado del error: ", error);
};

let data = { characters: `${base}character/`, episodes: `${base}episode/` };

export function getRickMortyCharacters() {
  return axios
    .get(data.characters)
    .then((response) => response.data)
    .catch(ApiError(data.characters));
}

export function getRickMortyEpisodes() {
  return axios
    .get(data.episodes)
    .then((response) => response.data)
    .catch(ApiError(data.episodes));
}

export function getMoreEpisodes(page) {
  return axios
    .get(page)
    .then((response) => showMoreEpisodes(response.data))
    .catch(ApiError(page));
}

export function getMoreCharacters(page) {
  return axios
    .get(page)
    .then((response) => showMoreCharacters(response.data))
    .catch(ApiError(page));
}

export function getCharacter(e) {
  let num = e.target.nodeName === "DIV" ? e.target.id : e.target.parentNode.id;
  let character = `${base}character/${num}`;
  axios
    .get(character)
    .then((response) => showCharacter(response.data))
    .catch(ApiError(character));
}
