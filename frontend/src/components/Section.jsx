"use client";

export default function Section({
  title,
  subtitle,
  children,
  className = "",
}) {
  return (
    <section
      className={`py-12 px-6 md:px-10 bg-[#140810] text-white ${className}`}
    >
      {/* HEADER */}
      {(title || subtitle) && (
        <div className="mb-8">
          {title && (
            <h2 className="text-3xl md:text-4xl font-bold mb-2">
              {title}
            </h2>
          )}
          {subtitle && (
            <p className="text-gray-400 max-w-2xl">
              {subtitle}
            </p>
          )}
        </div>
      )}

      {/* CONTENT */}
      <div>{children}</div>
    </section>
  );
}
