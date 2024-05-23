import { useRouteError } from "react-router-dom";

type ErrorType = {
  statusText?: string;
  message?: string;
};

export default function ErrorPage() {
  const error = useRouteError() as ErrorType;

  return (
    <div
      id="error-page"
      className="flex flex-col justify-center items-center align-middle h-screen "
    >
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
    </div>
  );
}
