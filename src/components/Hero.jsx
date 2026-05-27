import SkillSummary from "./SkillSummary";
import HeroVisual from "./HeroVisual";

export default function Hero() {
  return (
    <section
      className="
      relative
      overflow-hidden
      min-h-screen
      flex
      items-center
      bg-gradient-to-br
      from-red-50/40
      via-white
      to-blue-50/40
      "
    >
      <div
        className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-red-200/20
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-blue-200/20
        rounded-full
        blur-3xl
        "
      />

      <div
        className="
        relative
        max-w-7xl
        mx-auto
        px-6
        lg:px-8
        py-24
        lg:py-32
        grid
        lg:grid-cols-2
        gap-20
        items-center
        "
      >
        <div>
          <div
            className="
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-red-50
            border
            border-red-100
            px-5
            py-2
            text-red-600
            font-semibold
            "
          >
            👋 Xin chào, tôi là Developer
          </div>

          <h1
            className="
            mt-8
            text-6xl
            md:text-7xl
            font-black
            tracking-tight
            text-slate-950
            leading-none
            "
          >
            Tạ Minh Đức
          </h1>

          <h2
            className="
            mt-6
            text-3xl
            md:text-5xl
            font-bold
            leading-tight
            text-slate-900
            "
          >
            Xây dựng{" "}
            <span
              className="
              bg-gradient-to-r
              from-red-500
              via-pink-500
              to-blue-600
              bg-clip-text
              text-transparent
              "
            >
              sản phẩm số
            </span>{" "}
            có thể vận hành thực tế
          </h2>

          <p
            className="
            mt-8
            max-w-2xl
            text-xl
            leading-relaxed
            text-slate-600
            "
          >
            Tôi thiết kế và phát triển website,
            dashboard và ứng dụng quản lý dành
            cho cá nhân và doanh nghiệp nhỏ.
          </p>

          <div
            className="
            mt-12
            flex
            flex-wrap
            gap-5
            "
          >
            <a
              href="#projects"
              className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              px-8
              py-4
              font-semibold
              text-white
              bg-gradient-to-r
              from-red-500
              to-blue-600
              shadow-lg
              shadow-blue-200/50
              transition
              duration-300
              hover:scale-105
              hover:shadow-xl
              "
            >
              🚀 Xem dự án
            </a>

            <a
              href="#contact"
              className="
              inline-flex
              items-center
              justify-center
              rounded-2xl
              border
              border-slate-300
              bg-white/80
              backdrop-blur
              px-8
              py-4
              font-semibold
              text-slate-700
              transition
              duration-300
              hover:bg-slate-100
              hover:scale-105
              "
            >
              💬 Nhận báo giá
            </a>
          </div>

          <SkillSummary />
        </div>

        <HeroVisual />
      </div>
    </section>
  );
}