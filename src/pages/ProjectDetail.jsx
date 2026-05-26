import {
  useEffect,
  useState,
} from "react";

import {
  useNavigate,
  useParams,
} from "react-router-dom";

import ReactMarkdown from "react-markdown";

import {
  getProjectBySlug,
} from "../services/projectService";

export default function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [project, setProject] =
    useState(null);

  const [loading, setLoading] =
    useState(true);

  const [selectedImage, setSelectedImage] =
    useState(null);

  useEffect(() => {
    loadData();
  }, [slug]);

  async function loadData() {
    try {
      setLoading(true);

      const data =
        await getProjectBySlug(slug);

      setProject(data);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  function getFeatures(value) {
    if (Array.isArray(value)) {
      return value;
    }

    if (typeof value === "string") {
      return value
        .split(/,|\n/)
        .map((item) => item.trim())
        .filter(Boolean);
    }

    return [];
  }

  function getEmbedVideo(url) {
    if (!url) return "";

    if (url.includes("watch?v=")) {
      return url.replace(
        "watch?v=",
        "embed/"
      );
    }

    if (url.includes("youtu.be/")) {
      const id =
        url.split("youtu.be/")[1];

      return `https://www.youtube.com/embed/${id}`;
    }

    return url;
  }

  if (loading) {
    return (
      <main className="min-h-screen grid place-items-center bg-slate-50 text-slate-600">
        Đang tải...
      </main>
    );
  }

  if (!project) {
    return (
      <main className="min-h-screen grid place-items-center bg-slate-50 text-slate-600">
        Không tìm thấy dự án
      </main>
    );
  }

  const gallery =
    project.project_images || [];

  const features =
    getFeatures(project.features);

  const embedVideo =
    getEmbedVideo(project.video);

  return (
    <>
      <main className="min-h-screen bg-slate-50 text-slate-950">
        <section className="max-w-7xl mx-auto px-8 py-16">
          <button
            onClick={() => navigate(-1)}
            className="mb-10 inline-flex items-center px-5 py-3 rounded-2xl bg-white border border-slate-200 text-slate-700 hover:bg-slate-100 transition"
          >
            ← Quay lại
          </button>

          <div className="grid lg:grid-cols-2 gap-14 items-center">
            <div className="rounded-[40px] overflow-hidden bg-white border border-slate-200 shadow-xl">
              {project.cover_image ? (
                <img
                  src={project.cover_image}
                  alt={project.title}
                  className="w-full h-[560px] object-cover"
                />
              ) : (
                <div className="h-[560px] grid place-items-center text-slate-400">
                  Chưa có ảnh cover
                </div>
              )}
            </div>

            <div>
              <div className="inline-flex px-4 py-2 rounded-full bg-red-50 text-red-600 text-sm font-semibold">
                Dự án nổi bật
              </div>

              <h1 className="mt-6 text-6xl font-black leading-tight tracking-tight text-slate-950">
                {project.title}
              </h1>

              {project.description && (
                <p className="mt-6 text-xl leading-8 text-slate-600">
                  {project.description}
                </p>
              )}

              <div className="mt-10 grid sm:grid-cols-2 gap-5">
                {project.price && (
                  <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                    <div className="text-slate-500">
                      Giá tham khảo
                    </div>

                    <div className="mt-2 text-2xl font-black bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
                      {project.price}
                    </div>
                  </div>
                )}

                {project.duration && (
                  <div className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm">
                    <div className="text-slate-500">
                      Thời gian
                    </div>

                    <div className="mt-2 text-2xl font-black text-slate-900">
                      {project.duration}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {project.content && (
            <section className="mt-28">
              <p className="text-red-500 font-semibold">
                CASE STUDY
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Mô tả chi tiết
              </h2>

              <div className="mt-10 rounded-[32px] bg-white border border-slate-200 p-10 shadow-sm">
                <div className="space-y-6 text-slate-700 leading-8">
                  <ReactMarkdown
                    components={{
                      h1: ({ children }) => (
                        <h1 className="text-4xl font-black text-slate-950 mt-8">
                          {children}
                        </h1>
                      ),

                      h2: ({ children }) => (
                        <h2 className="text-3xl font-black text-slate-950 mt-8">
                          {children}
                        </h2>
                      ),

                      h3: ({ children }) => (
                        <h3 className="text-2xl font-bold text-slate-900 mt-6">
                          {children}
                        </h3>
                      ),

                      p: ({ children }) => (
                        <p className="text-slate-700 leading-8">
                          {children}
                        </p>
                      ),

                      ul: ({ children }) => (
                        <ul className="list-disc pl-6 space-y-2">
                          {children}
                        </ul>
                      ),

                      ol: ({ children }) => (
                        <ol className="list-decimal pl-6 space-y-2">
                          {children}
                        </ol>
                      ),

                      li: ({ children }) => (
                        <li className="text-slate-700">
                          {children}
                        </li>
                      ),

                      strong: ({ children }) => (
                        <strong className="font-bold text-slate-950">
                          {children}
                        </strong>
                      ),
                    }}
                  >
                    {project.content}
                  </ReactMarkdown>
                </div>
              </div>
            </section>
          )}

          {features.length > 0 && (
            <section className="mt-28">
              <p className="text-red-500 font-semibold">
                KEY FEATURES
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Tính năng nổi bật
              </h2>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((item, index) => (
                  <div
                    key={index}
                    className="rounded-3xl bg-white border border-slate-200 p-6 shadow-sm hover:-translate-y-1 hover:shadow-xl transition"
                  >
                    <div className="mb-4 w-10 h-10 rounded-2xl bg-gradient-to-r from-red-500 to-blue-600 text-white grid place-items-center">
                      ✓
                    </div>

                    <div className="font-semibold text-slate-800">
                      {item}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {gallery.length > 0 && (
            <section className="mt-28">
              <p className="text-blue-600 font-semibold">
                PRODUCT SCREENSHOTS
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Gallery
              </h2>

              <p className="mt-4 text-slate-600">
                Bấm vào hình để xem ảnh kích thước lớn.
              </p>

              <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {gallery.map((item) => (
                  <button
                    key={item.id}
                    onClick={() =>
                      setSelectedImage(
                        item.image_url
                      )
                    }
                    className="group overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-sm"
                  >
                    <img
                      src={item.image_url}
                      alt=""
                      className="w-full h-[300px] object-cover group-hover:scale-105 transition duration-500"
                    />
                  </button>
                ))}
              </div>
            </section>
          )}

          {embedVideo && (
            <section className="mt-28">
              <p className="text-red-500 font-semibold">
                VIDEO DEMO
              </p>

              <h2 className="mt-3 text-4xl font-black">
                Demo sản phẩm
              </h2>

              <div className="mt-10 overflow-hidden rounded-[32px] bg-white border border-slate-200 shadow-xl">
                <iframe
                  src={embedVideo}
                  title={project.title}
                  allowFullScreen
                  className="w-full h-[650px]"
                />
              </div>
            </section>
          )}
        </section>
      </main>

      {selectedImage && (
        <div
          onClick={() =>
            setSelectedImage(null)
          }
          className="fixed inset-0 z-50 bg-black/90 p-6 flex items-center justify-center"
        >
          <button
            onClick={() =>
              setSelectedImage(null)
            }
            className="absolute top-6 right-8 text-white text-5xl"
          >
            ×
          </button>

          <img
            src={selectedImage}
            alt=""
            onClick={(event) =>
              event.stopPropagation()
            }
            className="max-w-full max-h-full rounded-3xl shadow-2xl"
          />
        </div>
      )}
    </>
  );
}