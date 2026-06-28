import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";

import SpaceLogin from "./pages/space/SpaceLogin";
import SpaceDashboard from "./pages/space/SpaceDashboard";
import SpaceChapter from "./pages/space/SpaceChapter";

import ProtectedRoute from "./components/space/ProtectedRoute";
import SpaceTopic from "./pages/space/SpaceTopic";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* Main Website */}
        <Route path="/" element={<HomePage />} />

        {/* Private Space Portal */}
        <Route path="/space" element={<SpaceLogin />} />

        <Route
          path="/space/dashboard"
          element={
            <ProtectedRoute>
              <SpaceDashboard />
            </ProtectedRoute>
          }
        />

        <Route
          path="/space/chapter/:id"
          element={
            <ProtectedRoute>
              <SpaceChapter />
            </ProtectedRoute>
          }
        />

        <Route
          path="/space/chapter/:chapterId/topic/:topicId"
          element={
            <ProtectedRoute>
              <SpaceTopic />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}

export default App;