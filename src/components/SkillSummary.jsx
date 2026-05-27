const skillGroups = [
  {
    title: "Code",
    items: [
      "React",
      "JavaScript",
      "Python",
    ],
  },
  {
    title: "Framework / CMS",
    items: [
      "Vite",
      "WordPress",
      "TailwindCSS",
    ],
  },
  {
    title: "Database / Automation",
    items: [
      "Supabase",
      "Google Sheets",
      "Apps Script",
    ],
  },
];

export default function SkillSummary() {
  return (
    <div
      className="
      mt-14
      grid
      sm:grid-cols-2
      xl:grid-cols-3
      gap-4
      "
    >
      {skillGroups.map((group) => (
        <div
          key={group.title}
          className="
          rounded-[24px]
          bg-white/90
          border
          border-slate-200
          p-5
          shadow-sm
          backdrop-blur
          hover:-translate-y-1
          hover:shadow-lg
          transition
          "
        >
          <h3
            className="
            text-lg
            font-black
            text-slate-950
            "
          >
            {group.title}
          </h3>

          <div
            className="
            mt-4
            flex
            flex-wrap
            gap-2
            "
          >
            {group.items.map((item) => (
              <span
                key={item}
                className="
                rounded-full
                bg-slate-100
                px-3
                py-1.5
                text-sm
                font-medium
                text-slate-700
                "
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}