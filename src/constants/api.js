const API_KEY = "?key=22fdfec2e02f483cba9a0e990b0bab8b";
const BASE_URL = "https://api.rawg.io/api/games";
export const PATH = {
  GAMES_URL: `${BASE_URL}${API_KEY}`,
  SINGLE_GAME_URL: (slug) => `${BASE_URL}/${slug}${API_KEY}`,
  MOVIES_URL: (id) => `${BASE_URL}/${id}/movies${API_KEY}`,
};
