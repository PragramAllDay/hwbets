import { useState } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Betting from "./pages/Betting/Betting";
import Header from "./components/Header/Header";
import Landing from "./pages/Landing/Landing";
import Footer from "./components/Footer/Footer";
import Experiment from "./pages/Betting/Betting";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Landing />,
    },

    {
      path: "/Betting",
      element: <Betting />,
    },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
