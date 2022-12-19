import React, { lazy } from "react";
const Apartemen = lazy(() => import("./pages/Apartemen"));
const LandingPage = lazy(() => import("./pages/LandingPage"));
const HotelPage = lazy(() => import("./pages/PortfolioPages/HotelPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const VideoPage = lazy(() => import("./pages/VideoPage"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const KantorPage = lazy(() => import("./pages/PortfolioPages/KantorPage"));
const LobbyPage = lazy(() => import("./pages/PortfolioPages/LobbyPage"));
const BrPage = lazy(() => import("./pages/PortfolioPages/BrPage"));
const StudioPage = lazy(() => import("./pages/PortfolioPages/StudioPage"));
const CoffeePage = lazy(() => import("./pages/PortfolioPages/CoffeePage"));
const BedroomPage = lazy(() => import("./pages/PortfolioPages/BedroomPage"));
const KecamatanPage = lazy(() =>
  import("./pages/PortfolioPages/KecamatanPage")
);
const PerumahanPage = lazy(() =>
  import("./pages/PortfolioPages/PerumahanPage")
);
const PublikPage = lazy(() => import("./pages/PortfolioPages/PublikPage"));
const RumahPage = lazy(() => import("./pages/PortfolioPages/RumahPage"));
const ArsitekInterior = lazy(() => import("./pages/profil/ArsitekInterior"));
const ArsitekSipil = lazy(() => import("./pages/profil/ArsitekSipil"));
const AdminNews = lazy(() => import("./pages/admin/News"));

const routes = [
  { path: "/", name: "Home", exact: true, element: LandingPage },
  { path: "/tentangkami", name: "About Us", element: AboutPage },
  { path: "/videoperusahaan", name: "Video", element: VideoPage },
  { path: "/rumah", name: "Rumah", element: RumahPage },
  { path: "/hotel", name: "Hotel", element: HotelPage },
  { path: "/kantor", name: "Kantor", element: KantorPage },
  { path: "/lobby", name: "Lobby", element: LobbyPage },
  { path: "/studio", name: "Studio", element: StudioPage },
  { path: "/kamar", name: "Br", element: BrPage },
  { path: "/coffee", name: "Coffee", element: CoffeePage },
  { path: "/bedroom", name: "Bedroom", element: BedroomPage },
  { path: "/tamankecamatan", name: "Kecamatan", element: KecamatanPage },
  { path: "/tamanperumahan", name: "Perumahan", element: PerumahanPage },
  { path: "/ruangpublik", name: "Publik", element: PublikPage },
  { path: "/sipilA", name: "Interior", element: ArsitekSipil },
  { path: "/interiorA", name: "Sipil", element: ArsitekInterior },
  { path: "/proyek", name: "Projects", element: ProjectsPage },
  { path: "/hubungi", name: "Contact", element: ContactPage },
  { path: "/apartement", name: "Apartement", element: Apartemen },
  { path: "/adminNews", name: "AdminNews", element: AdminNews },
];

export default routes;
