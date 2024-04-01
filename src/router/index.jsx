import React from 'react';

import HomePage from 'pages/HomePage';
import { createBrowserRouter } from 'react-router-dom';

import App from '../App';

import { singlePageLoader } from '../pages/SinglePage';

const SearchPage = React.lazy(() => import('../pages/SearchPage'));
const ErrorPage = React.lazy(() => import('../pages/ErrorPage'));
const SinglePage = React.lazy(() => import('../pages/SinglePage'));
const Favorites = React.lazy(() => import('../pages/Favorites'));
const CartPage = React.lazy(() => import('../pages/CartPage'));
const GenresPage = React.lazy(() => import('../pages/GenresPage'));
const ShopPage = React.lazy(() => import('../pages/ShopPage'));

export const router = createBrowserRouter([
    {
        element: <App />,
        children: [
            {
                path: '/games_store',
                element: <HomePage />,
                errorElement: <ErrorPage id="error" />,
            },
            {
                path: '/games',
                element: <ShopPage />,
                errorElement: <ErrorPage id="error" />,
            },
            {
                path: '/games/:name',
                element: <SinglePage />,
                errorElement: <ErrorPage id="error" />,
                loader: singlePageLoader,
            },
            {
                path: '/search',
                element: <SearchPage />,
                errorElement: <ErrorPage id="error" />,
            },
            {
                path: '/cart',
                element: <CartPage />,
                errorElement: <ErrorPage id="error" />,
            },
            {
                path: '/favorites',
                element: <Favorites />,
                errorElement: <ErrorPage id="error" />,
            },
            {
                path: '/genres_description',
                element: <GenresPage />,
                errorElement: <ErrorPage id="error" />,
            },
            {
                path: '*',
                element: <ErrorPage id="notFound" />,
                errorElement: <ErrorPage id="error" />,
            },
            {
                path: '/error',
                element: <ErrorPage id="error" />,
            },
        ],
    },
]);
