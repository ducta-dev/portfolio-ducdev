export default function HeroVisual() {
  return (
    <div
      className="
      relative
      hidden
      lg:flex
      items-center
      justify-center
      "
    >
      {/* Glow Background */}
      <div
        className="
        absolute
        inset-0
        bg-gradient-to-br
        from-red-100/40
        via-blue-100/30
        to-purple-100/40
        blur-3xl
        rounded-full
        scale-125
        "
      />

      {/* Main Browser Mockup */}
      <div
        className="
        relative
        w-[560px]
        rounded-[32px]
        border
        border-slate-200
        bg-white/90
        backdrop-blur-xl
        shadow-2xl
        overflow-hidden
        "
      >
        {/* Browser Top */}
        <div
          className="
          flex
          items-center
          gap-2
          px-5
          py-4
          border-b
          border-slate-100
          bg-slate-50
          "
        >
          <div className="w-3 h-3 rounded-full bg-red-400" />
          <div className="w-3 h-3 rounded-full bg-yellow-400" />
          <div className="w-3 h-3 rounded-full bg-green-400" />
        </div>

        {/* Dashboard Preview */}
        <div className="p-8">
          <div
            className="
            flex
            items-center
            justify-between
            "
          >
            <div>
              <p className="text-slate-500 text-sm">
                Dashboard
              </p>

              <h3
                className="
                text-3xl
                font-black
                text-slate-950
                "
              >
                POS System
              </h3>
            </div>

            <div
              className="
              px-4
              py-2
              rounded-full
              bg-green-100
              text-green-700
              font-semibold
              text-sm
              "
            >
              Online
            </div>
          </div>

          {/* Stats */}
          <div
            className="
            mt-8
            grid
            grid-cols-3
            gap-4
            "
          >
            <div
              className="
              rounded-2xl
              bg-slate-50
              p-5
              "
            >
              <p className="text-slate-500 text-sm">
                Orders
              </p>

              <h4
                className="
                mt-2
                text-3xl
                font-black
                text-red-500
                "
              >
                128
              </h4>
            </div>

            <div
              className="
              rounded-2xl
              bg-slate-50
              p-5
              "
            >
              <p className="text-slate-500 text-sm">
                Revenue
              </p>

              <h4
                className="
                mt-2
                text-3xl
                font-black
                text-blue-600
                "
              >
                +42%
              </h4>
            </div>

            <div
              className="
              rounded-2xl
              bg-slate-50
              p-5
              "
            >
              <p className="text-slate-500 text-sm">
                Users
              </p>

              <h4
                className="
                mt-2
                text-3xl
                font-black
                text-slate-900
                "
              >
                2.4K
              </h4>
            </div>
          </div>

          {/* Fake Chart */}
          <div
            className="
            mt-8
            h-40
            rounded-3xl
            bg-gradient-to-br
            from-red-50
            via-white
            to-blue-50
            flex
            items-end
            gap-3
            p-6
            "
          >
            <div className="w-full h-12 bg-red-400 rounded-t-xl" />
            <div className="w-full h-24 bg-orange-400 rounded-t-xl" />
            <div className="w-full h-20 bg-pink-400 rounded-t-xl" />
            <div className="w-full h-32 bg-blue-500 rounded-t-xl" />
            <div className="w-full h-28 bg-indigo-500 rounded-t-xl" />
          </div>
        </div>
      </div>

      {/* Floating Card 1 */}
      <div
        className="
        absolute
        -left-10
        top-10
        rounded-3xl
        bg-white
        border
        border-slate-200
        shadow-xl
        p-5
        w-52
        "
      >
        <p className="text-slate-500 text-sm">
          Website
        </p>

        <h4
          className="
          mt-2
          text-xl
          font-black
          "
        >
          Booking App
        </h4>

        <div
          className="
          mt-4
          inline-flex
          px-3
          py-1
          rounded-full
          bg-blue-100
          text-blue-700
          text-sm
          font-semibold
          "
        >
          React + Supabase
        </div>
      </div>

      {/* Floating Card 2 */}
      <div
        className="
        absolute
        -right-8
        bottom-12
        rounded-3xl
        bg-white
        border
        border-slate-200
        shadow-xl
        p-5
        w-56
        "
      >
        <p className="text-slate-500 text-sm">
          Dashboard
        </p>

        <h4
          className="
          mt-2
          text-xl
          font-black
          "
        >
          Sales Analytics
        </h4>

        <div
          className="
          mt-4
          text-3xl
          font-black
          text-green-600
          "
        >
          +84%
        </div>

        <p className="text-slate-500 text-sm">
          Growth this month
        </p>
      </div>
    </div>
  );
}