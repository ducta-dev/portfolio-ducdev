import {
  useEffect,
  useState,
} from "react";

import {
  getProjects,
} from "../services/projectService";

import ProjectCard from "./ProjectCard";

export default function ProjectSection() {
  const [projects, setProjects] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    try {
      const data =
        await getProjects();

      setProjects(data || []);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      id="projects"
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
          flex
          flex-col
          md:flex-row
          md:items-end
          md:justify-between
          gap-6
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
              DỰ ÁN NỔI BẬT
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
              Một số sản phẩm
              đã thực hiện
            </h2>

            <p
              className="
              mt-5
              max-w-2xl
              text-lg
              text-slate-600
              leading-relaxed
              "
            >
              Các dự án web app, dashboard và hệ thống quản lý
              được thiết kế theo hướng dễ sử dụng, dễ mở rộng
              và có thể triển khai thực tế.
            </p>
          </div>
        </div>

        {loading && (
          <div
            className="
            mt-20
            text-center
            text-slate-500
            "
          >
            Đang tải dự án...
          </div>
        )}

        {!loading && projects.length === 0 && (
          <div
            className="
            mt-20
            rounded-3xl
            bg-white
            border
            border-slate-200
            p-10
            text-center
            text-slate-500
            "
          >
            Chưa có dự án nào
          </div>
        )}

        {!loading && projects.length > 0 && (
          <div
            className="
            mt-16
            grid
            md:grid-cols-2
            lg:grid-cols-3
            gap-8
            "
          >
            {projects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}