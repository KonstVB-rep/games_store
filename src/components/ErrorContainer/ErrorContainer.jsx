import React from 'react';
import {ErrorPage} from "../../pages/ErrorPage";

const ErrorContainer = ({status, children}) => {
  return (
    <>
      {status === 'rejected' ? <ErrorPage/> : <>{children}</>}
    </>
  );
};

export default ErrorContainer;


