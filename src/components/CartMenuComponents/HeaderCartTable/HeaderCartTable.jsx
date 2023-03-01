import React from 'react';

const HeaderCartTable = ({classname}) => {
  return (
    <div className = {classname}>
      <span>Наименование</span>
      <span>Шт</span>
      <span>Стоимость</span>
    </div>
  );
};

export default HeaderCartTable;