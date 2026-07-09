import { HashRouter, Navigate, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import UmrahPage from "./pages/UmrahPage";
import HajjPage from "./pages/HajjPage";
import ToursPage from "./pages/ToursPage";
import FlightsPage from "./pages/FlightsPage";
import VisaPage from "./pages/VisaPage";
import BlogPage from "./pages/BlogPage";
import BlogArticlePage from "./pages/BlogArticlePage";
import ContactPage from "./pages/ContactPage";
import DestinationPage from "./pages/DestinationPage";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <HashRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="about" element={<AboutPage />} />
          <Route path="umrah" element={<UmrahPage />} />
          <Route path="hajj" element={<HajjPage />} />
          <Route path="tours" element={<ToursPage />} />
          <Route path="destinations/:slug" element={<DestinationPage />} />
          <Route path="flights" element={<FlightsPage />} />
          <Route path="visa" element={<VisaPage />} />
          <Route path="blog" element={<BlogPage />} />
          <Route path="blog/:slug" element={<BlogArticlePage />} />
          <Route path="contact" element={<ContactPage />} />
          <Route path="home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}
