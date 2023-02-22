import {isRouteErrorResponse, useRouteError} from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.log(error)
  if (isRouteErrorResponse(error)) {
    return (
      <div>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <h2>{error.status}</h2>
        <p>{error.statusText}</p>
        {error.data?.message && <p>{error.data.message}</p>}
      </div>
    );
  } else {
    return <div>Something went wrong</div>;
  }
}
