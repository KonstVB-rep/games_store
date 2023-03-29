import React from 'react';
import {useSelector} from "react-redux";
import {selectFavorites} from "../../../store/games/gamesSlice";
import CardFavorite from "../CardFavorite/CardFavorite";
import {TitleEmptyPage} from "../../TitleEmptyPage";
import cn from "../../../pages/Favorites/Favorites.module.scss";

const FavoritesList = () => {

  const favoritesList = useSelector(selectFavorites);

  const renderFavoritesList = favoritesList.map((item) => (
    <CardFavorite key={item.id} id={item.id}/>
  ));


  return (
    <>
      {renderFavoritesList.length ?
     <>
       <h1 className='visually-hidden'>list of favorites games</h1>
       <div className = {cn.favorites__content}>{renderFavoritesList}</div>
     </>
        :
        <TitleEmptyPage text='The favorites list is empty'/>}
    </>
  );
};

export default FavoritesList;