import React from "react";

interface ButtonProps {
  text: string; // Text to display on the button
  onClick?: () => void; // Function to handle click events
  type?: "button" | "submit" | "reset"; // Button type
  className?: string; // Additional Tailwind or custom styles
}

export default function Button({
  text,
  onClick,
  type = "button",
  className = "",
}: ButtonProps) {
  
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-primary text-white font-semibold py-2 px-4 rounded-lg shadow-md hover:bg-blue-950 focus:ring-2 focus:ring-indigo-300 transition-all duration-300 ${className}`}
    >
      {text}
    </button>
  );
}
