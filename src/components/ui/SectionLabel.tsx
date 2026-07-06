export default function SectionLabel({ children }: { children: string }) {
  return (
    <p className="text-center text-lg font-bold tracking-tight text-brand-500 sm:text-xl">
      {children}
    </p>
  );
}
