export const normalizeCardNumber = (value) => {
    return (
        value
            .replace(/[^\d]/g, '')
            .match(/.{1,4}/g)
            ?.join(' ')
            .substring(0, 19) || ''
    );
};
