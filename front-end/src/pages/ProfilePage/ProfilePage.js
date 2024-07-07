import React from "react";

export default function ProfilePage() {
  return (
    <div>
      <h1 className="text-5xl font-medium drop-shadow-lg text-left">
        Profile Page
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          localStorage.clear();
          window.location.href = "/";
        }}
      >
        Logout
      </button>
    </div>
  );
}
