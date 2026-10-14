"use client"; // Crucial for Next.js App Router compatibility

import "react-toastify/dist/ReactToastify.css"; //
import { ToastContainer } from "react-toastify"; //

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  return (
    <>
      {children}
      <ToastContainer 
        position="top-right" 
        autoClose={3000} 
        theme="light"
      />
    </>
  );
}
