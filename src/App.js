import React, { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Hero from "./pages/Hero";

const HomeScreen = lazy(() => import("./pages/HomeScreen"));
const Teams = lazy(() => import("./pages/Teams"));
const News = lazy(() => import("./pages/News"));
const CompanyVideo = lazy(() => import("./pages/CompanyVideo"));
const Project = lazy(() => import("./pages/Project"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const Contact = lazy(() => import("./pages/Contact"));
const HotelPage = lazy(() => import("./pages/Products/Hotel"));
const RumahPage = lazy(() => import("./pages/Products/Rumah"));
const KantorPage = lazy(() => import("./pages/Products/Kantor"));
const LobbyPage = lazy(() => import("./pages/Products/Lobby"));
const StudioPage = lazy(() => import("./pages/Products/Studio"));
const BrPage = lazy(() => import("./pages/Products/Br"));
const CoffeePage = lazy(() => import("./pages/Products/Coffee"));
const BedPage = lazy(() => import("./pages/Products/Bed"));
const KecamatanPage = lazy(() => import("./pages/Products/Kecamatan"));
const PerumahanPage = lazy(() => import("./pages/Products/Perumahan"));
const PublikPage = lazy(() => import("./pages/Products/Publik"));

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={false}>
              <HomeScreen />
            </Suspense>
          }
        />
        <Route
          path="/aboutus"
          element={
            <Suspense fallback={false}>
              <AboutUs />
            </Suspense>
          }
        />
        <Route
          path="/video"
          element={
            <Suspense fallback={false}>
              <CompanyVideo />
            </Suspense>
          }
        />
        <Route
          path="/hero"
          element={
            <Suspense fallback={false}>
              <Hero />
            </Suspense>
          }
        />

        <Route
          path="/news"
          element={
            <Suspense fallback={false}>
              <News />
            </Suspense>
          }
        />
        <Route
          path="/teams"
          element={
            <Suspense fallback={false}>
              <Teams />
            </Suspense>
          }
        />
        <Route
          path="/project"
          element={
            <Suspense fallback={false}>
              <Project />
            </Suspense>
          }
        />

        <Route
          path="/contact"
          element={
            <Suspense fallback={false}>
              <Contact />
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
          path="/rumah"
          element={
            <Suspense fallback={false}>
              <RumahPage />
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
          path="/br"
          element={
            <Suspense fallback={false}>
              <BrPage />
            </Suspense>
          }
        />
        <Route
          path="/coffeemorning"
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
              <BedPage />
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
          path="/tamanperumahan"
          element={
            <Suspense fallback={false}>
              <PerumahanPage />
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
      </Routes>
    </BrowserRouter>
  );
};

export default App;
