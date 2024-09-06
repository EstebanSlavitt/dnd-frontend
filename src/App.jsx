import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

import { Header } from "./Header";
// import { SignupPage } from "./SignupPage";
// import { LoginPage } from "./LoginPage";
import { DndPage } from "./DndPage";
import { Footer } from "./Footer";

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
      // {
      //   path: "/signup",
      //   element: <SignupPage />,
      // },
      // {
      //   path: "/login",
      //   element: <LoginPage />,
      // },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
