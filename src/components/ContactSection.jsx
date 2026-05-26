import { useState } from "react";

export default function ContactSection() {
  const [form, setForm] =
    useState({
      name: "",
      contact: "",
      service: "",
      message: "",
    });

  const [loading, setLoading] =
    useState(false);

  const [status, setStatus] =
    useState("");

  function updateField(e) {
    setForm({
      ...form,
      [e.target.name]:
        e.target.value,
    });
  }

  async function submit(e) {
    e.preventDefault();

    setLoading(true);
    setStatus("");

    try {
      const response = await fetch(
        "https://formspree.io/f/xojbkzov",
        {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            name: form.name,
            contact: form.contact,
            service: form.service,
            message: form.message,
          }),
        }
      );

      if (!response.ok) {
        throw new Error(
          "Không gửi được biểu mẫu"
        );
      }

      setStatus(
        "Đã gửi yêu cầu tư vấn. Tôi sẽ phản hồi sớm nhất có thể."
      );

      setForm({
        name: "",
        contact: "",
        service: "",
        message: "",
      });
    } catch (error) {
      console.log(error);

      setStatus(
        "Gửi thất bại. Vui lòng thử lại hoặc gửi email trực tiếp."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="contact"
      className="
      py-28
      bg-slate-50
      "
    >
      <div
        className="
        max-w-7xl
        mx-auto
        px-8
        "
      >
        <div
          className="
          rounded-[40px]
          bg-white
          border
          border-slate-200
          shadow-sm
          p-10
          md:p-16
          grid
          lg:grid-cols-2
          gap-12
          items-center
          "
        >
          <div>
            <p
              className="
              inline-flex
              px-4
              py-2
              rounded-full
              bg-red-50
              text-red-600
              font-semibold
              "
            >
              LIÊN HỆ TƯ VẤN
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
              Bạn đang cần một website hoặc web app cho công việc?
            </h2>

            <p
              className="
              mt-6
              text-lg
              text-slate-600
              leading-relaxed
              "
            >
              Hãy gửi thông tin nhu cầu của bạn. Tôi sẽ phản hồi với
              hướng triển khai phù hợp, thời gian dự kiến và chi phí
              tham khảo.
            </p>

            <div
              className="
              mt-8
              grid
              gap-4
              text-slate-700
              "
            >
              <div>
                📧 Email: ducta.tmd@gmail.com
              </div>

              <div>
                💼 Dịch vụ: Website, Portfolio, Web App quản lý
              </div>

              <div>
                ⚡ Phù hợp: cá nhân, freelancer, cửa hàng nhỏ, doanh nghiệp nhỏ
              </div>
            </div>
          </div>

          <form
            onSubmit={submit}
            className="
            rounded-[32px]
            bg-slate-50
            border
            border-slate-200
            p-8
            grid
            gap-5
            "
          >
            <input
              name="name"
              value={form.name}
              onChange={updateField}
              required
              placeholder="Tên của bạn"
              className="
              h-14
              px-5
              rounded-2xl
              border
              border-slate-300
              bg-white
              outline-none
              focus:border-blue-500
              "
            />

            <input
              name="contact"
              value={form.contact}
              onChange={updateField}
              required
              placeholder="Email hoặc số điện thoại"
              className="
              h-14
              px-5
              rounded-2xl
              border
              border-slate-300
              bg-white
              outline-none
              focus:border-blue-500
              "
            />

            <select
              name="service"
              value={form.service}
              onChange={updateField}
              required
              className="
              h-14
              px-5
              rounded-2xl
              border
              border-slate-300
              bg-white
              outline-none
              focus:border-blue-500
              "
            >
              <option value="">
                Bạn quan tâm dịch vụ nào?
              </option>
              <option>
                Landing Page
              </option>
              <option>
                Website Portfolio
              </option>
              <option>
                Web App quản lý
              </option>
              <option>
                Chưa rõ, cần tư vấn
              </option>
            </select>

            <textarea
              name="message"
              value={form.message}
              onChange={updateField}
              required
              rows="5"
              placeholder="Mô tả ngắn nhu cầu của bạn"
              className="
              p-5
              rounded-2xl
              border
              border-slate-300
              bg-white
              outline-none
              focus:border-blue-500
              "
            />

            <button
              disabled={loading}
              className="
              h-14
              rounded-2xl
              text-white
              font-semibold
              bg-gradient-to-r
              from-red-500
              to-blue-600
              hover:scale-[1.02]
              transition
              disabled:opacity-60
              "
            >
              {loading
                ? "Đang gửi..."
                : "Gửi yêu cầu tư vấn"}
            </button>

            {status && (
              <p
                className="
                text-sm
                text-slate-600
                leading-relaxed
                "
              >
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}