import { Link } from "react-router-dom";

export default function ProjectCard({
  project,
}) {
  if (!project) return null;

  const cover =
    project.cover_image ||
    project.project_images?.[0]?.image_url ||
    "/placeholder.png";

  return (
    <Link
      to={`/project/${project.slug}`}
      className="group"
    >
      <article
        className="
        h-full
        overflow-hidden
        rounded-[32px]
        bg-white
        border
        border-slate-200
        shadow-sm
        transition
        duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        "
      >
        <div
          className="
          aspect-[16/10]
          overflow-hidden
          bg-slate-100
          "
        >
          <img
            src={cover}
            alt={project.title}
            className="
            w-full
            h-full
            object-cover
            transition
            duration-700
            group-hover:scale-105
            "
          />
        </div>

        <div className="p-7">
          <div
            className="
            inline-flex
            px-3
            py-1
            rounded-full
            bg-blue-50
            text-blue-600
            text-sm
            font-semibold
            "
          >
            Web App
          </div>

          <h3
            className="
            mt-5
            text-3xl
            font-black
            text-slate-950
            "
          >
            {project.title}
          </h3>

          <p
            className="
            mt-4
            text-slate-600
            leading-relaxed
            line-clamp-3
            "
          >
            {project.description}
          </p>

          <div
            className="
            mt-8
            flex
            items-center
            justify-between
            gap-4
            "
          >
            {project.price && (
              <span
                className="
                font-bold
                text-red-500
                "
              >
                {project.price}
              </span>
            )}

            {project.duration && (
              <span
                className="
                text-sm
                text-slate-500
                "
              >
                {project.duration}
              </span>
            )}
          </div>

          <div
            className="
            mt-8
            inline-flex
            font-semibold
            text-blue-600
            group-hover:translate-x-1
            transition
            "
          >
            Xem chi tiết →
          </div>
        </div>
      </article>
    </Link>
  );
}