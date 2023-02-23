const API_KEY = "key=22fdfec2e02f483cba9a0e990b0bab8b";
const BASE_URL = "https://api.rawg.io/api/games";
export const PATH = {
  GAMES_URL: (page = 1) => `${BASE_URL}?page=${page}&page_size=6&${API_KEY}`,
  SINGLE_GAME_URL: (slug) => `${BASE_URL}/${slug}?${API_KEY}`,
  SEARCH_GAMES: (query) => `${BASE_URL}?search=${query}&${API_KEY}`
};
