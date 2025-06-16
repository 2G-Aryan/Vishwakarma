'use client';

import { useState, useEffect } from 'react';

const words = ["Vishwakarma", "Civil", "And", "Stone", "Work"];
const backgrounds = [
  "url('img/bedroom.jpeg')", // img1
  "url('img/p4.jpeg')",      // img2
  "url('img/p5.jpeg')",      // img3
  "url('img/p1.jpeg')",      // img4
  "url('imgs/q9.jpeg')"      // img5
];

const HeroSection = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [background, setBackground] = useState(backgrounds[0]);

  useEffect(() => {
    if (wordIndex >= words.length) return;

    // Set background corresponding to the current word
    setBackground(backgrounds[wordIndex]);

    const currentWord = words[wordIndex];

    // Slow down typing speed by increasing interval time (e.g., 500ms instead of 100ms)
    const typingInterval = setInterval(() => {
      setCurrentLine(currentWord.substring(0, charIndex + 1));
      setCharIndex(prev => prev + 1);
    }, 200); // Slowed down typing speed to 500ms

    if (charIndex >= currentWord.length) {
      clearInterval(typingInterval);
      setTimeout(() => {
        setDisplayedLines(prev => [...prev, currentWord]);
        setCurrentLine('');
        setCharIndex(0);
        setWordIndex(prev => prev + 1);
      }, 800);
    }

    return () => clearInterval(typingInterval);
  }, [charIndex, wordIndex]);

  return (
    <div
      className="h-screen w-full flex items-center justify-center transition-all duration-1000"
      style={{
        backgroundImage: background,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-col items-center gap-4 text-center font-poppins">
        {/* Display typed lines */}
        {displayedLines.map((line, i) => (
          <div
            key={i}
            className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-white
                       bg-clip-text text-transparent animate-gradient-move"
          >
            {line}
          </div>
        ))}

        {/* Typing line with blinking cursor */}
        {currentLine && (
          <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 via-white to-black
                          bg-clip-text text-transparent animate-gradient-move relative flex items-center"
          >
            {currentLine}
            <span className="ml-1 w-[2px] h-10 border-r-2 border-white animate-blink" />
          </div>
        )}
      </div>
    </div>
  );
};

export default HeroSection;
