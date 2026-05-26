import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Navigate, Route, Routes, useLocation } from "react-router-dom";

import { AuthProvider } from "./modules/admin/AuthContext.jsx";
import Landing from "./modules/admin/pages/Landing.jsx";
import PublicHome from "./modules/admin/pages/PublicHome.jsx";
import PublicEvent from "./modules/admin/pages/PublicEvent.jsx";
import Login from "./modules/admin/pages/Login.jsx";
import Forgot from "./modules/admin/pages/Forgot.jsx";
import Reset from "./modules/admin/pages/Reset.jsx";
import ITC from "./modules/admin/pages/ITC.jsx";
import AdminApp from "./modules/admin/App.jsx";

import Bridge from "./modules/voting/pages/Bridge.jsx";
import VotingHome from "./modules/voting/pages/VotingHome.jsx";
import EventVote from "./modules/voting/pages/EventVote.jsx";
import MyVote from "./modules/voting/pages/MyVote.jsx";

import "./index.css";
import "./modules/admin/index.css";
import "./modules/admin/pages/itc.css";
import "./modules/voting/index.css";
import "./modules/voting/App.css";
import "./modules/nominee/index.css";
import "./modules/notifications/index.css";
import "./modules/results/index.css";
import "./modules/dashboard/index.css";

function readStudentAuth() {
  try {
    return JSON.parse(localStorage.getItem("auth") || "null");
  } catch {
    return null;
  }
}

function RequireStudent({ children }) {
  const loc = useLocation();
  const auth = readStudentAuth();
  const hasToken = !!(auth?.token || auth?.accessToken);
  const rawRole =
    auth?.role ??
    auth?.user?.role ??
    (Array.isArray(auth?.roles) ? auth.roles[0] : null);
  const role = rawRole ? String(rawRole).replace(/^ROLE_/, "").toUpperCase() : null;

  if (!hasToken || role !== "STUDENT") {
    return <Navigate to={`/login?next=${encodeURIComponent(loc.pathname + loc.search)}`} replace />;
  }

  return children;
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events" element={<PublicHome />} />
          <Route path="/e/:eventId" element={<PublicEvent />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Navigate to="/login?tab=signup" replace />} />
          <Route path="/forgot" element={<Forgot />} />
          <Route path="/reset" element={<Reset />} />
          <Route path="/itc" element={<ITC />} />

          <Route path="/bridge" element={<Bridge />} />
          <Route
            path="/voting"
            element={
              <RequireStudent>
                <VotingHome />
              </RequireStudent>
            }
          />
          <Route
            path="/voting/events/:eventId"
            element={
              <RequireStudent>
                <EventVote />
              </RequireStudent>
            }
          />
          <Route
            path="/my-vote"
            element={
              <RequireStudent>
                <MyVote />
              </RequireStudent>
            }
          />

          <Route path="/admin/*" element={<AdminApp />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
