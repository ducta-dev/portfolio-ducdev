export default function Footer() {
  return (
    <footer
      className="
      bg-white
      border-t
      border-slate-200
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        py-12

        flex
        flex-col
        md:flex-row
        justify-between
        gap-8
        "
      >
        <div>
          <div
            className="
            text-2xl
            font-black
            bg-gradient-to-r
            from-red-500
            to-blue-600
            bg-clip-text
            text-transparent
            "
          >
            DucTM
          </div>

          <p
            className="
            mt-3
            max-w-md
            text-slate-600
            leading-relaxed
            "
          >
            Thiết kế và phát triển website, portfolio,
            dashboard và web app quản lý cho cá nhân
            và doanh nghiệp nhỏ.
          </p>
        </div>

        <div
          className="
          grid
          sm:grid-cols-2
          gap-10
          "
        >
          <div>
            <h4 className="font-bold text-slate-900">
              Điều hướng
            </h4>

            <div
              className="
              mt-4
              grid
              gap-3
              text-slate-600
              "
            >
              <a href="#projects" className="hover:text-blue-600">
                Dự án
              </a>

              <a href="#pricing" className="hover:text-blue-600">
                Bảng giá
              </a>

              <a href="#contact" className="hover:text-blue-600">
                Liên hệ
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-slate-900">
              Liên hệ
            </h4>

            <div
              className="
              mt-4
              grid
              gap-3
              text-slate-600
              "
            >
              <a
                href="mailto:ducta.tmd@gmail.com"
                className="hover:text-blue-600"
              >
                ducta.tmd@gmail.com
              </a>

              <span>
                Freelancer Developer
              </span>

              <span>
                React / Web App / Dashboard
              </span>
            </div>
          </div>
        </div>
      </div>

      <div
        className="
        border-t
        border-slate-200
        py-6
        text-center
        text-sm
        text-slate-500
        "
      >
        © {new Date().getFullYear()} DucDev. All rights reserved.
      </div>
    </footer>
  );
}