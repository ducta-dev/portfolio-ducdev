export default function Navbar() {
  return (
    <header
      className="
      sticky
      top-0
      z-50

      bg-white/80
      backdrop-blur
      "
    >
      <nav
        className="
        max-w-7xl
        mx-auto

        h-24

        px-8

        flex
        items-center
        justify-between
        "
      >
        {/* Logo */}

        <a
          href="/"
          className="
          flex
          items-center
          "
        >
          <img
            src="/logo.png"
            alt="DucTM"
            className="
            h-14
            object-contain
            "
          />
        </a>

        {/* Menu */}

        <div
          className="
          hidden
          md:flex

          items-center
          gap-10
          "
        >
          <a
            href="#projects"
            className="
            text-slate-700
            hover:text-red-500
            transition
            "
          >
            Dự án
          </a>

          <a
            href="#pricing"
            className="
            text-slate-700
            hover:text-red-500
            transition
            "
          >
            Bảng giá
          </a>

          <a
            href="#about"
            className="
            text-slate-700
            hover:text-red-500
            transition
            "
          >
            Giới thiệu
          </a>

          <a
            href="#contact"
            className="
            text-slate-700
            hover:text-red-500
            transition
            "
          >
            Liên hệ
          </a>

          {/* CTA */}

          <button
            className="
            px-7
            py-3

            rounded-full

            text-white
            font-semibold

            bg-gradient-to-r
            from-red-500
            to-blue-600

            hover:scale-105
            transition
            "
          >
            Nhận báo giá
          </button>
        </div>

        {/* Mobile */}

        <button
          className="
          md:hidden

          text-3xl
          "
        >
          ☰
        </button>
      </nav>
    </header>
  );
}