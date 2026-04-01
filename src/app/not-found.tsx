import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-dvh flex items-center justify-center bg-blue-600 text-white text-center px-4">
      <div>
        <div className="text-8xl mb-4">🎨</div>
        <h1 className="text-5xl font-black mb-4">404</h1>
        <p className="text-xl text-blue-200 mb-8">
          אופס! העמוד הזה לא נמצא
        </p>
        <Link
          href="/"
          className="inline-block px-8 py-4 bg-yellow-400 text-gray-900 font-black text-lg rounded-xl comic-border hover:bg-yellow-300 transition-colors"
        >
          חזרה לדף הבית
        </Link>
      </div>
    </div>
  );
}
