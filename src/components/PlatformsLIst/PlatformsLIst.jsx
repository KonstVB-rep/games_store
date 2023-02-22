import React from 'react';
import cn from "./PlatfomsLIst.module.scss";

const PlatformsLIst = ({platforms,reddit,website}) => {

  const renderPlatforms =
    platforms &&
    platforms.map((item) => (
      <li key = {item.platform.id} className = {cn["platforms__item"]}>
        {item.platform.name}
      </li>
    ));

  return (
    <div className = {cn['platforms-box']}>
      <div className = {cn.links}>
        <h2>Wed Sites</h2>
        <a
          href = {reddit}
          title = {reddit}
          rel = "noopener noreferrer"
          target = "_blank"
          tabIndex='0'
        >
          Reddit
        </a>
        <a
          href = {website}
          title = {website}
          rel = "noopener noreferrer"
          target = "_blank"
          tabIndex='0'
        >
          Game website
        </a>
      </div>
      <div className = {cn.platforms}>
        <p className = {cn["platforms-title"]}>Platforms</p>
        <ul className = {cn["platforms-list"]}>{renderPlatforms}</ul>
      </div>
    </div>
  );
};

export default PlatformsLIst;