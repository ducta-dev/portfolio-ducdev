import {
  useEffect,
  useState,
} from "react";

import {
  Navigate,
} from "react-router-dom";

import {
  getSession,
} from "../services/authService";

export default function ProtectedRoute({
  children,
}) {
  const [loading, setLoading] =
    useState(true);

  const [session, setSession] =
    useState(null);

  useEffect(() => {
    check();
  }, []);

  async function check() {
    const current =
      await getSession();

    setSession(
      current
    );

    setLoading(
      false
    );
  }

  if (
    loading
  ) {
    return (
      <div
        className="
        min-h-screen

        grid

        place-items-center
        "
      >
        Đang kiểm tra…
      </div>
    );
  }

  if (
    !session
  ) {
    return (
      <Navigate
        to="/login"
        replace
      />
    );
  }

  return children;
}