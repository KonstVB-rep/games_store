import React from "react";

const style = {
  margin: "40px auto",
  textAlign: "center",
};

const Spinner = () => {
  return (
    <div style={style}>
      <img src="/spinner.gif" alt="Загрузка" />
    </div>
  );
};

export default Spinner;
