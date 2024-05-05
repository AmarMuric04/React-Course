export default function Title({ title, extra }) {
  return (
    <h1 className="text-4xl font-bold mt-16 mb-8">
      {title} {extra && <span>{extra}</span>}
    </h1>
  );
}
