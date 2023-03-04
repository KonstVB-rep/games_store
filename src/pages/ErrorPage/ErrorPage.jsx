import {useRouteError} from "react-router-dom";
import cn from './ErrorPage.module.scss'

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <section className={cn.main}>
      <div className = {cn.wrapper}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {error.statusText ? <p>{error.statusText}</p> : null}
        <p>Try again later.</p>
      </div>
    </section>
  );
}
