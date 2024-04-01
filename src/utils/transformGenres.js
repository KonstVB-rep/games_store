export const transformGenres = (data) => {
    if (!data) return {};

    return {
        id: data.id,
        name: data.name,
        slug: data.slug,
    };
};
