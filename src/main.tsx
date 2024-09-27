import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { PortfolioPage } from "./pages/portfolio-page.tsx";
import { ContactPage } from "./pages/contact-page.tsx";
import { ShopPage } from "./pages/shop-page.tsx";
import { AboutPage } from "./pages/about-page.tsx";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { Layout } from "./layout.tsx";
import "./index.css";
import "@fontsource/caveat-brush";
import "@fontsource/alegreya-sans";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Navigate to="/portfolio" /> },
      {
        path: "/portfolio",
        element: <PortfolioPage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/shop",
        element: <ShopPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
