import React from "react";
import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const err = useRouteError();
  return (
    <div className="container text-center">
      <h1 className="font-black text-3xl">Oops!!</h1>
      <h2 className="text-2xl">Something went wrong</h2>
      <h2 className="text-lg">{err.status + ": " + err.statusText}</h2>
    </div>
  );
};

export default ErrorPage;
