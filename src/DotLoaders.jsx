import React from "react";

// Common default props for all preloaders
const defaultProps = {
  size: "64px",
  color: "#3498db",
  className: "",
  style: {},
};

// Helper for generating unique animation names
let animationCounter = 0;
const generateAnimationName = (prefix = "anim") =>
  `${prefix}-${animationCounter++}`;

// Enhanced Three Bouncing Dots with smoother animation
const ThreeBouncingDots = ({
  size = "16px",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  gap = "6px",
}) => {
  const bounceAnimationName = generateAnimationName("bounce");
  return (
    <>
      <style>
        {`
        @keyframes ${bounceAnimationName} {
          0%, 70%, 100% { 
            transform: translateY(0) scale(1);
            opacity: 0.7;
          }
          35% { 
            transform: translateY(-${parseFloat(size) * 0.8}px) scale(1.1);
            opacity: 1;
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width:"fit-content",
          height: `calc(${size} * 2.5)`,
          gap,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(3)].map((_, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: "50%",
              animation: `${bounceAnimationName} 1.2s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
              animationDelay: `${i * 0.15}s`,
              willChange: "transform, opacity",
              boxShadow: `0 2px 8px rgba(${parseInt(
                color.slice(1, 3),
                16
              )}, ${parseInt(color.slice(3, 5), 16)}, ${parseInt(
                color.slice(5, 7),
                16
              )}, 0.3)`,
            }}
          />
        ))}
      </div>
    </>
  );
};

// Enhanced Dots Fading with gradient effect
const DotsFading = ({
  size = "14px",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  dotCount = 5,
  gap = "4px",
}) => {
  const fadeAnimationName = generateAnimationName("fade");
  return (
    <>
      <style>
        {`
        @keyframes ${fadeAnimationName} {
          0%, 80%, 100% { 
            opacity: 0.2;
            transform: scale(0.8);
          }
          40% { 
            opacity: 1;
            transform: scale(1);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          justifyContent: "center",
          gap,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(dotCount)].map((_, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              background: `linear-gradient(135deg, ${color}, ${color}cc)`,
              borderRadius: "50%",
              animation: `${fadeAnimationName} 1.4s infinite ease-in-out`,
              animationDelay: `${i * 0.12}s`,
              willChange: "transform, opacity",
              boxShadow: `0 0 6px ${color}40`,
            }}
          />
        ))}
      </div>
    </>
  );
};

// Enhanced Dot Wave with elastic movement
const DotWave = ({
  size = "16px",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  dotCount = 5,
  gap = "4px",
}) => {
  const waveAnimationName = generateAnimationName("wave");
  return (
    <>
      <style>
        {`
        @keyframes ${waveAnimationName} {
          0%, 60%, 100% { 
            transform: translateY(0) scale(1);
          }
          30% { 
            transform: translateY(-${parseFloat(size) * 1.2}px) scale(1.15);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "flex-end",
          width: "fit-content",
          justifyContent: "center",
          height: `calc(${size} * 2.8)`,
          gap,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(dotCount)].map((_, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              background: `radial-gradient(circle, ${color}, ${color}dd)`,
              borderRadius: "50%",
              animation: `${waveAnimationName} 1.5s infinite cubic-bezier(0.36, 0, 0.66, -0.56)`,
              animationDelay: `${i * 0.1}s`,
              willChange: "transform",
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
          />
        ))}
      </div>
    </>
  );
};

// Enhanced Dot Circle Loader with smooth rotation
const DotCircleLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  dotCount = 8,
  dotSize = "12px",
}) => {
  const circleDotAnimationName = generateAnimationName("circle-dot-fade");
  const radius = parseFloat(size) / 2 - parseFloat(dotSize) / 2;

  return (
    <>
      <style>
        {`
        @keyframes ${circleDotAnimationName} {
          0%, 100% { 
            opacity: 0.1;
            transform: scale(0.8);
          }
          50% { 
            opacity: 1;
            transform: scale(1.2);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          position: "relative",
          width: size,
          height: size,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(dotCount)].map((_, i) => {
          const angle = (i / dotCount) * 2 * Math.PI;
          const x =
            parseFloat(size) / 2 +
            radius * Math.cos(angle) -
            parseFloat(dotSize) / 2;
          const y =
            parseFloat(size) / 2 +
            radius * Math.sin(angle) -
            parseFloat(dotSize) / 2;

          return (
            <div
              key={i}
              style={{
                position: "absolute",
                width: dotSize,
                height: dotSize,
                background: `radial-gradient(circle, ${color}, ${color}aa)`,
                borderRadius: "50%",
                left: `${x}px`,
                top: `${y}px`,
                animation: `${circleDotAnimationName} 1.2s infinite ease-in-out`,
                animationDelay: `${i * (1.2 / dotCount)}s`,
                willChange: "transform, opacity",
                boxShadow: `0 0 4px ${color}60`,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

// Enhanced Pulse Dots with breathing effect
const PulseDots = ({
  size = "16px",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  dotCount = 3,
  gap = "8px",
}) => {
  const pulseDotAnimationName = generateAnimationName("pulse-dot");
  return (
    <>
      <style>
        {`
        @keyframes ${pulseDotAnimationName} {
          0%, 100% { 
            transform: scale(0.8);
            opacity: 0.6;
          }
          50% { 
            transform: scale(1.4);
            opacity: 1;
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          width: "fit-content",
          justifyContent: "center",
          gap,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(dotCount)].map((_, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              background: `radial-gradient(circle, ${color}, ${color}bb)`,
              borderRadius: "50%",
              animation: `${pulseDotAnimationName} 1.6s infinite cubic-bezier(0.4, 0, 0.6, 1)`,
              animationDelay: `${i * 0.2}s`,
              willChange: "transform, opacity",
              filter: `drop-shadow(0 0 8px ${color}50)`,
            }}
          />
        ))}
      </div>
    </>
  );
};

// Enhanced Dot Drop with physics-based animation
const DotDrop = ({
  size = "12px",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  dotCount = 4,
  gap = "8px",
}) => {
  const dropAnimationName = generateAnimationName("dot-drop");
  return (
    <>
      <style>
        {`
        @keyframes ${dropAnimationName} {
          0% {
            transform: translateY(-${parseFloat(size)}px) scale(0.8);
            opacity: 0;
          }
          10% {
            opacity: 1;
            transform: translateY(-${parseFloat(size)}px) scale(1);
          }
          90% {
            transform: translateY(${parseFloat(size) * 2.5}px) scale(1.1);
            opacity: 1;
          }
          100% {
            transform: translateY(${parseFloat(size) * 3}px) scale(0.9);
            opacity: 0;
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "fit-content",
          height: `calc(${size} * 4)`,
          gap,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(dotCount)].map((_, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              background: `linear-gradient(180deg, ${color}, ${color}dd)`,
              borderRadius: "50%",
              animation: `${dropAnimationName} 2s infinite cubic-bezier(0.25, 0.46, 0.45, 0.94)`,
              animationDelay: `${i * 0.3}s`,
              willChange: "transform, opacity",
              boxShadow: `0 2px 6px ${color}40`,
            }}
          />
        ))}
      </div>
    </>
  );
};

// Enhanced Typing Dots with realistic chat animation
const TypingDots = ({
  size = "10px",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  dotCount = 3,
  gap = "3px",
}) => {
  const typingAnimationName = generateAnimationName("typing-dot");
  return (
    <>
      <style>
        {`
        @keyframes ${typingAnimationName} {
          0%, 60%, 100% { 
            transform: translateY(0);
            opacity: 0.4;
          }
          30% { 
            transform: translateY(-4px);
            opacity: 1;
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "flex-end",
          width: "fit-content",
          justifyContent: "center",
          height: `calc(${size} * 2)`,
          gap,
          padding: "4px 8px",
          backgroundColor: "rgba(0,0,0,0.05)",
          borderRadius: "12px",
          ...style,
        }}
        aria-label="Typing..."
        role="status"
      >
        {[...Array(dotCount)].map((_, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              backgroundColor: color,
              borderRadius: "50%",
              animation: `${typingAnimationName} 1.4s infinite ease-in-out`,
              animationDelay: `${i * 0.2}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>
    </>
  );
};

// Enhanced Sequential Dot Reveal with cascade effect
const SequentialDotReveal = ({
  size = "16px",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  dotCount = 4,
  gap = "6px",
}) => {
  const revealAnimationName = generateAnimationName("reveal-dot");
  return (
    <>
      <style>
        {`
        @keyframes ${revealAnimationName} {
          0%, 100% { 
            opacity: 0;
            transform: scale(0);
          }
          25%, 75% { 
            opacity: 1;
            transform: scale(1.2);
          }
          50% { 
            opacity: 1;
            transform: scale(1);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          width: "fit-content",
          alignItems: "center",
          justifyContent: "center",
          gap,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(dotCount)].map((_, i) => (
          <div
            key={i}
            style={{
              width: size,
              height: size,
              background: `conic-gradient(from 0deg, ${color}, ${color}aa, ${color})`,
              borderRadius: "50%",
              animation: `${revealAnimationName} 2s infinite cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
              animationDelay: `${i * 0.25}s`,
              willChange: "transform, opacity",
              border: `1px solid ${color}30`,
            }}
          />
        ))}
      </div>
    </>
  );
};

// New: DNA Helix Dots

// New: Orbit Dots
const OrbitDots = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  dotSize = "8px",
  orbitCount = 3,
}) => {
  const orbitAnimationName = generateAnimationName("orbit");
  const containerSize = parseFloat(size);

  return (
    <>
      <style>
        {`
        @keyframes ${orbitAnimationName} {
          0% { 
            transform: rotate(0deg);
          }
          100% { 
            transform: rotate(360deg);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          position: "relative",
          width: size,
          height: size,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(orbitCount)].map((_, orbitIndex) => {
          const orbitRadius = (containerSize / 2) * (0.3 + orbitIndex * 0.25);
          return (
            <div
              key={orbitIndex}
              style={{
                position: "absolute",
                width: `${orbitRadius * 2}px`,
                height: `${orbitRadius * 2}px`,
                left: `${containerSize / 2 - orbitRadius}px`,
                top: `${containerSize / 2 - orbitRadius}px`,
                animation: `${orbitAnimationName} ${
                  2 + orbitIndex * 0.5
                }s infinite linear`,
                willChange: "transform",
              }}
            >
              <div
                style={{
                  position: "absolute",
                  width: dotSize,
                  height: dotSize,
                  background: `radial-gradient(circle, ${color}, ${color}cc)`,
                  borderRadius: "50%",
                  top: "0",
                  left: "50%",
                  transform: "translateX(-50%)",
                  boxShadow: `0 0 6px ${color}60`,
                }}
              />
            </div>
          );
        })}
        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            width: dotSize,
            height: dotSize,
            background: `radial-gradient(circle, ${color}, ${color}aa)`,
            borderRadius: "50%",
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
            boxShadow: `0 0 8px ${color}80`,
          }}
        />
      </div>
    </>
  );
};

// Export all dot components
export {
  ThreeBouncingDots,
  DotsFading,
  DotWave,
  DotCircleLoader,
  PulseDots,
  DotDrop,
  TypingDots,
  SequentialDotReveal,
  OrbitDots,
};
