"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-center bg-green-50 px-6 text-center"> <div className="max-w-lg"> <p className="text-sm font-bold uppercase tracking-[0.3em] text-green-600">
            Page Not Found </p>


            <h1 className="mt-4 text-8xl font-extrabold text-green-700">
                404
            </h1>

            <h2 className="mt-4 text-2xl font-bold text-gray-800 sm:text-3xl">
                Oops! Page Not Found
            </h2>

            <p className="mt-4 leading-7 text-gray-600">
                Sorry, the page you are looking for does not exist,
                may have been moved, or is temporarily unavailable.
            </p>

            <Link
                href="/"
                className="mt-8 inline-flex items-center justify-center rounded-xl bg-green-600 px-6 py-3 font-semibold text-white shadow-md transition hover:bg-green-700"
            >
                ← Back to Home
            </Link>
        </div>
        </main>

    );
}
