import { Component, Suspense, lazy } from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./components/layout/RootLayout";
import TeamDepartmentCard from "./components/TeamDepartmentCard";

const Home = lazy(() => import("./pages/Home"));
const ProjectsPage = lazy(() => import("./pages/ProjectsPage"));
const HackathonsPage = lazy(() => import("./pages/HackathonsPage"));
const AchievementsPage = lazy(() => import("./pages/AchievementsPage"));
const Events = lazy(() => import("./pages/Events"));
const Team = lazy(() => import("./pages/Team"));
const LearningPage = lazy(() => import("./pages/LearningPage"));
const Contact = lazy(() => import("./pages/Contact"));
const NotFound = lazy(() => import("./pages/NotFound"));
const DepartmentPage =lazy(()=> import("./pages/DepartmentPage"));

function PageLoader() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center bg-[#02040a] px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-cyan-400/20 bg-[#06101f]/90 p-8 text-center shadow-[0_0_50px_rgba(34,211,238,.08)]">
        <div className="mx-auto mb-5 h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-red-500 border-r-cyan-400" />
        <p className="font-mono text-xs font-bold uppercase tracking-[0.22em] text-red-300">Loading OSCode CIT</p>
        <p className="mt-2 text-sm text-white/50">Preparing the interface…</p>
      </div>
    </div>
  );
}

class AppErrorBoundary extends Component {
  state = { error: null };

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, info) {
    console.error("OSCode CIT runtime error:", error, info);
  }

  render() {
    if (!this.state.error) return this.props.children;

    const message = this.state.error?.message || String(this.state.error);

    return (
      <div className="min-h-screen bg-[#02040a] px-6 py-24 text-white">
        <div className="mx-auto max-w-3xl rounded-3xl border border-red-500/35 bg-[#07101d] p-8 shadow-[0_0_70px_rgba(239,68,68,.12)]">
          <p className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-400">OSCode CIT / Runtime Error</p>
          <h1 className="mt-3 text-3xl font-black">The page could not be rendered.</h1>
          <p className="mt-3 text-white/60">The blank screen is replaced by this diagnostic so the exact error is visible instead of failing silently.</p>
          <pre className="mt-6 overflow-auto rounded-2xl border border-white/10 bg-black/50 p-5 text-sm leading-6 text-red-200">{message}</pre>
          <button
            type="button"
            onClick={() => window.location.reload()}
            className="mt-6 rounded-xl bg-red-500 px-5 py-3 text-sm font-bold text-white transition hover:bg-red-400"
          >
            Reload Website
          </button>
        </div>
      </div>
    );
  }
}

function LazyPage({ Component }) {
  return (
    <Suspense fallback={<PageLoader />}>
      <Component />
    </Suspense>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <LazyPage Component={Home} /> },
      { path: "projects", element: <LazyPage Component={ProjectsPage} /> },
      { path: "hackathons", element: <LazyPage Component={HackathonsPage} /> },
      { path: "achievements", element: <LazyPage Component={AchievementsPage} /> },
      { path: "events", element: <LazyPage Component={Events} /> },
      { path: "team", element: <LazyPage Component={Team} /> },
      { path: "learning", element: <LazyPage Component={LearningPage} /> },
      { path: "team/:department", element: <LazyPage Component={DepartmentPage}/>},
      { path: "contact", element: <LazyPage Component={Contact} /> },
      { path: "*", element: <LazyPage Component={NotFound} /> },
    ],
  },
]);

export default function App() {
  return (
    <AppErrorBoundary>
      <RouterProvider router={router} />
    </AppErrorBoundary>
  );
}
