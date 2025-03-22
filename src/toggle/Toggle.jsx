import React, { useState, useEffect } from "react";

export default function Toggle() {
  const [darkMode, setDarkMode] = useState(() => {
    return localStorage.getItem("theme") === "dark" ? true : false;
  });

  useEffect(() => {
    if (darkMode) {
      document.body.classList.add("dark-mode");
      localStorage.setItem("theme", "dark");
    } else {
      document.body.classList.remove("dark-mode");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  return (
    <div className="container">
      <div>
        <h1>{darkMode ? "Dark Mode" : "Light Mode"}</h1>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? "Switch to Light Mode 🌞" : "Switch to Dark Mode 🌙"}
        </button>
      </div>
    </div>
  );
}
