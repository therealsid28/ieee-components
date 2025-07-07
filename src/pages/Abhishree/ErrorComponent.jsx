function ErrorComponent() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white px-4">
      <p className="text-sm text-purple-600 font-medium">404</p>
      <h1 className="mt-2 text-4xl font-bold text-gray-900 tracking-tight sm:text-5xl">
        Page not found
      </h1>
      <p className="mt-2 text-base text-gray-600">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <div className="mt-6 flex items-center gap-x-4">
        <a
          href="/"
          className="rounded-md bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Go back home
        </a>
        <a
          href="#"
          className="text-sm font-semibold text-gray-900 hover:underline"
        >
          Contact support <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>
  );
}

export default ErrorComponent;
