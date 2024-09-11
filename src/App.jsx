import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import axios from "axios";
import { Header } from "./Header";
import { SignupPage } from "./SignupPage";
import { LoginPage } from "./LoginPage";
import { DndPage } from "./DndPage";
import { Footer } from "./Footer";
import { DndIndex } from "./DndIndex";
import { DndInfoPage } from "./DndInfoPage";
import { CharactersNewPage } from "./CharactersNewPage";

const router = createBrowserRouter([
  {
    element: (
      <div>
        <Header />
        <Outlet />
        <Footer />
      </div>
    ),
    children: [
      {
        path: "/",
        element: <DndPage />,
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
        path: "/dnd",
        element: <DndIndex />,
        loader: () => axios.get("http://localhost:3000/dnd.json").then((response) => response.data),
      },
      {
        path: "/dnd/info",
        element: <DndInfoPage />,
      },
      {
        path: "/characters/new",
        element: <CharactersNewPage />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
