import React from "react";

export default function Footer() {
  return (
    <footer className="mt-16 py-8 border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="flex items-center justify-center gap-2 text-sm text-gray-600 dark:text-gray-400">
          <span>© {new Date().getFullYear()}</span>
          <span className="w-1 h-1 bg-current rounded-full"></span>
          <span>Bharath Durai</span>
          <span className="w-1 h-1 bg-current rounded-full"></span>
          <span>Crafted with care</span>
        </div>
      </div>
    </footer>
  );
}
