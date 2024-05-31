import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an this page is still under construction.</p>
      <p>Please email susannebieri@gmail.com for more information</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}