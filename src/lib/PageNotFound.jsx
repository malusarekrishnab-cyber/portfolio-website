import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white px-6">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <p className="text-gray-400 text-lg mb-8">
        Page not found — kadachit link chukicha ahe.
      </p>
      <Link
        to="/"
        className="bg-cyan-400 hover:bg-cyan-300 text-black font-semibold px-6 py-3 rounded-lg transition"
      >
        Go back home
      </Link>
    </div>
  );
}
