import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import supabase from "../services/supabase";

import { getProjects } from "../services/projectService";
import { uploadGallery, saveGallery } from "../services/galleryService";
import { logout } from "../services/authService";

import AdminTable from "../components/AdminTable";
import slugify from "../utils/slugify";

export default function Admin() {
  const navigate = useNavigate();

  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(null);
  const [files, setFiles] = useState([]);
  const [preview, setPreview] = useState([]);

  const [form, setForm] = useState({
    title: "",
    slug: "",
    description: "",
    content: "",
    cover_image: "",
    video: "",
    price: "",
    duration: "",
    features: "",
  });

  useEffect(() => {
    load();
  }, []);

  async function load() {
    const data = await getProjects();
    setProjects(data || []);
  }

  function reset() {
    setEditing(null);
    setFiles([]);
    setPreview([]);

    setForm({
      title: "",
      slug: "",
      description: "",
      content: "",
      cover_image: "",
      video: "",
      price: "",
      duration: "",
      features: "",
    });
  }

  function updateField(e) {
    const { name, value } = e.target;

    if (name === "title") {
      setForm((prev) => ({
        ...prev,
        title: value,
        slug: slugify(value),
      }));

      return;
    }

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  function selectFiles(e) {
    const selected = Array.from(e.target.files);

    setFiles(selected);

    setPreview(
      selected.map((file) =>
        URL.createObjectURL(file)
      )
    );
  }

  function edit(project) {
    setEditing(project.id);

    setForm({
      title: project.title || "",
      slug: project.slug || "",
      description: project.description || "",
      content: project.content || "",
      cover_image: project.cover_image || "",
      video: project.video || "",
      price: project.price || "",
      duration: project.duration || "",
      features: Array.isArray(project.features)
        ? project.features.join("\n")
        : project.features || "",
    });

    setPreview(
      project.project_images?.map(
        (item) => item.image_url
      ) || []
    );

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  async function submit(e) {
    e.preventDefault();

    try {
      setLoading(true);

      let cover = form.cover_image;
      let gallery = [];

      if (files.length) {
        gallery = await uploadGallery(files);
        cover = gallery[0];
      }

      const featuresArray = form.features
        .split("\n")
        .map((item) => item.trim())
        .filter(Boolean);

      const payload = {
        title: form.title,
        slug: form.slug,
        description: form.description,
        content: form.content,
        cover_image: cover,
        video: form.video,
        price: form.price,
        duration: form.duration,
        features: featuresArray,
      };

      let projectId = editing;

      if (editing) {
        const { error } = await supabase
          .from("projects")
          .update(payload)
          .eq("id", editing);

        if (error) {
          throw error;
        }
      } else {
        const { data, error } = await supabase
          .from("projects")
          .insert([payload])
          .select();

        if (error) {
          throw error;
        }

        projectId = data?.[0]?.id;
      }

      if (projectId && gallery.length) {
        await saveGallery(projectId, gallery);
      }

      alert(
        editing
          ? "Đã cập nhật dự án"
          : "Đã thêm dự án"
      );

      reset();
      load();
    } catch (error) {
      console.log(error);
      alert(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    await logout();
    navigate("/login");
  }

  return (
    <section className="max-w-6xl mx-auto px-8 py-20">
      <div className="flex justify-between items-center mb-10">
        <h1 className="text-6xl font-black">
          Admin
        </h1>

        <button
          onClick={signOut}
          className="text-red-500 font-semibold"
        >
          Đăng xuất
        </button>
      </div>

      <form
        onSubmit={submit}
        className="space-y-5"
      >
        <input
          name="title"
          value={form.title}
          onChange={updateField}
          placeholder="Tên dự án"
          className="w-full p-4 border rounded-2xl"
        />

        <input
          value={form.slug}
          readOnly
          placeholder="Slug tự sinh"
          className="w-full p-4 rounded-2xl bg-gray-100"
        />

        <textarea
          rows="4"
          name="description"
          value={form.description}
          onChange={updateField}
          placeholder="Mô tả ngắn"
          className="w-full p-4 border rounded-2xl"
        />

        <textarea
          rows="14"
          name="content"
          value={form.content}
          onChange={updateField}
          placeholder={`## Giới thiệu\n\nViết mô tả chi tiết dự án ở đây...\n\n## Công nghệ sử dụng\n\n- React\n- Supabase\n- Vite`}
          className="w-full p-4 border rounded-2xl font-mono text-sm"
        />

        <textarea
          rows="6"
          name="features"
          value={form.features}
          onChange={updateField}
          placeholder={`Quản lý sản phẩm\nThanh toán QR\nBáo cáo doanh thu`}
          className="w-full p-4 border rounded-2xl"
        />

        <input
          name="video"
          value={form.video}
          onChange={updateField}
          placeholder="Video URL"
          className="w-full p-4 border rounded-2xl"
        />

        <input
          name="price"
          value={form.price}
          onChange={updateField}
          placeholder="Giá"
          className="w-full p-4 border rounded-2xl"
        />

        <input
          name="duration"
          value={form.duration}
          onChange={updateField}
          placeholder="Thời gian"
          className="w-full p-4 border rounded-2xl"
        />

        <input
          type="file"
          multiple
          accept="image/*"
          onChange={selectFiles}
        />

        {preview.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {preview.map((img) => (
              <img
                key={img}
                src={img}
                alt=""
                className="rounded-3xl h-44 w-full object-cover"
              />
            ))}
          </div>
        )}

        <div className="flex gap-4">
          <button
            disabled={loading}
            className="bg-black text-white px-8 py-4 rounded-2xl"
          >
            {loading
              ? "Đang lưu..."
              : editing
              ? "Cập nhật"
              : "Thêm dự án"}
          </button>

          {editing && (
            <button
              type="button"
              onClick={reset}
              className="border px-8 py-4 rounded-2xl"
            >
              Huỷ
            </button>
          )}
        </div>
      </form>

      <div className="mt-20">
        <AdminTable
          projects={projects}
          edit={edit}
          reload={load}
        />
      </div>
    </section>
  );
}