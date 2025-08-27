export function Card({ className = "", children }) {
  return <div className={`rounded-2xl shadow-md bg-white ${className}`}>{children}</div>;
}
export function CardContent({ className = "", children }) {
  return <div className={`p-6 ${className}`}>{children}</div>;
}
