import React, { useMemo } from "react";

// Common default props for all spinners
const defaultProps = {
  size: "64px",
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
    slow: { primary: "2s", secondary: "1.5s", orbit: "15s" },
    normal: { primary: "1.2s", secondary: "1s", orbit: "10s" },
    fast: { primary: "0.8s", secondary: "0.6s", orbit: "6s" },
  };
  return durations[speed] || durations.normal;
};

// 1. Enhanced Simple Spinner with smooth easing
const SimpleSpinner = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  thickness = 6,
  glowEffect = false,
}) => {
  const animationName = useMemo(() => generateAnimationName("simple-spin"), []);
  const duration = getAnimationDuration(speed).primary;

  const glowStyles = glowEffect
    ? {
        filter: `drop-shadow(0 0 8px ${color}40)`,
        borderTopColor: color,
        borderRightColor: `${color}20`,
      }
    : { borderTopColor: color };

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          position: "relative",
          borderRadius: "50%",
          width: size,
          height: size,
          border: `${thickness}px solid rgba(0, 0, 0, 0.08)`,
          ...glowStyles,
          animation: `${animationName} ${duration} cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite`,
          willChange: "transform",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      />
    </>
  );
};

// 2. Enhanced Dual Ring with pulsing effect
const DualRingSpinner = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  pulseEffect = true,
}) => {
  const spinName = useMemo(() => generateAnimationName("dual-ring-spin"), []);
  const pulseName = useMemo(() => generateAnimationName("dual-ring-pulse"), []);
  const duration = getAnimationDuration(speed).primary;

  return (
    <>
      <style>
        {`
        @keyframes ${spinName} {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(${pulseEffect ? "1.1" : "1"}); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes ${pulseName} {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "inline-block",
          position: "relative",
          width: size,
          height: size,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        <div
          style={{
            position: "absolute",
            boxSizing: "border-box",
            display: "block",
            width: size,
            height: size,
            margin: "4px",
            border: `6px solid ${color}`,
            borderColor: `${color} ${color}40 ${color}40 ${color}`,
            borderRadius: "50%",
            animation: `${spinName} ${duration} cubic-bezier(0.5, 0, 0.5, 1) infinite${
              pulseEffect
                ? `, ${pulseName} ${duration} ease-in-out infinite`
                : ""
            }`,
            willChange: "transform, opacity",
            filter: `drop-shadow(0 0 4px ${color}30)`,
          }}
        />
      </div>
    </>
  );
};

// 3. Enhanced Pulse with ripple waves
const PulseSpinner = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  waves = 3,
}) => {
  const pulseName = useMemo(() => generateAnimationName("pulse-wave"), []);
  const duration = getAnimationDuration(speed).secondary;

  return (
    <>
      <style>
        {`
        @keyframes ${pulseName} {
          0% {
            transform: scale(0);
            opacity: 1;
          }
          70% {
            transform: scale(1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1.2);
            opacity: 0;
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
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(waves)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              width: "100%",
              height: "100%",
              backgroundColor: color,
              opacity: 0,
              animation: `${pulseName} ${duration} cubic-bezier(0.215, 0.61, 0.355, 1) infinite`,
              animationDelay: `${i * 0.3}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>
    </>
  );
};

// 4. Enhanced Ripple with gradient rings
const RippleSpinner = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  gradientEffect = true,
}) => {
  const rippleName = useMemo(() => generateAnimationName("ripple-expand"), []);
  const duration = getAnimationDuration(speed).secondary;

  const gradientColor = gradientEffect
    ? `linear-gradient(45deg, ${color}, ${color}80)`
    : color;

  return (
    <>
      <style>
        {`
        @keyframes ${rippleName} {
          0% {
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            opacity: 1;
            transform: translate(-50%, -50%);
          }
          100% {
            top: 50%;
            left: 50%;
            width: 100%;
            height: 100%;
            opacity: 0;
            transform: translate(-50%, -50%);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "inline-block",
          position: "relative",
          width: size,
          height: size,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[0, 1].map((i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              borderRadius: "50%",
              border: gradientEffect
                ? `3px solid transparent`
                : `3px solid ${color}`,
              backgroundImage: gradientEffect ? gradientColor : "none",
              backgroundClip: gradientEffect ? "padding-box" : "initial",
              animation: `${rippleName} ${duration} cubic-bezier(0, 0.2, 0.8, 1) infinite`,
              animationDelay: `${i * 0.5}s`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>
    </>
  );
};

// 5. Enhanced Orbit with trailing effect
const OrbitSpinner = ({
  size = defaultProps.size, // Outer orbit size
  centerSize = "30%", // Size of the center big dot
  color = defaultProps.color, // Center color
  dotColor = "#666", // Orbiting dot color
  speed = defaultProps.speed,
  glow = true,
  className = defaultProps.className,
  style = defaultProps.style,
}) => {
  const orbitName = useMemo(() => `orbit-${Date.now()}`, []);

  const duration = getAnimationDuration(speed).primary;

  return (
    <>
      <style>
        {`
        @keyframes ${orbitName} {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        `}
      </style>

      <div
        className={className}
        style={{
          position: "relative",
          width: size,
          height: size,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {/* Big central dot */}
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            width: centerSize,
            height: centerSize,
            backgroundColor: color,
            filter: glow ? `drop-shadow(0 0 12px ${color}80)` : "none",
          }}
        />

        {/* Orbit container */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            borderRadius: "50%",
            animation: `${orbitName} ${duration} linear infinite`,
            transformOrigin: "center center",
          }}
        >
          {/* Small orbiting dot */}
          <div
            style={{
              position: "absolute",
              top: "0%",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "50%",
              width: "15%",
              height: "15%",
              backgroundColor: dotColor,
              filter: glow ? `drop-shadow(0 0 8px ${dotColor}80)` : "none",
            }}
          />
        </div>
      </div>
    </>
  );
};

// 6. Enhanced Solar System with realistic physics
const SolarSpinner = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  dotColor = "#666",
  planetSizes = [0.8, 1, 0.6, 1.2],
}) => {
  const solarName = useMemo(() => generateAnimationName("solar-system"), []);
  const corePulseName = useMemo(() => generateAnimationName("core-pulse"), []);
  const duration = getAnimationDuration(speed).orbit;

  return (
    <>
      <style>
        {`
        @keyframes ${solarName} {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ${corePulseName} {
          0%, 100% { transform: scale(1); opacity: 1; }
          50% { transform: scale(1.2); opacity: 0.8; }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          position: "relative",
          borderRadius: "50%",
          width: size,
          height: size,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {/* Central star */}
        <div
          style={{
            position: "absolute",
            borderRadius: "50%",
            width: "30%",
            height: "30%",
            background: `radial-gradient(circle, ${color}, ${color}cc)`,
            animation: `${corePulseName} 2s ease-in-out infinite`,
            filter: `drop-shadow(0 0 12px ${color}60)`,
            willChange: "transform, opacity",
          }}
        />

        {/* Orbital rings with planets */}
        {planetSizes.map((planetSize, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${60 + i * 15}%`,
              height: `${60 + i * 15}%`,
              border: `1px solid ${color}20`,
              borderRadius: "50%",
              animation: `${solarName} ${
                parseFloat(duration) * (1 + i * 0.5)
              }s linear infinite`,
              willChange: "transform",
            }}
          >
            <div
              style={{
                position: "absolute",
                borderRadius: "50%",
                width: `${8 * planetSize}%`,
                height: `${8 * planetSize}%`,
                backgroundColor: dotColor,
                top: "-4%",
                left: "50%",
                transform: "translateX(-50%)",
                filter: `drop-shadow(0 0 4px ${dotColor}50)`,
                background: `radial-gradient(circle at 30% 30%, ${dotColor}ff, ${dotColor}aa)`,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

// 7. Enhanced Dashed Ring with dynamic dash animation
const DashedRingLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  dashSize = 8,
  glowIntensity = 0.3,
}) => {
  const dashName = useMemo(() => generateAnimationName("dashed-flow"), []);
  const duration = getAnimationDuration(speed).primary;
  const circumference = Math.PI * 90; // radius = 45

  return (
    <>
      <style>
        {`
        @keyframes ${dashName} {
          0% { 
            stroke-dashoffset: 0;
            filter: drop-shadow(0 0 ${glowIntensity * 10}px ${color}60);
          }
          50% { 
            filter: drop-shadow(0 0 ${glowIntensity * 15}px ${color}80);
          }
          100% { 
            stroke-dashoffset: -${circumference * 2};
            filter: drop-shadow(0 0 ${glowIntensity * 10}px ${color}60);
          }
        }
        `}
      </style>
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={style}
        aria-label="Loading..."
        role="status"
      >
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke="rgba(0, 0, 0, 0.06)"
          strokeWidth="6"
        />
        <circle
          cx="50"
          cy="50"
          r="45"
          fill="none"
          stroke={color}
          strokeWidth="6"
          strokeDasharray={`${dashSize} ${dashSize * 2}`}
          strokeLinecap="round"
          style={{
            transformOrigin: "center",
            animation: `${dashName} ${duration} ease-in-out infinite`,
            willChange: "stroke-dashoffset, filter",
          }}
        />
      </svg>
    </>
  );
};

// 8. Enhanced SVG Loader with morphing shapes
const SVGRotateLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  morphEffect = true,
}) => {
  const rotateName = useMemo(() => generateAnimationName("svg-spin"), []);
  const morphName = useMemo(() => generateAnimationName("svg-morph"), []);
  const duration = getAnimationDuration(speed).primary;

  return (
    <>
      <style>
        {`
        @keyframes ${rotateName} {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes ${morphName} {
          0%, 100% { 
            r: 35; 
            opacity: 1;
          }
          50% { 
            r: 25; 
            opacity: 0.7;
          }
        }
        `}
      </style>
      <svg
        className={className}
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: `${rotateName} ${duration} cubic-bezier(0.4, 0.0, 0.6, 1) infinite`,
          filter: `drop-shadow(0 0 6px ${color}50)`,
          willChange: "transform",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        <defs>
          <linearGradient
            id={`gradient-${rotateName}`}
            x1="0%"
            y1="0%"
            x2="100%"
            y2="100%"
          >
            <stop offset="0%" stopColor={color} />
            <stop offset="100%" stopColor={`${color}80`} />
          </linearGradient>
        </defs>

        <path
          d="M50 15C29.0132 15 12 32.0132 12 53C12 73.9868 29.0132 91 50 91C70.9868 91 88 73.9868 88 53C88 49.6863 85.3137 47 82 47C78.6863 47 76 49.6863 76 53C76 67.3594 64.3594 79 50 79C35.6406 79 24 67.3594 24 53C24 38.6406 35.6406 27 50 27C53.3137 27 56 24.3137 56 21C56 17.6863 53.3137 15 50 15Z"
          fill={`url(#gradient-${rotateName})`}
        />

        {morphEffect && (
          <circle
            cx="50"
            cy="53"
            r="35"
            fill="none"
            stroke={`${color}30`}
            strokeWidth="2"
            style={{
              animation: `${morphName} 2s ease-in-out infinite`,
              willChange: "r, opacity",
            }}
          />
        )}
      </svg>
    </>
  );
};

// 9. DNAHelixLoader
const DNAHelixLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  secondaryColor = "#e74c3c",
}) => {
  const helixName = useMemo(() => generateAnimationName("dna-helix"), []);
  const duration = getAnimationDuration(speed).primary;

  return (
    <>
      <style>
        {`
        @keyframes ${helixName} {
          0% { transform: rotateY(0deg); }
          100% { transform: rotateY(360deg); }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          position: "relative",
          width: size,
          height: size,
          perspective: "200px",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            animation: `${helixName} ${duration} linear infinite`,
            willChange: "transform",
            transformStyle: "preserve-3d",
          }}
        >
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              style={{
                position: "absolute",
                width: "20%",
                height: "8%",
                backgroundColor: i % 2 === 0 ? color : secondaryColor,
                borderRadius: "50%",
                top: `${i * 12}%`,
                left: "40%",
                transform: `rotateY(${i * 45}deg) translateZ(${
                  parseFloat(size) * 0.2
                }px)`,
                filter: `drop-shadow(0 0 4px ${
                  i % 2 === 0 ? color : secondaryColor
                }60)`,
              }}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export {
  SimpleSpinner,
  DualRingSpinner,
  PulseSpinner,
  RippleSpinner,
  OrbitSpinner,
  SolarSpinner,
  DashedRingLoader,
  SVGRotateLoader,
  DNAHelixLoader, // New bonus spinner
};
