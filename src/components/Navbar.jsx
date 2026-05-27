import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
      sticky
      top-0
      z-50
      bg-white/80
      backdrop-blur-xl
      border-b
      border-slate-200
      "
    >
      <nav
        className="
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        h-20
        flex
        items-center
        justify-between
        "
      >
        {/* LOGO */}
        <a
          href="/"
          className="
          flex
          items-center
          gap-3
          "
        >
          <img
            src="/logo.png"
            alt="DucTM"
            className="
            h-40
            w-auto
            object-contain
            "
          />
        </a>

        {/* DESKTOP MENU */}
        <div
          className="
          hidden
          md:flex
          items-center
          gap-8
          font-medium
          text-slate-700
          "
        >
          <a
            href="#projects"
            className="hover:text-blue-600 transition"
          >
            Dự án
          </a>

          <a
            href="#pricing"
            className="hover:text-blue-600 transition"
          >
            Bảng giá
          </a>

          <a
            href="#contact"
            className="hover:text-blue-600 transition"
          >
            Liên hệ
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="
          md:hidden
          text-3xl
          font-bold
          text-slate-800
          "
        >
          {open ? "×" : "☰"}
        </button>
      </nav>

      {/* MOBILE MENU */}
      {open && (
        <div
          className="
          md:hidden
          bg-white
          border-t
          border-slate-200
          px-6
          py-6
          shadow-xl
          "
        >
          <div
            className="
            flex
            flex-col
            gap-5
            text-lg
            font-semibold
            text-slate-700
            "
          >
            <a
              href="#projects"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600"
            >
              Dự án
            </a>

            <a
              href="#pricing"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600"
            >
              Bảng giá
            </a>

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="hover:text-blue-600"
            >
              Liên hệ
            </a>
          </div>
        </div>
      )}
    </header>
  );
}