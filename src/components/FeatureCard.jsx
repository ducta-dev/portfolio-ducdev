export default function FeatureCard({
  title,
}) {
  return (
    <div
      className="
      rounded-3xl

      p-8

      bg-white

      border

      hover:shadow-lg

      transition
      "
    >
      <div
        className="
        text-4xl
        "
      >
        ✨
      </div>

      <h3
        className="
        mt-5

        text-xl

        font-bold
        "
      >
        {title}
      </h3>
    </div>
  );
}