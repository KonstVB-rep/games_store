export const createDateInterval = (interval) => {
    let d = new Date();

    const nowDate = new Date().toLocaleDateString().split('.').reverse().join('-');
    const pastDate = new Date(d.setDate(d.getDate() - interval))
        .toLocaleDateString()
        .split('.')
        .reverse()
        .join('-');

    return `${pastDate},${nowDate}`;
};
