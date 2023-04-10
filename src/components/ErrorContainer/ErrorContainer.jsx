import React from 'react';
import {useSelector} from "react-redux";

import ErrorPage from "../../pages/ErrorPage";

const ErrorContainer = ({children}) => {

  const {status} = useSelector(state => state.games);
  return (
    <>
      {status === 'rejected' ? <ErrorPage/> : <>{children}</>}
    </>
  );
};

export default ErrorContainer;


