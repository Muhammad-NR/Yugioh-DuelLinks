import React from 'react';
// Hapus import useSearchParams karena bikin error build
import Link from 'next/link'; 

const Custom404 = () => {
  // Hapus const searchParams = ...

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 text-center">
      <h1 className="text-6xl font-bold mb-4">404</h1>
      <h2 className="text-2xl font-bold mb-2">Page Not Found</h2>
      <p className="text-muted-foreground mb-8">
        The page you are looking for does not exist.
      </p>
      
      <Link href="/">
        <button className="px-4 py-2 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition">
          Back to Home
        </button>
      </Link>
    </div>
  );
};

export default Custom404;