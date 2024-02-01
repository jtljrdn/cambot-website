"use client";
import { useEffect, useState } from "react";
import TextTransition, { presets } from "react-text-transition";
const heroTexts = [
  "That is open-source",
  "For my community",
  "That has Fortnite commands",
  "For Valorant match stats",
  "With Counting Commands",
  "That is easy to use",
  "That has no paywalls",
  "That has a support server",
  "With moderation tools",
];

const ScrollingHero = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const intervalId = setInterval(
      () => {
        setIndex((index) => index + 1);
      },
      3000 // every 5 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);
  return (
    <h1 className="md:text-5xl font-bold text-white rounded-box bg-gradient-to-r from-cyan-500 to-blue-500 p-2 w-fit text-xl">
      <TextTransition springConfig={presets.gentle}>
        {heroTexts[index % heroTexts.length]}
      </TextTransition>
    </h1>
  );
};

export default ScrollingHero;
