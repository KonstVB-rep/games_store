import React from 'react';
import ErrorPage from "../../pages/ErrorPage";
import {useSelector} from "react-redux";

const ErrorContainer = ({children}) => {

  const {status} = useSelector(state => state.games);
  return (
    <>
      {status === 'rejected' ? <ErrorPage/> : <>{children}</>}
    </>
  );
};

export default ErrorContainer;


