import React from 'react';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import { singlePageLoader } from '../pages/SinglePage';
import MainPage from 'pages/MainPage';

const SearchPage = React.lazy(() => import('../pages/SearchPage'));
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));
const SinglePage = React.lazy(() => import('../pages/SinglePage'));
const Favorites = React.lazy(() => import('../pages/Favorites'));
const CartPage = React.lazy(() => import('../pages/CartPage'));
const GenresPage = React.lazy(() => import('../pages/GenresPage'));

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/games_store',
                element: <MainPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/games/:name',
                element: <SinglePage />,
                errorElement: <ErrorPage />,
                loader: singlePageLoader,
            },
            {
                path: '/search',
                element: <SearchPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/cart',
                element: <CartPage />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/favorites',
                element: <Favorites />,
                errorElement: <ErrorPage />,
            },
            {
                path: '/genres_description',
                element: <GenresPage />,
                errorElement: <ErrorPage />,
            },
        ],
    },
]);
