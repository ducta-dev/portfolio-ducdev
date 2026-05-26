const pricingPlans = [
  {
    name: "Landing Page",
    price: "3 – 6 triệu",
    duration: "5 – 10 ngày",
    description:
      "Phù hợp cho cá nhân, dịch vụ nhỏ hoặc sản phẩm cần một trang giới thiệu chuyên nghiệp.",
    features: [
      "Thiết kế giao diện responsive",
      "Giới thiệu dịch vụ / sản phẩm",
      "Nút liên hệ nhanh",
      "Tối ưu hiển thị mobile",
    ],
    highlight: false,
  },
  {
    name: "Website Portfolio",
    price: "6 – 12 triệu",
    duration: "1 – 2 tuần",
    description:
      "Phù hợp cho freelancer, chuyên gia cá nhân hoặc studio muốn giới thiệu dự án và dịch vụ.",
    features: [
      "Trang giới thiệu cá nhân / thương hiệu",
      "Danh sách dự án",
      "Trang chi tiết dự án",
      "Quản lý nội dung cơ bản",
    ],
    highlight: true,
  },
  {
    name: "Web App Quản Lý",
    price: "12 – 25 triệu",
    duration: "2 – 5 tuần",
    description:
      "Phù hợp cho cửa hàng hoặc doanh nghiệp nhỏ cần hệ thống quản lý nội bộ đơn giản.",
    features: [
      "Dashboard quản lý",
      "Thêm / sửa / xóa dữ liệu",
      "Upload hình ảnh / tài liệu",
      "Phân quyền cơ bản",
    ],
    highlight: false,
  },
];

export default function PricingSection() {
  return (
    <section
      id="pricing"
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
            BẢNG GIÁ THAM KHẢO
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
            Gói dịch vụ phù hợp cho từng nhu cầu
          </h2>

          <p
            className="
            mt-5
            text-lg
            text-slate-600
            leading-relaxed
            "
          >
            Mức giá dưới đây chỉ mang tính tham khảo. Chi phí thực tế
            sẽ phụ thuộc vào phạm vi chức năng, số lượng màn hình và
            mức độ tùy chỉnh của từng dự án.
          </p>
        </div>

        <div
          className="
          mt-16
          grid
          lg:grid-cols-3
          gap-8
          "
        >
          {pricingPlans.map((plan) => (
            <article
              key={plan.name}
              className={`
              relative
              rounded-[32px]
              p-8
              border
              transition
              duration-300
              hover:-translate-y-2
              hover:shadow-2xl
              ${
                plan.highlight
                  ? "bg-gradient-to-br from-red-500 to-blue-600 text-white border-transparent shadow-xl"
                  : "bg-slate-50 text-slate-950 border-slate-200"
              }
              `}
            >
              {plan.highlight && (
                <div
                  className="
                  absolute
                  top-6
                  right-6
                  rounded-full
                  bg-white/20
                  px-4
                  py-2
                  text-sm
                  font-semibold
                  "
                >
                  Phổ biến
                </div>
              )}

              <h3
                className="
                text-3xl
                font-black
                "
              >
                {plan.name}
              </h3>

              <p
                className={`
                mt-5
                leading-relaxed
                ${
                  plan.highlight
                    ? "text-white/85"
                    : "text-slate-600"
                }
                `}
              >
                {plan.description}
              </p>

              <div className="mt-8">
                <div
                  className="
                  text-4xl
                  font-black
                  "
                >
                  {plan.price}
                </div>

                <div
                  className={`
                  mt-2
                  ${
                    plan.highlight
                      ? "text-white/75"
                      : "text-slate-500"
                  }
                  `}
                >
                  Thời gian: {plan.duration}
                </div>
              </div>

              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li
                    key={feature}
                    className="
                    flex
                    gap-3
                    "
                  >
                    <span>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`
                mt-10
                w-full
                py-4
                rounded-2xl
                font-semibold
                transition
                ${
                  plan.highlight
                    ? "bg-white text-slate-950 hover:bg-slate-100"
                    : "bg-white border border-slate-300 hover:bg-slate-100"
                }
                `}
              >
                Tư vấn gói này
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}