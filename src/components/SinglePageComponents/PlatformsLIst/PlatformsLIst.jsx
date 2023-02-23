import React from 'react';
import cn from "./PlatfomsLIst.module.scss";
import {useSelector} from "react-redux";

const PlatformsLIst = () => {

  const {platforms,reddit,website} = useSelector(state => state.singleGame.singleGame);

  const renderPlatforms =
    platforms &&
    platforms.map((item) => (
      <li key = {item.platform.id} className = {cn["platforms__item"]}>
        {item.platform.name}
      </li>
    ));

  return (
    <div className = {cn['platforms-box']}>
      {(reddit || website) &&
        <div className = {cn.links}>
          <h2>Wed Sites</h2>
          {reddit && <a
            href = {reddit}
            title = {reddit}
            rel = "noopener noreferrer"
            target = "_blank"
            tabIndex = '0'
          >
            Reddit
          </a>}
          {website && <a
            href = {website}
            title = {website}
            rel = "noopener noreferrer"
            target = "_blank"
            tabIndex = "0"
          >
            Game website
          </a>
          }
        </div>
      }
      <div className = {cn.platforms}>
        <p className = {cn["platforms-title"]}>Platforms</p>
        <ul className = {cn["platforms-list"]}>{renderPlatforms}</ul>
      </div>
    </div>
  );
};

export default PlatformsLIst;