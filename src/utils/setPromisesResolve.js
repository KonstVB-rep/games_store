export const setPromisesResolve = (arr, cb) => {
    if (!arr) return Promise.resolve([]);
    const result = [];
    const promises = arr.map(cb);
    return Promise.all(promises).then((data) => {
        for (let i = 0; i < data.length; i++) {
            result.push(data[i]);
        }

        return result;
    });
};
