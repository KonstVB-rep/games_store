export const getData = async (url, cb, rejectWithValue = undefined) => {
    try {
        const response = await fetch(url);

        if (!response.ok) {
            throw new Error('Fetch request failed');
        }
        const resJson = await response.json();
        if (resJson.results) {
            return cb ? resJson.results.map(cb) : resJson.results;
        }
        return cb ? cb(resJson) : resJson;
    } catch (err) {
        return rejectWithValue ? rejectWithValue(err.message) : err.message;
    }
};
