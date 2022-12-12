import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import NewsPage from "./pages/NewsPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import VideoPage from "./pages/VideoPage";
import PublikPage from "./pages/PortfolioPages/PublikPage";
import RumahPage from "./pages/PortfolioPages/RumahPage";
import HotelPage from "./pages/PortfolioPages/HotelPage";
import KantorPage from "./pages/PortfolioPages/KantorPage";
import LobbyPage from "./pages/PortfolioPages/LobbyPage";
import StudioPage from "./pages/PortfolioPages/StudioPage";
import BrPage from "./pages/PortfolioPages/BrPage";
import CoffeePage from "./pages/PortfolioPages/CoffeePage";
import BedroomPage from "./pages/PortfolioPages/BedroomPage";
import PerumahanPage from "./pages/PortfolioPages/PerumahanPage";
import KecamatanPage from "./pages/PortfolioPages/KecamatanPage";
import ArsitekSipil from "./pages/profil/ArsitekSipil";
import ArsitekInterior from "./pages/profil/ArsitekInterior";

const LandingPage = lazy(() => import("./pages/LandingPage"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={false}>
              <LandingPage />
            </Suspense>
          }
        />

        <Route
          path="/tentangkami"
          element={
            <Suspense fallback={false}>
              <AboutPage />
            </Suspense>
          }
        />

        <Route
          path="/sipilA"
          element={
            <Suspense fallback={false}>
              <ArsitekSipil />
            </Suspense>
          }
        />

        <Route
          path="/interiorA"
          element={
            <Suspense fallback={false}>
              <ArsitekInterior />
            </Suspense>
          }
        />

        <Route
          path="/videoperusahaan"
          element={
            <Suspense fallback={false}>
              <VideoPage />
            </Suspense>
          }
        />

        <Route
          path="/rumah"
          element={
            <Suspense fallback={false}>
              <RumahPage />
            </Suspense>
          }
        />

        <Route
          path="/hotel"
          element={
            <Suspense fallback={false}>
              <HotelPage />
            </Suspense>
          }
        />

        <Route
          path="/kantor"
          element={
            <Suspense fallback={false}>
              <KantorPage />
            </Suspense>
          }
        />

        <Route
          path="/lobby"
          element={
            <Suspense fallback={false}>
              <LobbyPage />
            </Suspense>
          }
        />

        <Route
          path="/studio"
          element={
            <Suspense fallback={false}>
              <StudioPage />
            </Suspense>
          }
        />

        <Route
          path="/kamar"
          element={
            <Suspense fallback={false}>
              <BrPage />
            </Suspense>
          }
        />

        <Route
          path="/coffee"
          element={
            <Suspense fallback={false}>
              <CoffeePage />
            </Suspense>
          }
        />

        <Route
          path="/bedroom"
          element={
            <Suspense fallback={false}>
              <BedroomPage />
            </Suspense>
          }
        />

        <Route
          path="/tamanperumahan"
          element={
            <Suspense fallback={false}>
              <PerumahanPage />
            </Suspense>
          }
        />

        <Route
          path="/tamankecamatan"
          element={
            <Suspense fallback={false}>
              <KecamatanPage />
            </Suspense>
          }
        />

        <Route
          path="/ruangpublik"
          element={
            <Suspense fallback={false}>
              <PublikPage />
            </Suspense>
          }
        />

        <Route
          path="/proyek"
          element={
            <Suspense fallback={false}>
              <ProjectsPage />
            </Suspense>
          }
        />
        <Route
          path="/sipilA"
          element={
            <Suspense fallback={false}>
              <ProjectsPage />
            </Suspense>
          }
        />
        <Route
          path="/interiorA"
          element={
            <Suspense fallback={false}>
              <ProjectsPage />
            </Suspense>
          }
        />
        <Route
          path="/hubungi"
          element={
            <Suspense fallback={false}>
              <ContactPage />
            </Suspense>
          }
        />
        <Route
          path="/berita"
          element={
            <Suspense fallback={false}>
              <NewsPage />
            </Suspense>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
