import React from "react";
import cn from "./MediaContent.module.scss";

const MediaContent = ({ img, reddit, website, platforms }) => {
  const renderPlatforms =
    platforms &&
    platforms.map((item) => (
      <li key={item.platform.id} className={cn["platforms__item"]}>
        {item.platform.name}
      </li>
    ));

  return (
    <div className={cn.media}>
      <div className={cn["img-box"]}>
        <img src={img} alt="Poster" />
      </div>
      <div className={cn.links}>
        <a
          href={reddit}
          title={reddit}
          rel="noopener noreferrer"
          target="_blank"
        >
          Reddit
        </a>
        <a
          href={website}
          title={website}
          rel="noopener noreferrer"
          target="_blank"
        >
          Game website
        </a>
      </div>
      <div className={cn.platforms}>
        <p className={cn["platforms-title"]}>Platforms:</p>
        <ul className={cn["platforms-list"]}>{renderPlatforms}</ul>
      </div>
    </div>
  );
};

export default MediaContent;
