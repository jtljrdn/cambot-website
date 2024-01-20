"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
const heroTexts = [
  "That did this thing",
  "That did this other thing",
  "That did this third thing",
];

const ScrollingHero = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      3000 // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <h1 className="text-6xl rounded-box bg-neutral p-2">
      <TextTransition springConfig={presets.gentle}>
        {heroTexts[index % heroTexts.length]}
      </TextTransition>
    </h1>
  );
};

export default ScrollingHero;
