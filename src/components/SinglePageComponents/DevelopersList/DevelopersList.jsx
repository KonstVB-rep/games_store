import React from 'react';
import cn from "../TextContent/TextContent.module.scss";

const DevelopersList = ({developers}) => {

  const renderDevelopers = developers && developers.map((item) => <li key = {item.id}>{item.name}</li>);
  return (
    <div className = {cn.develops}>
      {developers.length ?
        <>
          <p>Developers:</p>
          <ul className = {cn.develops__list}>
            {renderDevelopers}
          </ul>
        </> : null}
    </div>
  );
};

export default DevelopersList;