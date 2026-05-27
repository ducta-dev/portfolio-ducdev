import {
  FaFacebook,
  FaGithub,
  FaYoutube,
  FaTiktok,
  FaEnvelope,
} from "react-icons/fa";

import { SiZalo } from "react-icons/si";

const socialLinks = [
  {
    title: "Facebook",
    icon: <FaFacebook />,
    url: "https://facebook.com/",
    color: "from-blue-500 to-blue-600",
  },

  {
    title: "GitHub",
    icon: <FaGithub />,
    url: "https://github.com/ductaminh",
    color: "from-slate-700 to-slate-900",
  },

  {
    title: "YouTube",
    icon: <FaYoutube />,
    url: "https://youtube.com/",
    color: "from-red-500 to-red-600",
  },

  {
    title: "TikTok",
    icon: <FaTiktok />,
    url: "https://tiktok.com/",
    color: "from-slate-900 to-black",
  },

  {
    title: "Zalo",
    icon: <SiZalo />,
    url: "https://zalo.me/",
    color: "from-cyan-500 to-blue-500",
  },

  {
    title: "Email",
    icon: <FaEnvelope />,
    url: "mailto:englishbook24h@gmail.com",
    color: "from-orange-500 to-red-500",
  },
];

export default function SocialSection() {
  return (
    <section
      className="
      py-28
      bg-white
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        "
      >
        <div className="max-w-3xl">
          <p
            className="
            inline-flex
            px-4
            py-2
            rounded-full
            bg-blue-50
            text-blue-600
            font-semibold
            "
          >
            KẾT NỐI & CỘNG ĐỒNG
          </p>

          <h2
            className="
            mt-5
            text-5xl
            font-black
            tracking-tight
            text-slate-950
            "
          >
            Theo dõi và kết nối với DucTM
          </h2>

          <p
            className="
            mt-5
            text-lg
            text-slate-600
            leading-relaxed
            "
          >
            Bạn có thể theo dõi các dự án, video, bài chia sẻ và liên
            hệ trực tiếp thông qua các nền tảng bên dưới.
          </p>
        </div>

        <div
          className="
          mt-16
          grid
          sm:grid-cols-2
          lg:grid-cols-3
          gap-6
          "
        >
          {socialLinks.map((item) => (
            <a
              key={item.title}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-slate-200
              bg-slate-50
              p-8
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              "
            >
              <div
                className={`
                w-16
                h-16
                rounded-2xl
                flex
                items-center
                justify-center
                text-3xl
                text-white
                bg-gradient-to-br
                ${item.color}
                `}
              >
                {item.icon}
              </div>

              <h3
                className="
                mt-6
                text-2xl
                font-black
                text-slate-950
                "
              >
                {item.title}
              </h3>

              <p
                className="
                mt-3
                text-slate-600
                leading-relaxed
                "
              >
                Kết nối với DucTM thông qua nền tảng {item.title}.
              </p>

              <div
                className="
                mt-6
                inline-flex
                items-center
                gap-2
                font-semibold
                text-blue-600
                "
              >
                Truy cập
                <span
                  className="
                  transition
                  group-hover:translate-x-1
                  "
                >
                  →
                </span>
              </div>

              <div
                className="
                absolute
                -top-10
                -right-10
                w-32
                h-32
                rounded-full
                bg-gradient-to-br
                from-red-100
                to-blue-100
                blur-3xl
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
                "
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}