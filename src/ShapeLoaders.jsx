import React from "react";

// Common default props for all preloaders
const defaultProps = {
  size: "64px", // For overall container size where applicable
  color: "#3498db",
  className: "",
  style: {},
  duration: "1.5s", // Common animation duration prop
};

// Helper for generating unique animation names
let animationCounter = 0;
const generateAnimationName = (prefix = "anim") =>
  `${prefix}-${animationCounter++}`;

// 34. Enhanced Rainbow Spinner with gradient border and glow
const RainbowSpinner = ({
  size = defaultProps.size,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
}) => {
  const spinAnimationName = generateAnimationName("rainbow-spin");
  const pulseAnimationName = generateAnimationName("rainbow-pulse");

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
            background: "rgba(255, 255, 255, 0.9)",
            backdropFilter: "blur(10px)",
            borderRadius: "inherit",
            border: "1px solid rgba(255, 255, 255, 0.3)",
          }}
        />
      </div>
    </>
  );
};

// 35. Enhanced Color-Fill Dots with bounce and trail effect
const ColorFillDots = ({
  size = "15px",
  color = defaultProps.color,
  secondColor = "#ff6b9d",
  className = defaultProps.className,
  style = defaultProps.style,
  dotCount = 3,
  gap = "8px",
  duration = defaultProps.duration,
}) => {
  const bounceAnimationName = generateAnimationName("color-fill-bounce");
  const glowAnimationName = generateAnimationName("dot-glow");

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

// 36. Enhanced Shape Morphing with smooth transitions and color shifts
const ShapeMorphing = ({
  size = defaultProps.size,
  color = defaultProps.color,
  secondColor = "#ff6b9d",
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
}) => {
  const morphAnimationName = generateAnimationName("shape-morph-enhanced");
  const colorShiftAnimationName = generateAnimationName("morph-color-shift");

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

// 37. Enhanced Geometric Shapes with 3D effect
const GeometricShapes = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
  shapeCount = 3,
}) => {
  const orbitAnimationName = generateAnimationName("geo-orbit");
  const floatAnimationName = generateAnimationName("geo-float");

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
              width: `${parseFloat(size) / 6}px`,
              height: `${parseFloat(size) / 6}px`,
              background: `linear-gradient(135deg, ${color}, #ff6b9d)`,
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

// 38. Enhanced Hexagon Loader with neon glow
const HexagonLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  secondColor = "#fff",
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
}) => {
  const hexSpinAnimationName = generateAnimationName("hex-spin-enhanced");
  const hexPulseAnimationName = generateAnimationName("hex-pulse");

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

// 39. Enhanced Triangle Bounce with elastic effect
const TriangleBounce = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
  triangleCount = 3,
  gap = "10px",
}) => {
  const triangleBounceAnimationName = generateAnimationName(
    "triangle-bounce-enhanced"
  );
  const triangleGlowAnimationName = generateAnimationName("triangle-glow");

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
              parseFloat(size) * 0.8
            }px) scale(1.2) rotateZ(5deg); 
          }
          50% { 
            transform: translateY(-${
              parseFloat(size) * 1.2
            }px) scale(0.9) rotateZ(0deg); 
          }
          75% { 
            transform: translateY(-${
              parseFloat(size) * 0.4
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
          height: `calc(${size} * 2.5)`,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {[...Array(triangleCount)].map((_, i) => (
          <svg
            key={i}
            width={size}
            height={size}
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

// 40. Enhanced Polygon Rotation with morphing sides
const PolygonRotation = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
  sides = 4,
}) => {
  const polygonAnimationName = generateAnimationName("polygon-enhanced");
  const polygonGlowAnimationName = generateAnimationName("polygon-glow");

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

// 41. Enhanced Color-Shifting Background with gradient waves
const ColorShiftingBackground = ({
  width = "100%",
  height = "100px",
  className = defaultProps.className,
  style = defaultProps.style,
  duration = "5s",
}) => {
  const gradientWaveAnimationName = generateAnimationName("gradient-wave");
  const textFloatAnimationName = generateAnimationName("text-float");

  return (
    <>
      <style>
        {`
        @keyframes ${gradientWaveAnimationName} {
          0% { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            background-size: 200% 200%;
            background-position: 0% 50%;
          }
          25% { 
            background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%);
            background-size: 200% 200%;
            background-position: 100% 50%;
          }
          50% { 
            background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%);
            background-size: 200% 200%;
            background-position: 50% 0%;
          }
          75% { 
            background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%);
            background-size: 200% 200%;
            background-position: 50% 100%;
          }
          100% { 
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            background-size: 200% 200%;
            background-position: 0% 50%;
          }
        }
        @keyframes ${textFloatAnimationName} {
          0%, 100% { 
            transform: translateY(0px); 
            opacity: 0.9;
          }
          50% { 
            transform: translateY(-5px); 
            opacity: 1;
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: width,
          height: height,
          animation: `${gradientWaveAnimationName} ${duration} ease-in-out infinite`,
          borderRadius: "16px",
          position: "relative",
          overflow: "hidden",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {/* Glassmorphism overlay */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(255, 255, 255, 0.1)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            borderRadius: "16px",
          }}
        />

        {/* Loading text with animation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            color: "white",
            fontSize: "1.2em",
            fontWeight: "600",
            textShadow: "0 2px 4px rgba(0, 0, 0, 0.3)",
            position: "relative",
            zIndex: 1,
            animation: `${textFloatAnimationName} 2s ease-in-out infinite`,
          }}
        >
          Loading...
        </div>
      </div>
    </>
  );
};

// Export all enhanced color & shape components
export {
  RainbowSpinner,
  ColorFillDots,
  ShapeMorphing,
  GeometricShapes,
  HexagonLoader,
  TriangleBounce,
  PolygonRotation,
  ColorShiftingBackground,
};
