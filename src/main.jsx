import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from "./components/pages/Home.jsx";
import About from "./components/pages/About.jsx";
import Services from "./components/pages/Services.jsx";
import Blog from "./components/pages/Blog.jsx";
import Contact from "./components/pages/Contact.jsx";
import Copyright from "./components/pages/privacy/Copyright.jsx";
import Security from "./components/pages/privacy/Security.jsx";
import Terms from "./components/pages/privacy/Terms.jsx";
import Explore from "./components/pages/Explore.jsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="services" element={<Services />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact" element={<Contact />} />
      <Route path="copyright-policy" element={<Copyright />} />
      <Route path="security" element={<Security />} />
      <Route path="terms-of-use" element={<Terms />} />
      <Route path="explore" element={<Explore />} />
    </Route>
  )
);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
