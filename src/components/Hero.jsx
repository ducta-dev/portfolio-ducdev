export default function Hero() {
  return (
    <section
      className="
      min-h-[88vh]
      flex
      items-center
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        w-full
        "
      >
        {/* Badge */}

        <span
          className="
          inline-flex
          items-center
          rounded-full
          px-5
          py-2
          bg-red-50
          text-red-600
          font-medium
          "
        >
          👋 Xin chào, tôi là Developer
        </span>

        {/* Title */}

        <h1
          className="
          mt-8
          text-7xl
          font-black
          tracking-tight
          text-slate-950
          leading-none
          "
        >
          Tạ Minh Đức
        </h1>

        {/* Subtitle */}

        <h2
          className="
          mt-5
          text-4xl
          font-semibold
          text-slate-800
          leading-tight
          "
        >
          Xây dựng{" "}

          <span
            className="
            bg-gradient-to-r
            from-red-500
            to-blue-600
            bg-clip-text
            text-transparent
            "
          >
            sản phẩm số
          </span>

          {" "}có thể vận hành thực tế
        </h2>

        {/* Description */}

        <p
          className="
          mt-8
          max-w-3xl
          text-xl
          text-slate-600
          leading-relaxed
          "
        >
          Tôi thiết kế và phát triển website,
          dashboard và ứng dụng quản lý dành cho
          cá nhân và doanh nghiệp nhỏ.
        </p>

        {/* CTA */}

        <div
          className="
          mt-12
          flex
          gap-5
          "
        >
          <button
            className="
            px-8
            py-4
            rounded-2xl
            text-white
            font-semibold

            bg-gradient-to-r
            from-red-500
            to-blue-600

            hover:scale-105
            transition
            "
          >
            🚀 Xem dự án
          </button>

          <button
            className="
            px-8
            py-4
            rounded-2xl

            border
            border-slate-300

            hover:bg-slate-100
            transition
            "
          >
            💬 Nhận báo giá
          </button>
        </div>

        {/* Stats */}

        <div
          className="
          mt-16
          flex
          gap-12
          "
        >
          <div>
            <div
              className="
              text-4xl
              font-black
              text-red-500
              "
            >
              10+
            </div>

            <div className="text-slate-500">
              Dự án
            </div>
          </div>

          <div>
            <div
              className="
              text-4xl
              font-black
              text-blue-600
              "
            >
              React
            </div>

            <div className="text-slate-500">
              Chuyên môn
            </div>
          </div>

          <div>
            <div
              className="
              text-4xl
              font-black
              text-slate-900
              "
            >
              2026
            </div>

            <div className="text-slate-500">
              Portfolio
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}