import React, { useEffect, useState } from "react";
import "./MotivationPage.css";

const quotes = [
  "You’re not just preparing for an exam — you’re preparing to prove your strength, patience, and passion.",
  "Success doesn’t come from luck; it comes from late nights, persistence, and belief in yourself.",
  "Your hard work will make the future thank the present you.",
  "You’ve got brilliance in your mind and strength in your heart — that’s a combination no exam can defeat.",
  "Even when the world sleeps, I know you’re awake chasing your dream — and I’m so proud of you.",
  "Believe in yourself the way I believe in you — endlessly.",
  "GATE won’t open itself — you’ll break it open. ⚡",
];

function MotivationPage() {
  const [visibleCount, setVisibleCount] = useState(0);

  useEffect(() => {
    if (visibleCount < quotes.length) {
      const timer = setTimeout(() => {
        setVisibleCount((prev) => prev + 1);
      }, 2500);
      return () => clearTimeout(timer);
    }
  }, [visibleCount]);

  return (
    <div className="page">
      <h1>Dear Sarangi 💖</h1>
      <h2>For your GATE Journey — From Sanjay</h2>

      {quotes.map((quote, index) => (
        <blockquote
          key={index}
          className={index < visibleCount ? "show" : ""}
        >
          “{quote}”
        </blockquote>
      ))}

      {visibleCount === quotes.length && (
        <footer className="show">
          With love,<br />Sanjay 💕
        </footer>
      )}
    </div>
  );
}

export default MotivationPage;
