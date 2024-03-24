const API_KEY = 'key=22fdfec2e02f483cba9a0e990b0bab8b';
const BASE_URL = 'https://api.rawg.io/api';

export const PATH = {
    GAMES_URL: (page = 1) => `${BASE_URL}/games?page=${page}&page_size=6&${API_KEY}`,
    SINGLE_GAME_URL: (slug) => `${BASE_URL}/games/${slug}?${API_KEY}`,
    SEARCH_GAMES: (query) => `${BASE_URL}/games?search=${query}&${API_KEY}`,
    GAME_SERIES: (id) => `${BASE_URL}/games/${id}/game-series?${API_KEY}`,
    GAME_SCREENSHOTS: (id) => `${BASE_URL}/games/${id}/screenshots?${API_KEY}`,
    GAME_GENRES: () => `${BASE_URL}/genres?${API_KEY}`,
    GENRE_DESCRIPTION: (id) => `${BASE_URL}/genres/${id}?${API_KEY}`,
};
