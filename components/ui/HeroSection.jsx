'use client';

import { useState, useEffect } from 'react';

const wordGroups = [
  ["Vishwakarma"],                     // img1
  ["Civil", "And"],                    // img2
  ["Stone", "Work"]                    // img3
];
const backgrounds = [
  "url('img/bedroom.jpeg')",           // img1
  "url('img/p4.jpeg')",                // img2
  "url('img/p5.jpeg')",                // img3
];

const HeroSection = () => {
  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentGroupIndex, setCurrentGroupIndex] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentCharIndex, setCurrentCharIndex] = useState(0);
  const [background, setBackground] = useState(backgrounds[0]);
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    if (currentGroupIndex >= wordGroups.length) return;

    // Set background corresponding to the current group
    setBackground(backgrounds[currentGroupIndex]);

    const currentGroup = wordGroups[currentGroupIndex];
    const currentWord = currentGroup[currentWordIndex];

    if (isTyping) {
      const typingInterval = setInterval(() => {
        if (currentCharIndex < currentWord.length) {
          // Update the current word being typed
          const newDisplayedLines = [...displayedLines];
          if (!newDisplayedLines[currentGroupIndex]) {
            newDisplayedLines[currentGroupIndex] = Array(currentGroup.length).fill('');
          }
          newDisplayedLines[currentGroupIndex][currentWordIndex] = 
            currentWord.substring(0, currentCharIndex + 1);
          setDisplayedLines(newDisplayedLines);
          setCurrentCharIndex(prev => prev + 1);
        } else {
          // Move to next word in group or finish group
          if (currentWordIndex < currentGroup.length - 1) {
            setCurrentWordIndex(prev => prev + 1);
            setCurrentCharIndex(0);
          } else {
            clearInterval(typingInterval);
            setIsTyping(false);
            setTimeout(() => {
              setCurrentGroupIndex(prev => prev + 1);
              setCurrentWordIndex(0);
              setCurrentCharIndex(0);
              setIsTyping(true);
            }, 1500);
          }
        }
      }, 200);

      return () => clearInterval(typingInterval);
    }
  }, [currentGroupIndex, currentWordIndex, currentCharIndex, isTyping, displayedLines]);

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
      <div className="flex flex-col items-center gap-4 text-center font-cinzel">
        {/* Display typed lines */}
        {displayedLines.map((group, groupIndex) => (
          <div key={groupIndex} className="flex gap-4">
            {group.map((word, wordIndex) => (
              <div
                key={wordIndex}
                className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-500 to-white
                           bg-clip-text text-transparent animate-gradient-move"
              >
                {word}
                {/* Show blinking cursor only on the last word of the current group being typed */}
                {groupIndex === currentGroupIndex && 
                 wordIndex === currentWordIndex && 
                 currentCharIndex < wordGroups[currentGroupIndex][currentWordIndex].length && (
                  <span className="ml-1 w-[2px] h-10 border-r-2 border-white animate-blink inline-block" />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HeroSection;