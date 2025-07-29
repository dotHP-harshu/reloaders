import React, { useMemo } from "react";

// Common default props for all preloaders
const defaultProps = {
  size: "400px", // For overall container size where applicable
  color: "#3498db",
  className: "",
  style: {},
  speed: "normal", // Common animation duration prop
};

// Helper for generating unique animation names
let animationCounter = 0;
const generateAnimationName = (prefix = "anim") =>
  `${prefix}-${animationCounter++}`;

const getLoaderAnimationDuration = (speed) => {
  const durations = {
    slow: "2s",
    normal: "1.5s",
    fast: "1s",
  };
  return durations[speed] || durations.normal;
};

// 1. MorphingShapeLoader
const MorphingShapeLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  secondaryColor = "#514b82",
  accentColor = "#ffa516",
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(() => generateAnimationName("morph-shape"), []);
  const duration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          33% {
            border-radius: 0;
            background: ${secondaryColor};
            clip-path: polygon(0 0,100% 0,100% 100%,0 100%);
          }
          66% {
            border-radius: 0;
            background: ${accentColor};
            clip-path: polygon(50% 0,50% 0,100% 100%,0 100%);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "1",
          borderRadius: "50%",
          background: color,
          clipPath: "polygon(0 0,100% 0,100% 100%,0 100%)",
          animation: `${animationName} ${duration} infinite cubic-bezier(0.3,1,0,1)`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 2. Rotating Diamond Loader
const RotatingDiamondLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("rotate-diamond"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          50% {
            width: calc(${size} * 1.5);
            height: calc(${size} * 1.5);
            transform: rotate(180deg);
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
          width: size,
          height: size,
          color,
          background: `
            conic-gradient(from  -45deg at top    ${parseFloat(size)/2}px left 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
            conic-gradient(from   45deg at right  ${parseFloat(size)/2}px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
            conic-gradient(from  135deg at bottom ${parseFloat(size)/2}px left 50%, #0000, currentColor 1deg 90deg, #0000 91deg),
            conic-gradient(from -135deg at left   ${parseFloat(size)/2}px top 50%, #0000, currentColor 1deg 90deg, #0000 91deg)`,
          animation: `${animationName} ${duration} infinite cubic-bezier(0.3,1,0,1)`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 3. Corner Squares Loader
const CornerSquaresLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("corner-squares"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0% {
            background-position: 0 0, 100% 0, 100% 100%, 0 100%;
          }
          33% {
            background-position: 0 0, 100% 0, 100% 100%, 0 100%;
            width: calc(${size} * 1.5);
            height: calc(${size} * 1.5);
          }
          66% {
            background-position: 100% 0, 100% 100%, 0 100%, 0 0;
            width: calc(${size} * 1.5);
            height: calc(${size} * 1.5);
          }
          100% {
            background-position: 100% 0, 100% 100%, 0 100%, 0 0;
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          height: size,
          background: `
            no-repeat linear-gradient(${color} 0 0),
            no-repeat linear-gradient(${color} 0 0),
            no-repeat linear-gradient(${color} 0 0),
            no-repeat linear-gradient(${color} 0 0)`,
          backgroundSize: `${parseFloat(size)/2}px ${parseFloat(size)/2}px`,
          animation: `${animationName} ${duration} infinite cubic-bezier(0.3,1,0,1)`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};


// 4. Rotating Bars Loader
const RotatingBarsLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("rotating-bars"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          33% {
            inset: -10px;
            transform: rotate(0deg);
          }
          66% {
            inset: -10px;
            transform: rotate(90deg);
          }
          100% {
            inset: 0;
            transform: rotate(90deg);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "1",
          color,
          position: "relative",
          background: `
            conic-gradient(from 134deg at top, currentColor 92deg, #0000 0) top,
            conic-gradient(from -46deg at bottom, currentColor 92deg, #0000 0) bottom`,
          backgroundSize: "100% 50%",
          backgroundRepeat: "no-repeat",
          ...style,
        }}
        aria-label="Loading"
        role="status"
      >
        <div
          style={{
            content: "",
            position: "absolute",
            inset: "0",
            background: `
              linear-gradient(45deg, currentColor ${parseFloat(size)/3 }px, #0000 0 calc(100% - ${parseFloat(size)/3 }px), currentColor 0),
              linear-gradient(-45deg, currentColor ${parseFloat(size)/3 }px, #0000 0 calc(100% - ${parseFloat(size)/3 }px), currentColor 0)`,
            animation: `${animationName} ${duration} infinite cubic-bezier(0.3,1,0,1)`,
          }}
        />
      </div>
    </>
  );
};

// 5. Skewed Squares Loader
const SkewedSquaresLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("skewed-squares"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          66% {
            transform: skewX(0deg);
          }
          80%, 100% {
            transform: skewX(-45deg);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "1",
          display: "grid",
          animation: `${animationName} ${duration} infinite linear`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      >
        <div
          style={{
            content: "",
            gridArea: "1/1",
            background: color,
            clipPath: "polygon(0 0%, 100% 0, 100% 100%)",
            animation: "inherit",
            animationName: "l8-1",
          }}
        />
        <div
          style={{
            content: "",
            gridArea: "1/1",
            background: color,
            clipPath: "polygon(0 0%, 100% 0, 100% 100%)",
            animation: "inherit",
            animationName: "l8-1",
            transform: "scale(-1)",
          }}
        />
      </div>
    </>
  );
};

// 6. Pulsing Dots Loader
const PulsingDotsLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("pulsing-dots"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          33% {
            inset: -10px;
            transform: rotate(0deg);
          }
          66% {
            inset: -10px;
            transform: rotate(90deg);
          }
          100% {
            inset: 0;
            transform: rotate(90deg);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "1",
          color,
          position: "relative",
          background:
            `radial-gradient( ${parseFloat(size)/4}px, currentColor 94%, #0000)`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      >
        <div
          style={{
            content: "",
            position: "absolute",
            inset: "0",
            borderRadius: "50%",
            background: `
              radial-gradient(${
                parseFloat(size) / 4
              }px at bottom right, #0000 94%, currentColor) top left,
              radial-gradient(${
                parseFloat(size) / 4
              }px at bottom left, #0000 94%, currentColor) top right,
              radial-gradient(${
                parseFloat(size) / 4
              }px at top right, #0000 94%, currentColor) bottom left,
              radial-gradient(${
                parseFloat(size) / 4
              }px at top left, #0000 94%, currentColor) bottom right`,
            backgroundSize: `${parseFloat(size) / 2}px ${
              parseFloat(size) / 2
            }px`,
            backgroundRepeat: "no-repeat",
            animation: `${animationName} ${duration} infinite cubic-bezier(0.3,1,0,1)`,
          }}
        />
      </div>
    </>
  );
};


// 7. Hexagon Spinner Loader
const HexagonSpinnerLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("hexagon-spinner"),
    []
  );

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          33% {
            inset: -8px;
            transform: rotate(0deg);
          }
          66% {
            inset: -8px;
            transform: rotate(180deg);
          }
          100% {
            inset: 0;
            transform: rotate(180deg);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "1",
          position: "relative",
          ...style,
        }}
        aria-label="Loading"
        role="status"
      >
        <div
          style={{
            content: "",
            position: "absolute",
            inset: "0",
            borderRadius: "50%",
            background: `
              conic-gradient(from 0deg, #0000, ${color} 1deg 120deg, #0000 121deg) top right,
              conic-gradient(from 120deg, #0000, ${color} 1deg 120deg, #0000 121deg) bottom,
              conic-gradient(from 240deg, #0000, ${color} 1deg 120deg, #0000 121deg) top left`,
            backgroundSize: `${parseFloat(size) }px  ${parseFloat(size) }px `,
            backgroundRepeat: "no-repeat",
            animation: `${animationName} 2s infinite cubic-bezier(0.3,1,0,1)`,
          }}
        />
      </div>
    </>
  );
};


// 8. Enhanced Rainbow Spinner with gradient border and glow
const RainbowSpinner = ({
  bgcolor = defaultProps.color,
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const spinAnimationName = generateAnimationName("rainbow-spin");
  const pulseAnimationName = generateAnimationName("rainbow-pulse");
  const duration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
        @keyframes ${spinAnimationName} {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes ${pulseAnimationName} {
          0%, 100% { box-shadow: 0 0 20px rgba(255,255,255,0.3); }
          50% { box-shadow: 0 0 40px rgba(255,255,255,0.8), 0 0 60px rgba(255,100,255,0.4); }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          position: "relative",
          borderRadius: "9999px",
          width: size,
          height: size,
          background: `conic-gradient(from 0deg at 50% 50%, 
            #ff0066, #ff6600, #ffcc00, #66ff00, #00ff66, #0066ff, #6600ff, #ff0066)`,
          animation: `${spinAnimationName} ${duration} ease-in-out infinite, ${pulseAnimationName} ${
            parseFloat(duration) * 2
          }s ease-in-out infinite`,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {/* Inner circle with glassmorphism effect */}
        <div
          style={{
            width: `calc(${size} - 16px)`,
            height: `calc(${size} - 16px)`,
            background: bgcolor,
            backdropFilter: "blur(10px)",
            borderRadius: "inherit",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        />
      </div>
    </>
  );
};

// 9. Enhanced Color-Fill Dots with bounce and trail effect
const ColorFillDots = ({
  size = defaultProps.size,
  color = defaultProps.color,
  secondColor = "#ff6b9d",
  className = defaultProps.className,
  style = defaultProps.style,
  dotCount = 3,
  gap = "8px",
  speed = defaultProps.speed,
}) => {
  const bounceAnimationName = generateAnimationName("color-fill-bounce");
  const glowAnimationName = generateAnimationName("dot-glow");
  const duration = getLoaderAnimationDuration(speed)

  return (
    <>
      <style>
        {`
        @keyframes ${bounceAnimationName} {
          0%, 100% { 
            transform: translateY(0) scale(0.8); 
            background-color: ${color};
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
          }
          50% { 
            transform: translateY(-20px) scale(1.2); 
            ${secondColor === "none" ? "" : `background-color: ${secondColor};`}
          }
        }
        @keyframes ${glowAnimationName} {
          0%, 100% { opacity: 0.3; }
          50% { opacity: 0.8; }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: `calc(${size} + 40px)`,
          width: "fit-content",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(dotCount)].map((_, i) => (
          <div key={i} style={{ position: "relative", margin: `0 ${gap}` }}>
            {/* Glow effect background */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: `calc(${size} * 2)`,
                height: `calc(${size} * 2)`,
                background: `radial-gradient(circle, ${color}40, transparent 70%)`,
                borderRadius: "50%",
                animation: `${glowAnimationName} ${duration} infinite ease-in-out`,
                animationDelay: `${i * (parseFloat(duration) / dotCount / 2)}s`,
              }}
            />
            {/* Main dot */}
            <div
              style={{
                width: size,
                height: size,
                backgroundColor: color,
                borderRadius: "50%",
                position: "relative",
                animation: `${bounceAnimationName} ${duration} infinite cubic-bezier(0.68, -0.55, 0.265, 1.55)`,
                animationDelay: `${i * (parseFloat(duration) / dotCount / 2)}s`,
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

// 10. Enhanced Shape Morphing with smooth transitions and color shifts
const ShapeMorphing = ({
  size = defaultProps.size,
  color = defaultProps.color,
  secondColor = "#ff6b9d",
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const morphAnimationName = generateAnimationName("shape-morph-enhanced");
  const colorShiftAnimationName = generateAnimationName("morph-color-shift");
  const duration = getLoaderAnimationDuration(speed)

  return (
    <>
      <style>
        {`
        @keyframes ${morphAnimationName} {
          0% { 
            border-radius: 50%; 
            transform: rotate(0deg) scale(1);
          }
          25% { 
            border-radius: 25%; 
            transform: rotate(90deg) scale(1.1);
          }
          50% { 
            border-radius: 0%; 
            transform: rotate(180deg) scale(0.9);
          }
          75% { 
            border-radius: 25%; 
            transform: rotate(270deg) scale(1.1);
          }
          100% { 
            border-radius: 50%; 
            transform: rotate(360deg) scale(1);
          }
        }
        @keyframes ${colorShiftAnimationName} {
          0%, 100% { background-color: ${color}; }
          ${
            secondColor === "none"
              ? " "
              : "33% { background-color: " + secondColor + ";"
          }}
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          height: size,
          background: color,
          animation: `${morphAnimationName} ${duration} cubic-bezier(0.4, 0, 0.2, 1) infinite, 
                     ${colorShiftAnimationName} ${
            parseFloat(duration) * 2
          }s ease-in-out infinite`,
          boxShadow: `0 8px 32px ${color}40`,
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      />
    </>
  );
};

// 11. Enhanced Geometric Shapes with 3D effect
const GeometricShapes = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  secondColor= "#ff6b9d",
  style = defaultProps.style,
  speed = defaultProps.duration,
  shapeCount = 3,
}) => {
  const orbitAnimationName = generateAnimationName("geo-orbit");
  const floatAnimationName = generateAnimationName("geo-float");
  const duration = getLoaderAnimationDuration(speed)

  return (
    <>
      <style>
        {`
        @keyframes ${orbitAnimationName} {
          0% { transform: rotate(0deg) translateX(${
            parseFloat(size) / 3
          }px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(${
            parseFloat(size) / 3
          }px) rotate(-360deg); }
        }
        @keyframes ${floatAnimationName} {
          0%, 100% { transform: translateY(0px) scale(1); }
          50% { transform: translateY(-10px) scale(1.1); }
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
        {/* Center dot */}
        <div
          style={{
            position: "absolute",
            width: "8px",
            height: "8px",
            backgroundColor: color,
            borderRadius: "50%",
            opacity: 0.5,
          }}
        />
        {[...Array(shapeCount)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${parseFloat(size) / 1}px`,
              height: `${parseFloat(size) / 1}px`,
              background: `linear-gradient(135deg, ${color}, ${secondColor})`,
              borderRadius: i % 2 === 0 ? "50%" : "20%",
              boxShadow: `0 4px 16px ${color}60`,
              animation: `${orbitAnimationName} ${duration} linear infinite, 
                         ${floatAnimationName} ${
                parseFloat(duration) * 0.8
              }s ease-in-out infinite`,
              animationDelay: `${i * (parseFloat(duration) / shapeCount)}s, ${
                i * 0.2
              }s`,
              filter: "drop-shadow(0 2px 4px rgba(0,0,0,0.2))",
            }}
          />
        ))}
      </div>
    </>
  );
};

// 12. Enhanced Hexagon Loader with neon glow
const HexagonLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  secondColor = "#fff",
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const hexSpinAnimationName = generateAnimationName("hex-spin-enhanced");
  const hexPulseAnimationName = generateAnimationName("hex-pulse");
  const duration = getLoaderAnimationDuration(speed)

  const hexRadius = parseFloat(size) / 2;
  const hexPoints = Array.from({ length: 6 }, (_, i) => {
    const angle = (Math.PI / 3) * i;
    const x = hexRadius + hexRadius * 0.8 * Math.cos(angle);
    const y = hexRadius + hexRadius * 0.8 * Math.sin(angle);
    return `${x},${y}`;
  }).join(" ");

  return (
    <>
      <style>
        {`
        @keyframes ${hexSpinAnimationName} {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(180deg) scale(1.1); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes ${hexPulseAnimationName} {
          0%, 100% { 
            fill: ${color}; 
            filter: drop-shadow(0 0 5px ${color}60);
          }
          50% { 
            ${secondColor === "none" ? " " : "fill: " + secondColor + ";"} 
          }
        }
        `}
      </style>
      <div style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}>
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 ${parseFloat(size)} ${parseFloat(size)}`}
          style={{
            animation: `${hexSpinAnimationName} ${duration} cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            ...style,
          }}
          aria-label="Loading..."
          role="status"
        >
          <defs>
            <linearGradient
              id={`hex-gradient-${animationCounter}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={color} />
              <stop offset="100%" stopColor={secondColor} />
            </linearGradient>
          </defs>
          <polygon
            points={hexPoints}
            fill={`url(#hex-gradient-${animationCounter})`}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            style={{
              animation: `${hexPulseAnimationName} ${
                parseFloat(duration) * 1.5
              }s ease-in-out infinite`,
            }}
          />
        </svg>
      </div>
    </>
  );
};

// 13. Enhanced Triangle Bounce with elastic effect
const TriangleBounce = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  triangleCount = 3,
  gap = "10px",
}) => {
  const triangleBounceAnimationName = generateAnimationName(
    "triangle-bounce-enhanced"
  );
  const triangleGlowAnimationName = generateAnimationName("triangle-glow");
  const duration = getLoaderAnimationDuration(speed)

  return (
    <>
      <style>
        {`
        @keyframes ${triangleBounceAnimationName} {
          0%, 100% { 
            transform: translateY(0) scale(1) rotateZ(0deg); 
          }
          25% { 
            transform: translateY(-${
              parseFloat(size)/3 * 0.8
            }px) scale(1.2) rotateZ(5deg); 
          }
          50% { 
            transform: translateY(-${
              parseFloat(size)/3 * 1.2
            }px) scale(0.9) rotateZ(0deg); 
          }
          75% { 
            transform: translateY(-${
              parseFloat(size)/3 * 0.4
            }px) scale(1.1) rotateZ(-5deg); 
          }
        }
        @keyframes ${triangleGlowAnimationName} {
          0%, 100% { filter: drop-shadow(0 4px 8px rgba(0,0,0,0.15)); }
          50% { filter: drop-shadow(0 8px 24px ${color}60) drop-shadow(0 0 16px ${color}40); }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          height: `calc(${size})`,
          width: "fit-content",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(triangleCount)].map((_, i) => (
          <svg
            key={i}
            width={parseFloat(size)/3}
            height={parseFloat(size)/3}
            viewBox={`0 0 ${parseFloat(size)} ${parseFloat(size)}`}
            style={{
              margin: `0 ${gap}`,
              animation: `${triangleBounceAnimationName} ${duration} cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite,
                         ${triangleGlowAnimationName} ${duration} ease-in-out infinite`,
              animationDelay: `${
                i * (parseFloat(duration) / triangleCount / 3)
              }s`,
            }}
          >
            <defs>
              <linearGradient
                id={`triangle-gradient-${i}`}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={color} />
                <stop offset="100%" stopColor="#ff6b9d" />
              </linearGradient>
            </defs>
            <polygon
              points={`0,${parseFloat(size)} ${
                parseFloat(size) / 2
              },0 ${parseFloat(size)},${parseFloat(size)}`}
              fill={`url(#triangle-gradient-${i})`}
              stroke="rgba(255, 255, 255, 0.2)"
              strokeWidth="1"
            />
          </svg>
        ))}
      </div>
    </>
  );
};

// 14. Enhanced Polygon Rotation with morphing sides
const PolygonRotation = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
  sides = 4,
}) => {
  const polygonAnimationName = generateAnimationName("polygon-enhanced");
  const polygonGlowAnimationName = generateAnimationName("polygon-glow");
  const duration = getLoaderAnimationDuration(speed)

  // Function to generate polygon points
  const getPolygonPoints = (numSides, radius, phase = 0) => {
    const points = [];
    for (let i = 0; i < numSides; i++) {
      const angle = ((Math.PI * 2) / numSides) * i + phase;
      const x = radius + radius * 0.7 * Math.cos(angle);
      const y = radius + radius * 0.7 * Math.sin(angle);
      points.push(`${x},${y}`);
    }
    return points.join(" ");
  };

  const polyRadius = parseFloat(size) / 2;
  const points = getPolygonPoints(sides, polyRadius);

  return (
    <>
      <style>
        {`
        @keyframes ${polygonAnimationName} {
          0% { 
            transform: rotate(0deg) scale(1); 
            opacity: 1;
          }
          50% { 
            transform: rotate(180deg) scale(0.7); 
            opacity: 0.7;
          }
          100% { 
            transform: rotate(360deg) scale(1); 
            opacity: 1;
          }
        }
        @keyframes ${polygonGlowAnimationName} {
          0%, 100% { filter: drop-shadow(0 0 10px ${color}40); }
          50% { filter: drop-shadow(0 0 25px ${color}) drop-shadow(0 0 50px #ff6b9d60); }
        }
        `}
      </style>
      <div style={{ filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.15))" }}>
        <svg
          className={className}
          width={size}
          height={size}
          viewBox={`0 0 ${parseFloat(size)} ${parseFloat(size)}`}
          style={{
            animation: `${polygonAnimationName} ${duration} cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            ...style,
          }}
          aria-label="Loading..."
          role="status"
        >
          <defs>
            <linearGradient
              id={`polygon-gradient-${animationCounter}`}
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor={color} />
              <stop offset="50%" stopColor="#ff6b9d" />
              <stop offset="100%" stopColor={color} />
            </linearGradient>
          </defs>
          <polygon
            points={points}
            fill={`url(#polygon-gradient-${animationCounter})`}
            stroke="rgba(255, 255, 255, 0.3)"
            strokeWidth="2"
            style={{
              transformOrigin: "center",
              animation: `${polygonGlowAnimationName} ${
                parseFloat(duration) * 1.5
              }s ease-in-out infinite`,
            }}
          />
        </svg>
      </div>
    </>
  );
};



// Export all enhanced color & shape components
export {
  MorphingShapeLoader,
  RotatingDiamondLoader,
  CornerSquaresLoader,
  RotatingBarsLoader,
  SkewedSquaresLoader,
  PulsingDotsLoader,
  HexagonSpinnerLoader,
  RainbowSpinner,
  ColorFillDots,
  ShapeMorphing,
  GeometricShapes,
  HexagonLoader,
  TriangleBounce,
  PolygonRotation,
};
