import { randomNumber } from './randomNumber';

export const transformData = (data) => {
    return {
        description: data?.description_raw,
        genres: data.genres,
        id: data.id,
        img: data['background_image'],
        name: data.name,
        price: randomNumber(5, 50),
        rating: data.rating,
        ratingsCount: data['ratings_count'],
        released: data.released,
        slug: data.slug,
        totalCount: 0,
    };
};

export const transformDataItem = (data) => {
    return {
        ...transformData(data),
        preview: data.preview,
        developers: data.developers,
        platforms: data.platforms,
        reddit: data['reddit_url'],
        website: data.website,
    };
};

export const getNameAndImg = (obj) => {
    return {
        id: obj.id,
        img: obj.background_image,
        name: obj.name,
    };
};
