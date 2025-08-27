export function Button({ className = "", children, ...props }) {
  return (
    <button
      className={`inline-flex items-center justify-center font-semibold rounded-xl transition hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
