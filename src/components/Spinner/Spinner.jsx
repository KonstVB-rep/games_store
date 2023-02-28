import React, {forwardRef} from "react";
import Skeleton from "../HomePageComponents/Skeleton/Skeleton";

const style = {
  margin: "40px auto",
  textAlign: "center",
};

const Spinner = forwardRef(function Spinner(props, ref) {
    return <img src="/spinner.gif" alt="Загрузка" ref={ref}/>
});

export default Spinner;
