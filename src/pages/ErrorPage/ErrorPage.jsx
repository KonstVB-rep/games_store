import {useLocation, useRouteError} from "react-router-dom";
import cn from './ErrorPage.module.scss'
import {BackButton} from "../../components/Buttons/BackButton";

export default function ErrorPage() {
  const error = useRouteError();
  const {pathname} = useLocation();

  return (
    <section className={cn.main}>
      {pathname !== '/' ? <BackButton /> : null}
      <div className = {cn.wrapper}>
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        {error.statusText ? <p>{error.statusText}</p> : null}
        <p>Try again later.</p>
      </div>
    </section>
  );
}
