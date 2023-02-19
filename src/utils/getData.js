export const getData = async (url, cb, rejectWithValue = undefined) => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Fetch request failed");
    }
    const resJson = await response.json();
    if (resJson.results) {
      return resJson.results.map(cb);
    }
    return cb(resJson);
  } catch (err) {
    return rejectWithValue ? rejectWithValue(err.message) : err.message;
  }
};
