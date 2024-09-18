import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Header } from "./Header";
import { Footer } from "./Footer";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { DndPage } from "./DndPage";
import { DndInfoPage } from "./DndInfoPage";
import { CharactersNewPage } from "./CharactersNewPage";
import { CharactersIndexPage } from "./CharactersIndexPage";
import { RandomDnDImagePage } from "./RandomDnDImagePage"; // Ensure this file exists and is correct
import { PrivateRoute } from "./PrivateRoute";

function ErrorBoundary({ error }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-900 text-white">
      <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold mb-4">Oops! Something went wrong.</h1>
        <p className="mb-4">{error.message || "An unexpected error occurred."}</p>
        <a href="/" className="text-red-500 hover:underline">
          Go back home
        </a>
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    errorElement: <ErrorBoundary />,
    children: [
      {
        path: "/",
        element: (
          <PrivateRoute>
            <DndPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/signup",
        element: <SignupPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/dnd/info",
        element: (
          <PrivateRoute>
            <DndInfoPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/characters/new",
        element: <CharactersNewPage />,
      },
      {
        path: "/characters/backstory",
        element: (
          <PrivateRoute>
            <CharactersIndexPage />
          </PrivateRoute>
        ),
      },
      {
        path: "/random-dnd-image",
        element: (
          <PrivateRoute>
            <RandomDnDImagePage />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
