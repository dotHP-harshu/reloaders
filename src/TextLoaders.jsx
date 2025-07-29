import React, { useState, useEffect, useMemo, useRef } from "react";

// Common default props for all loaders
const defaultProps = {
  text: "Loading", // Default text for text-based loaders
  size: "24px", // Font size
  color: "#3498db",
  className: "",
  style: {},
  speed: "normal", // "slow", "normal", "fast"
};

// Helper for generating unique animation names with performance optimization
let animationCounter = 0;
const generateAnimationName = (prefix = "anim") =>
  `${prefix}-${Date.now()}-${animationCounter++}`;

// Speed mapping for different animation durations
const getAnimationDuration = (speed) => {
  const durations = {
    slow: { primary: "2s", secondary: "1.5s", text: "0.5s", delay: "0.15s" },
    normal: { primary: "1.2s", secondary: "1s", text: "0.3s", delay: "0.1s" },
    fast: { primary: "0.8s", secondary: "0.6s", text: "0.15s", delay: "0.05s" },
  };
  return durations[speed] || durations.normal;
};

// 1. Typing Dots Loader
const TypingDotsLoader = ({
  text = defaultProps.text,
  color = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const [dots, setDots] = useState("");
  const duration = getAnimationDuration(speed).text; // Use text duration for interval

  useEffect(() => {
    const intervalTime = parseFloat(duration) * 1000 + 100; // slightly more than text duration
    const interval = setInterval(() => {
      setDots((prevDots) => {
        if (prevDots.length < 3) {
          return prevDots + ".";
        }
        return "";
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, [duration]);

  return (
    <div
      className={className}
      style={{
        color,
        fontSize: size,
        fontFamily: "monospace",
        display: "inline-block",
        ...style,
      }}
      aria-live="polite"
      aria-label={`${text} ${dots}`}
      role="status"
    >
      {text}
      <span style={{ minWidth: "1em", display: "inline-block" }}>{dots}</span>
    </div>
  );
};

// 2. Typewriter Effect
const TypewriterLoader = ({
  text = defaultProps.text,
  color = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  loop = true,
  cursorChar = "|",
  cursorBlinkSpeed = "0.7s",
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isTyping, setIsTyping] = useState(true);
  const animationDelay = getAnimationDuration(speed).delay;

  const cursorBlinkName = useMemo(
    () => generateAnimationName("cursor-blink"),
    []
  );

  useEffect(() => {
    let i = 0;
    let timeout;

    const type = () => {
      if (i < text.length) {
        setDisplayedText(text.substring(0, i + 1));
        i++;
        timeout = setTimeout(type, parseFloat(animationDelay) * 1000);
      } else if (loop) {
        setIsTyping(false); // Stop typing, show full text with blinking cursor
        setTimeout(() => {
          setDisplayedText(""); // Reset for next loop
          i = 0;
          setIsTyping(true);
          type();
        }, 1500); // Pause before re-typing
      } else {
        setIsTyping(false); // Freeze on full word
      }
    };

    type();

    return () => clearTimeout(timeout);
  }, [text, loop, animationDelay]);

  return (
    <>
      <style>
        {`
        @keyframes ${cursorBlinkName} {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        `}
      </style>
      <span
        className={className}
        style={{
          color,
          fontSize: size,
          fontFamily: "monospace",
          display: "inline-block",
          ...style,
        }}
        aria-live="polite"
        aria-label={displayedText}
        role="status"
      >
        {displayedText}
        {!isTyping && (
          <span
            style={{
              animation: `${cursorBlinkName} ${cursorBlinkSpeed} step-end infinite`,
              display: "inline-block",
              verticalAlign: "bottom",
            }}
          >
            {cursorChar}
          </span>
        )}
      </span>
    </>
  );
};

// 3. Text Fade-In and Out
const TextFadeLoader = ({
  text = defaultProps.text,
  color = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  glowEffect = false,
  fadeScale = 1.05,
}) => {
  const animationName = useMemo(() => generateAnimationName("text-fade"), []);
  const duration = getAnimationDuration(speed).primary;

  const glowStyle = glowEffect
    ? `filter: drop-shadow(0 0 8px ${color}60);`
    : "";

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%, 100% {
            opacity: 0.2;
            transform: scale(1);
          }
          50% {
            opacity: 1;
            transform: scale(${fadeScale});
          }
        }
        `}
      </style>
      <span
        className={className}
        style={{
          color,
          fontSize: size,
          display: "inline-block",
          animation: `${animationName} ${duration} ease-in-out infinite`,
          willChange: "opacity, transform",
          ...style,
          ...(glowEffect ? { filter: `drop-shadow(0 0 8px ${color}60)` } : {}), // Apply glow directly for better integration
        }}
        aria-live="polite"
        aria-label={text}
        role="status"
      >
        {text}
      </span>
    </>
  );
};

// 4. Text Pulse Loader
const TextPulseLoader = ({
  text = defaultProps.text,
  color = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  pulseScale = 1.1,
  pulseOpacity = 0.8,
}) => {
  const animationName = useMemo(() => generateAnimationName("text-pulse"), []);
  const duration = getAnimationDuration(speed).primary;

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%, 100% {
            transform: scale(1);
            opacity: 1;
          }
          50% {
            transform: scale(${pulseScale});
            opacity: ${pulseOpacity};
          }
        }
        `}
      </style>
      <span
        className={className}
        style={{
          color,
          fontSize: size,
          display: "inline-block",
          animation: `${animationName} ${duration} ease-in-out infinite`,
          willChange: "transform, opacity",
          ...style,
        }}
        aria-live="polite"
        aria-label={text}
        role="status"
      >
        {text}
      </span>
    </>
  );
};

// 5. Text Wave Loader
const TextWaveLoader = ({
  text = defaultProps.text,
  color = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  waveHeight = "0.2em", // Vertical displacement
  characterDelayMultiplier = 0.1, // Delay between characters
}) => {
  const animationName = useMemo(() => generateAnimationName("text-wave"), []);
  const duration = getAnimationDuration(speed).primary;

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-${waveHeight});
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          fontSize: size,
          display: "inline-block",
          whiteSpace: "pre", // Preserve spaces
          ...style,
        }}
        aria-live="polite"
        aria-label={text}
        role="status"
      >
        {text.split("").map((char, index) => (
          <span
            key={index}
            style={{
              display: "inline-block",
              color: color,
              animation: `${animationName} ${duration} ease-in-out infinite`,
              animationDelay: `${index * characterDelayMultiplier}s`,
              willChange: "transform",
            }}
          >
            {char === " " ? "\u00A0" : char} {/* Render nbsp for space */}
          </span>
        ))}
      </div>
    </>
  );
};

// 6. Glitch Text Loader
const GlitchTextLoader = ({
  text = defaultProps.text,
  color = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  intensity = "3px", // Max horizontal shift
  flickerSpeed = "0.05s",
}) => {
  const glitch1Name = useMemo(() => generateAnimationName("glitch-1"), []);
  const glitch2Name = useMemo(() => generateAnimationName("glitch-2"), []);
  const glitchFlickerName = useMemo(
    () => generateAnimationName("glitch-flicker"),
    []
  );
  const duration = getAnimationDuration(speed).primary;

  return (
    <>
      <style>
        {`
        @keyframes ${glitch1Name} {
          0% { text-shadow: ${intensity} 0 0 ${color}, -${intensity} 0 0 ${color}; }
          25% { text-shadow: -${intensity} 0 0 ${color}, ${intensity} 0 0 ${color}; }
          50% { text-shadow: ${intensity} 0 0 ${color}, -${intensity} 0 0 ${color}; }
          75% { text-shadow: -${intensity} 0 0 ${color}, ${intensity} 0 0 ${color}; }
          100% { text-shadow: ${intensity} 0 0 ${color}, -${intensity} 0 0 ${color}; }
        }

        @keyframes ${glitch2Name} {
          0% { transform: translate(0, 0); }
          20% { transform: translate(-${intensity}, ${intensity}); }
          40% { transform: translate(${intensity}, -${intensity}); }
          60% { transform: translate(-${intensity}, ${intensity}); }
          80% { transform: translate(${intensity}, -${intensity}); }
          100% { transform: translate(0, 0); }
        }

        @keyframes ${glitchFlickerName} {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
          20%, 80% { opacity: 0.9; }
          30%, 70% { opacity: 0.8; }
          40%, 60% { opacity: 1; }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          position: "relative",
          fontSize: size,
          fontWeight: "bold",
          fontFamily: "monospace",
          color: color,
          textShadow: `0 0 5px ${color}60`,
          overflow: "hidden", // Hide pseudo-element overflow
          ...style,
        }}
        aria-live="polite"
        aria-label={text}
        role="status"
      >
        <span
          style={{
            display: "inline-block",
            animation: `${glitchFlickerName} ${flickerSpeed} steps(2, end) infinite, ${glitch2Name} ${duration} ease-in-out infinite`,
            willChange: "transform, opacity",
          }}
        >
          {text}
        </span>
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            content: "attr(data-text)", // Not directly supported by React style
            color: "red",
            textShadow: `2px 2px 0 red, -2px -2px 0 blue`,
            animation: `${glitch1Name} ${duration} ease-in-out infinite`,
            zIndex: -1,
            mixBlendMode: "screen", // Blend mode for RGB effect
            pointerEvents: "none",
          }}
          data-text={text} // Custom attribute for content
        />
        <span
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            content: "attr(data-text)", // Not directly supported by React style
            color: "blue",
            textShadow: `2px 2px 0 blue, -2px -2px 0 red`,
            animation: `${glitch1Name} ${duration} ease-in-out infinite reverse`,
            zIndex: -1,
            mixBlendMode: "screen", // Blend mode for RGB effect
            pointerEvents: "none",
          }}
          data-text={text} // Custom attribute for content
        />
      </div>
    </>
  );
};

// 7. Scrambled Letters
const ScrambledLettersLoader = ({
  text = defaultProps.text,
  color = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  scrambleCharacters = "!@#$%^&*()-_+=[]{};:',.<>/?",
  revealInterval = 100, // Ms per character reveal
}) => {
  const [scrambledText, setScrambledText] = useState(
    Array(text.length)
      .fill("")
      .map(() => {
        const char =
          scrambleCharacters[
            Math.floor(Math.random() * scrambleCharacters.length)
          ];
        return char === " " ? "\u00A0" : char; // Handle spaces
      })
      .join("")
  );
  const intervalRef = useRef(null);

  useEffect(() => {
    let revealedCount = 0;
    const originalChars = text.split("");

    const animateScramble = () => {
      if (revealedCount < originalChars.length) {
        setScrambledText((prev) => {
          const newTextArray = prev.split("");
          if (originalChars[revealedCount] === " ") {
            newTextArray[revealedCount] = "\u00A0"; // Preserve space
          } else {
            newTextArray[revealedCount] = originalChars[revealedCount];
          }

          // Scramble remaining characters
          for (let i = revealedCount + 1; i < newTextArray.length; i++) {
            if (originalChars[i] === " ") {
              newTextArray[i] = "\u00A0"; // Preserve space in scrambled part
            } else {
              newTextArray[i] =
                scrambleCharacters[
                  Math.floor(Math.random() * scrambleCharacters.length)
                ];
            }
          }
          return newTextArray.join("");
        });
        revealedCount++;
      } else {
        clearInterval(intervalRef.current);
        // Optional: loop after a pause
        setTimeout(() => {
          revealedCount = 0;
          setScrambledText(
            Array(text.length)
              .fill("")
              .map(() => {
                const char =
                  scrambleCharacters[
                    Math.floor(Math.random() * scrambleCharacters.length)
                  ];
                return char === " " ? "\u00A0" : char;
              })
              .join("")
          );
          intervalRef.current = setInterval(animateScramble, revealInterval);
        }, 1500); // Pause before scrambling again
      }
    };

    intervalRef.current = setInterval(animateScramble, revealInterval);

    return () => clearInterval(intervalRef.current);
  }, [text, revealInterval, scrambleCharacters]);

  return (
    <span
      className={className}
      style={{
        color,
        fontSize: size,
        fontFamily: "monospace",
        display: "inline-block",
        whiteSpace: "pre", // Ensure spaces are respected
        ...style,
      }}
      aria-live="polite"
      aria-label={scrambledText.replace(/\u00A0/g, " ")} // Remove nbsp for aria-label
      role="status"
    >
      {scrambledText}
    </span>
  );
};

// 8. Color Cycle Text
const ColorCycleTextLoader = ({
  text = defaultProps.text,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  colors = ["#e74c3c", "#3498db", "#2ecc71", "#f1c40f", "#9b59b6", "#fff"], // Default color cycle
}) => {
  const colorAnimationName = useMemo(
    () => generateAnimationName("color-cycle"),
    []
  );
  const duration = getAnimationDuration(speed).primary; // Use primary for full cycle

  // Generate keyframes for color animation
  const keyframes = colors
    .map((c, i) => {
      const percentage = (i / colors.length) * 100;
      return `${percentage}% { color: ${c}; }`;
    })
    .join("\n");

  return (
    <>
      <style>
        {`
        @keyframes ${colorAnimationName} {
          ${keyframes}
          100% { color: ${colors[0]}; } /* Ensure loop back to start */
        }
        `}
      </style>
      <span
        className={className}
        style={{
          fontSize: size,
          display: "inline-block",
          animation: `${colorAnimationName} ${duration} linear infinite`,
          willChange: "color",
          ...style,
        }}
        aria-live="polite"
        aria-label={text}
        role="status"
      >
        {text}
      </span>
    </>
  );
};

// 9. Blinking Text
const BlinkingTextLoader = ({
  text = defaultProps.text,
  color = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  flicker = false,
}) => {
  const animationName = useMemo(() => generateAnimationName("text-blink"), []);
  const duration = getAnimationDuration(speed).primary;

  const keyframes = flicker
    ? `
      0%, 100% { opacity: 1; }
      49% { opacity: 1; }
      50% { opacity: 0; }
      51% { opacity: 1; }
      52% { opacity: 0; }
      53% { opacity: 1; }
      99% { opacity: 0; }
    `
    : `
      0%, 100% { opacity: 1; }
      50% { opacity: 0; }
    `;

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          ${keyframes}
        }
        `}
      </style>
      <span
        className={className}
        style={{
          color,
          fontSize: size,
          display: "inline-block",
          animation: `${animationName} ${duration} ${
            flicker ? "steps(1, end)" : "ease-in-out"
          } infinite`,
          willChange: "opacity",
          ...style,
        }}
        aria-live="polite"
        aria-label={text}
        role="status"
      >
        {text}
      </span>
    </>
  );
};

// 10. Text Trail Loader
const TextTrailLoader = ({
  text = defaultProps.text,
  size = defaultProps.size,
  color = defaultProps.color,
  trailColor = defaultProps.trailColor,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useRef(generateAnimationName("trail-fade")).current;
  const duration = getAnimationDuration(speed).primary;

  useEffect(() => {
    const styleTag = document.createElement("style");
    styleTag.innerHTML = `
      @keyframes ${animationName} {
        0% { opacity: 0.2; transform: translateY(6px); color: ${trailColor}; }
        50% { opacity: 1; transform: translateY(0); color: ${color}; }
        100% { opacity: 0.2; transform: translateY(6px); color: ${trailColor}; }
      }
    `;
    document.head.appendChild(styleTag);
    return () => document.head.removeChild(styleTag);
  }, [animationName, color, trailColor]);

  return (
    <div
      className={className}
      style={{
        fontSize: size,
        fontFamily: "monospace",
        display: "inline-block",
        whiteSpace: "pre",
        ...style,
      }}
      aria-live="polite"
      aria-label={text}
      role="status"
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            animation: `${animationName} ${duration} ease-in-out infinite`,
            animationDelay: `${i * 0.12}s`,
            willChange: "opacity, transform, color",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};

// 11. Typing Reveal Loader
const TypingRevealLoader = ({
  text = defaultProps.text,
  size = defaultProps.size,
  color = defaultProps.color,
  speed = "fast",
  className = defaultProps.className,
  style = defaultProps.style
}) => {
  const [displayed, setDisplayed] = useState("");
  const duration = speed === "slow" ? 400 : speed === "normal" ? 200 : speed === "fast" ? 100 : 0 ;

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      setDisplayed(text.slice(0, i + 1));
      i++;
      if (i >= text.length) i = 0; // loop
    }, duration);
    return () => clearInterval(interval);
  }, [text, duration]);

  return (
    <span style={{ fontSize: size, fontFamily: "monospace", color , ...style}} className={className}>
      {displayed}
      <span style={{ borderRight: `2px solid ${color}`, marginLeft: "2px" }} />
    </span>
  );
};

// 12. Flip Text Loader
const FlipTextLoader = ({
  text = defaultProps.text,
  color = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useRef(`flip-${Date.now()}`).current;
  const duration = getAnimationDuration(speed).primary;

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @keyframes ${animationName} {
        0% { transform: rotateX(0); }
        50% { transform: rotateX(180deg); }
        100% { transform: rotateX(360deg); }
      }
    `;
    document.head.appendChild(style);
    return () => style.remove();
  }, [animationName]);

  return (
    <div
    className={className}
      style={{
        fontSize: size,
        color,
        fontFamily: "monospace",
        display: "inline-block",
        ...style
      }}
    >
      {text.split("").map((char, i) => (
        <span
          key={i}
          style={{
            display: "inline-block",
            animation: `${animationName} ${duration} linear infinite`,
            animationDelay: `${i * 0.1}s`,
            transformOrigin: "50% 50%",
            perspective: "400px",
          }}
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </div>
  );
};




export {
  TypingDotsLoader,
  TypewriterLoader,
  TextFadeLoader,
  TextPulseLoader,
  TextWaveLoader,
  GlitchTextLoader,
  ScrambledLettersLoader,
  ColorCycleTextLoader,
  BlinkingTextLoader,
  TextTrailLoader,
  TypingRevealLoader,
  FlipTextLoader,
};
