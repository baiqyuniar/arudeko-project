import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Apartemen from "./pages/Apartemen";
const ContactPage = lazy(() => import("./pages/ContactPage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const VideoPage = lazy(() => import("./pages/VideoPage"));
const PublikPage = lazy(() => import("./pages/PortfolioPages/PublikPage"));
const RumahPage = lazy(() => import("./pages/PortfolioPages/RumahPage"));
const HotelPage = lazy(() => import("./pages/PortfolioPages/HotelPage"));
const KantorPage = lazy(() => import("./pages/PortfolioPages/KantorPage"));
const LobbyPage = lazy(() => import("./pages/PortfolioPages/LobbyPage"));
const StudioPage = lazy(() => import("./pages/PortfolioPages/StudioPage"));
const BrPage = lazy(() => import("./pages/PortfolioPages/BrPage"));
const CoffeePage = lazy(() => import("./pages/PortfolioPages/CoffeePage"));
const BedroomPage = lazy(() => import("./pages/PortfolioPages/BedroomPage"));
const PerumahanPage = lazy(() =>
  import("./pages/PortfolioPages/PerumahanPage")
);
const KecamatanPage = lazy(() =>
  import("./pages/PortfolioPages/KecamatanPage")
);
const ArsitekSipil = lazy(() => import("./pages/profil/ArsitekSipil"));
const ArsitekInterior = lazy(() => import("./pages/profil/ArsitekInterior"));

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
          path="/apartement"
          element={
            <Suspense fallback={false}>
              <Apartemen />
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
