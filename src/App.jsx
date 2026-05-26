import Home from "./pages/Home";

import ProjectDetail
from "./pages/ProjectDetail";

import {
BrowserRouter,
Routes,
Route,
}
from "react-router-dom";

import Admin
from "./pages/Admin";

import Login from "./pages/Login";

import ProtectedRoute
from "./components/ProtectedRoute";

export default function App() {
  return (

    <BrowserRouter>

    <Routes>

    <Route
    path="/"
    element={<Home />}
    />

    <Route
    path="/project/:slug"
    element={
    <ProjectDetail />
    }
    />

    <Route
    path="/admin"
    element={
    <ProtectedRoute>

    <Admin />

    </ProtectedRoute>
    }
    />

    <Route
    path="/login"
    element={<Login/>}
    />    
    </Routes>

    </BrowserRouter>

  );
}