export default function SectionWrapper({
  children,
  reverse = false,
  columns = "lg:grid-cols-2",
}: {
  children: React.ReactNode;
  reverse?: boolean;
  columns?: string;
}) {
  return (
    <section className="w-full flex justify-center py-16 px-6">
      <div
        className={`
          max-w-[1500px] w-full grid grid-cols-1 ${columns} gap-10 items-center
          ${reverse ? "lg:flex-row-reverse" : ""}
        `}
      >
        {children}
      </div>
    </section>
  );
}
