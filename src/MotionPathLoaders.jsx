import React, { useState } from "react";

// Enhanced default props
const defaultProps = {
  size: 64,
  color: "#3498db",
  backgroundColor: "transparent",
  className: "",
  style: {},
  duration: 1.5,
  easing: "cubic-bezier(0.4, 0, 0.6, 1)",
  strokeWidth: 4,
  opacity: 1,
  shadow: false,
  glow: false,
};

// Helper for generating unique animation names
let animationCounter = 0;
const generateAnimationName = (prefix = "anim") =>
  `${prefix}-${Date.now()}-${animationCounter++}`;

// Utility function to normalize size values
const normalizeSize = (size) => (typeof size === "number" ? `${size}px` : size);

// Utility function to get box shadow styles
const getShadowStyle = (shadow, glow, color) => {
  if (glow) return `0 0 20px ${color}40, 0 0 40px ${color}20`;
  if (shadow) return "0 4px 8px rgba(0, 0, 0, 0.1)";
  return "none";
};

// Enhanced Ball Following Path Loader
const BallPathLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  backgroundColor = defaultProps.backgroundColor,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
  easing = defaultProps.easing,
  ballSize = 10,
  pathVisible = true,
  pathColor = "rgba(0, 0, 0, 0.1)",
  shadow = defaultProps.shadow,
  glow = defaultProps.glow,
  opacity = defaultProps.opacity,
  direction = "clockwise",
}) => {
  const pathAnimationName = generateAnimationName("ball-path");
  const sizeValue = typeof size === "number" ? size : parseFloat(size);
  const ballSizeValue =
    typeof ballSize === "number" ? ballSize : parseFloat(ballSize);

  const isCounterClockwise = direction === "counterclockwise";

  return (
    <>
      <style>
        {`
        @keyframes ${pathAnimationName} {
          0% { 
            transform: translate(0, 0) scale(1); 
            opacity: ${opacity};
          }
          25% { 
            transform: translate(${sizeValue - ballSizeValue}px, 0) scale(${
          isCounterClockwise ? 0.8 : 1.2
        }); 
            opacity: ${opacity * 0.8};
          }
          50% { 
            transform: translate(${sizeValue - ballSizeValue}px, ${
          sizeValue - ballSizeValue
        }px) scale(1); 
            opacity: ${opacity};
          }
          75% { 
            transform: translate(0, ${sizeValue - ballSizeValue}px) scale(${
          isCounterClockwise ? 1.2 : 0.8
        }); 
            opacity: ${opacity * 0.8};
          }
          100% { 
            transform: translate(0, 0) scale(1); 
            opacity: ${opacity};
          }
        }
        `}
      </style>
      <div
        className={`motion-path-loader ${className}`}
        style={{
          position: "relative",
          width: normalizeSize(size),
          height: normalizeSize(size),
          backgroundColor,
          border: pathVisible ? `2px dashed ${pathColor}` : "none",
          borderRadius: "8px",
          padding: "4px",
          ...style,
        }}
        aria-label="Loading content..."
        role="status"
      >
        <div
          style={{
            position: "absolute",
            width: `${ballSizeValue}px`,
            height: `${ballSizeValue}px`,
            backgroundColor: color,
            borderRadius: "50%",
            boxShadow: getShadowStyle(shadow, glow, color),
            animation: `${pathAnimationName} ${duration}s ${easing} infinite`,
            animationDirection: isCounterClockwise ? "reverse" : "normal",
            transition: "all 0.3s ease",
          }}
        />
      </div>
    </>
  );
};

// Enhanced Snake Line Loader
const SnakeLineLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  backgroundColor = defaultProps.backgroundColor,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
  easing = defaultProps.easing,
  strokeWidth = defaultProps.strokeWidth,
  opacity = defaultProps.opacity,
  glow = defaultProps.glow,
  segments = 3,
  shape = "circle",
}) => {
  const snakeAnimationName = generateAnimationName("snake-line");
  const sizeValue = typeof size === "number" ? size : parseFloat(size);
  const radius = sizeValue / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const renderShape = () => {
    const commonProps = {
      fill: "none",
      stroke: color,
      strokeWidth,
      strokeLinecap: "round",
      strokeDasharray: `${circumference / segments} ${
        circumference / (segments * 2)
      }`,
      style: {
        transformOrigin: "center",
        animation: `${snakeAnimationName} ${duration}s linear infinite`,
        filter: glow ? `drop-shadow(0 0 8px ${color})` : "none",
        opacity,
      },
    };

    switch (shape) {
      case "square":
        const side = sizeValue - strokeWidth;
        return (
          <rect
            x={strokeWidth / 2}
            y={strokeWidth / 2}
            width={side}
            height={side}
            rx={strokeWidth}
            {...commonProps}
          />
        );
      case "polygon":
        const points = Array.from({ length: 6 }, (_, i) => {
          const angle = (i * Math.PI * 2) / 6;
          const x = sizeValue / 2 + radius * Math.cos(angle);
          const y = sizeValue / 2 + radius * Math.sin(angle);
          return `${x},${y}`;
        }).join(" ");
        return <polygon points={points} {...commonProps} />;
      default:
        return (
          <circle
            cx={sizeValue / 2}
            cy={sizeValue / 2}
            r={radius}
            {...commonProps}
          />
        );
    }
  };

  return (
    <>
      <style>
        {`
        @keyframes ${snakeAnimationName} {
          0% { stroke-dashoffset: ${circumference}; }
          100% { stroke-dashoffset: -${circumference}; }
        }
        `}
      </style>
      <div
        className={`snake-loader ${className}`}
        style={{
          backgroundColor,
          borderRadius: "50%",
          padding: "4px",
          ...style,
        }}
      >
        <svg
          width={sizeValue}
          height={sizeValue}
          viewBox={`0 0 ${sizeValue} ${sizeValue}`}
          aria-label="Loading content..."
          role="status"
        >
          <circle
            cx={sizeValue / 2}
            cy={sizeValue / 2}
            r={radius}
            fill="none"
            stroke="rgba(0, 0, 0, 0.05)"
            strokeWidth={strokeWidth / 2}
          />
          {renderShape()}
        </svg>
      </div>
    </>
  );
};

// Enhanced Circle Stroke Loader
const CircleStrokeLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  backgroundColor = defaultProps.backgroundColor,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
  easing = defaultProps.easing,
  strokeWidth = defaultProps.strokeWidth,
  opacity = defaultProps.opacity,
  glow = defaultProps.glow,
  gradient = false,
  trackColor = "rgba(0, 0, 0, 0.08)",
  lineCap = "round",
  progress = null,
}) => {
  const circleStrokeAnimation = generateAnimationName("circle-stroke");
  const sizeValue = typeof size === "number" ? size : parseFloat(size);
  const radius = sizeValue / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;

  const gradientId = `gradient-${circleStrokeAnimation}`;

  return (
    <>
      <style>
        {`
        @keyframes ${circleStrokeAnimation} {
          0% { 
            stroke-dashoffset: ${circumference}; 
            transform: rotate(-90deg) scale(0.95); 
          }
          50% { 
            transform: rotate(180deg) scale(1.05); 
          }
          100% { 
            stroke-dashoffset: 0; 
            transform: rotate(270deg) scale(0.95); 
          }
        }
        `}
      </style>
      <div
        className={`circle-stroke-loader ${className}`}
        style={{
          backgroundColor,
          borderRadius: "50%",
          padding: "8px",
          ...style,
        }}
      >
        <svg
          width={sizeValue}
          height={sizeValue}
          viewBox={`0 0 ${sizeValue} ${sizeValue}`}
          style={{
            transform: "rotate(-90deg)",
            filter: glow ? `drop-shadow(0 0 12px ${color})` : "none",
          }}
          aria-label="Loading content..."
          role="status"
        >
          {gradient && (
            <defs>
              <linearGradient
                id={gradientId}
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor={color} stopOpacity="0.3" />
                <stop offset="50%" stopColor={color} stopOpacity="1" />
                <stop offset="100%" stopColor={color} stopOpacity="0.6" />
              </linearGradient>
            </defs>
          )}

          <circle
            cx={sizeValue / 2}
            cy={sizeValue / 2}
            r={radius}
            fill="none"
            stroke={trackColor}
            strokeWidth={strokeWidth}
          />

          <circle
            cx={sizeValue / 2}
            cy={sizeValue / 2}
            r={radius}
            fill="none"
            stroke={gradient ? `url(#${gradientId})` : color}
            strokeWidth={strokeWidth}
            strokeLinecap={lineCap}
            strokeDasharray={circumference}
            strokeDashoffset={
              progress !== null
                ? circumference - (progress / 100) * circumference
                : circumference
            }
            opacity={opacity}
            style={{
              transformOrigin: "center",
              animation:
                progress === null
                  ? `${circleStrokeAnimation} ${duration}s ${easing} infinite`
                  : "none",
              transition: "stroke-dashoffset 0.5s ease",
            }}
          />
        </svg>
      </div>
    </>
  );
};

// Enhanced Zigzag Path Loader
const ZigzagPathLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  backgroundColor = defaultProps.backgroundColor,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
  easing = defaultProps.easing,
  dotSize = 12,
  pathVisible = true,
  pathColor = "rgba(0, 0, 0, 0.1)",
  shadow = defaultProps.shadow,
  glow = defaultProps.glow,
  opacity = defaultProps.opacity,
  pattern = "zigzag",
}) => {
  const zigzagAnimationName = generateAnimationName("zigzag-path");
  const sizeValue = typeof size === "number" ? size : parseFloat(size);
  const dotSizeValue =
    typeof dotSize === "number" ? dotSize : parseFloat(dotSize);

  const getAnimationKeyframes = () => {
    const offset = dotSizeValue / 2;
    const maxX = sizeValue - dotSizeValue;
    const maxY = sizeValue - dotSizeValue;
    const midX = maxX / 2;
    const midY = maxY / 2;

    switch (pattern) {
      case "diamond":
        return `
          0% { transform: translate(${midX}px, 0) scale(1); }
          25% { transform: translate(${maxX}px, ${midY}px) scale(1.2); }
          50% { transform: translate(${midX}px, ${maxY}px) scale(1); }
          75% { transform: translate(0, ${midY}px) scale(1.2); }
          100% { transform: translate(${midX}px, 0) scale(1); }
        `;
      case "infinity":
        return `
          0% { transform: translate(0, ${midY}px) scale(1); }
          25% { transform: translate(${midX}px, 0) scale(1.1); }
          50% { transform: translate(${maxX}px, ${midY}px) scale(1); }
          75% { transform: translate(${midX}px, ${maxY}px) scale(1.1); }
          100% { transform: translate(0, ${midY}px) scale(1); }
        `;
      default:
        return `
          0% { transform: translate(0, 0) scale(1); }
          25% { transform: translate(${maxX}px, 0) scale(1.2); }
          50% { transform: translate(0, ${maxY}px) scale(1); }
          75% { transform: translate(${maxX}px, ${maxY}px) scale(1.2); }
          100% { transform: translate(0, 0) scale(1); }
        `;
    }
  };

  const getPathPoints = () => {
    const offset = dotSizeValue / 2;
    const maxX = sizeValue - offset;
    const maxY = sizeValue - offset;
    const midX = maxX / 2;
    const midY = maxY / 2;

    switch (pattern) {
      case "diamond":
        return `${midX},${offset} ${maxX - offset},${midY} ${midX},${
          maxY - offset
        } ${offset},${midY}`;
      case "infinity":
        return `${offset},${midY} ${midX},${offset} ${
          maxX - offset
        },${midY} ${midX},${maxY - offset}`;
      default:
        return `${offset},${offset} ${maxX - offset},${offset} ${offset},${
          maxY - offset
        } ${maxX - offset},${maxY - offset}`;
    }
  };

  return (
    <>
      <style>
        {`
        @keyframes ${zigzagAnimationName} {
          ${getAnimationKeyframes()}
        }
        `}
      </style>
      <div
        className={`zigzag-loader ${className}`}
        style={{
          position: "relative",
          width: normalizeSize(size),
          height: normalizeSize(size),
          backgroundColor,
          borderRadius: "12px",
          padding: "8px",
          ...style,
        }}
        aria-label="Loading content..."
        role="status"
      >
        {pathVisible && (
          <svg
            width="100%"
            height="100%"
            style={{ position: "absolute", top: "8px", left: "8px" }}
          >
            <polyline
              points={getPathPoints()}
              fill="none"
              stroke={pathColor}
              strokeWidth="2"
              strokeDasharray="4 4"
              opacity="0.6"
            />
          </svg>
        )}
        <div
          style={{
            position: "absolute",
            width: `${dotSizeValue}px`,
            height: `${dotSizeValue}px`,
            backgroundColor: color,
            borderRadius: "50%",
            boxShadow: getShadowStyle(shadow, glow, color),
            animation: `${zigzagAnimationName} ${duration}s ${easing} infinite`,
            opacity,
            transition: "all 0.2s ease",
          }}
        />
      </div>
    </>
  );
};

// Enhanced Lissajous Curve Loader
const LissajousCurveLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  backgroundColor = defaultProps.backgroundColor,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
  easing = defaultProps.easing,
  dotSize = 8,
  dotCount = 3,
  shadow = defaultProps.shadow,
  glow = defaultProps.glow,
  opacity = defaultProps.opacity,
  trail = false,
}) => {
  const lissajousAnimation = generateAnimationName("lissajous");
  const sizeValue = typeof size === "number" ? size : parseFloat(size);
  const radius = (sizeValue - dotSize) / 2;

  return (
    <>
      <style>
        {`
        @keyframes ${lissajousAnimation} {
          0% { 
            transform: translate(0, 0) scale(1); 
            opacity: ${opacity}; 
          }
          25% { 
            transform: translate(${radius}px, ${radius * 0.7}px) scale(1.3); 
            opacity: ${opacity * 0.8}; 
          }
          50% { 
            transform: translate(0, ${radius}px) scale(1); 
            opacity: ${opacity}; 
          }
          75% { 
            transform: translate(-${radius}px, ${radius * 0.3}px) scale(0.7); 
            opacity: ${opacity * 0.9}; 
          }
          100% { 
            transform: translate(0, 0) scale(1); 
            opacity: ${opacity}; 
          }
        }
        `}
      </style>
      <div
        className={`lissajous-loader ${className}`}
        style={{
          position: "relative",
          width: normalizeSize(size),
          height: normalizeSize(size),
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor,
          borderRadius: "50%",
          overflow: "hidden",
          ...style,
        }}
        aria-label="Loading content..."
        role="status"
      >
        {Array.from({ length: dotCount }).map((_, index) => (
          <div
            key={index}
            style={{
              position: "absolute",
              width: `${dotSize}px`,
              height: `${dotSize}px`,
              backgroundColor: color,
              borderRadius: "50%",
              boxShadow: getShadowStyle(shadow, glow, color),
              animation: `${lissajousAnimation} ${duration}s ${easing} infinite`,
              animationDelay: `${(index * duration) / dotCount}s`,
              opacity: trail ? opacity - index * 0.2 : opacity,
            }}
          />
        ))}
      </div>
    </>
  );
};

// Enhanced SVG Stroke Dash Animation
const SVGStrokeDashAnimation = ({
  size = defaultProps.size,
  color = defaultProps.color,
  backgroundColor = defaultProps.backgroundColor,
  className = defaultProps.className,
  style = defaultProps.style,
  duration = defaultProps.duration,
  easing = defaultProps.easing,
  strokeWidth = defaultProps.strokeWidth,
  opacity = defaultProps.opacity,
  glow = defaultProps.glow,
  pathType = "wave",
}) => {
  const dashAnimationName = generateAnimationName("svg-dash");
  const pathLength = 400;

  const getPaths = () => {
    switch (pathType) {
      case "spiral":
        return {
          track:
            "M50 10 A 20 20 0 1 1 49 10 A 15 15 0 1 1 49.5 10 A 10 10 0 1 1 49.8 10",
          main: "M50 10 A 20 20 0 1 1 49 10 A 15 15 0 1 1 49.5 10 A 10 10 0 1 1 49.8 10",
        };
      case "heart":
        return {
          track:
            "M50 85 C20 50, 10 20, 30 20 C40 15, 50 25, 50 35 C50 25, 60 15, 70 20 C90 20, 80 50, 50 85",
          main: "M50 85 C20 50, 10 20, 30 20 C40 15, 50 25, 50 35 C50 25, 60 15, 70 20 C90 20, 80 50, 50 85",
        };
      case "star":
        return {
          track:
            "M50 10 L60 35 L90 35 L67 55 L75 85 L50 70 L25 85 L33 55 L10 35 L40 35 Z",
          main: "M50 10 L60 35 L90 35 L67 55 L75 85 L50 70 L25 85 L33 55 L10 35 L40 35 Z",
        };
      default:
        return {
          track: "M10 50 Q 30 10, 50 50 T 90 50",
          main: "M10 50 Q 30 10, 50 50 T 90 50",
        };
    }
  };

  const paths = getPaths();

  return (
    <>
      <style>
        {`
        @keyframes ${dashAnimationName} {
          0% { 
            stroke-dashoffset: ${pathLength}; 
            opacity: 0.3; 
          }
          50% { 
            opacity: ${opacity}; 
          }
          100% { 
            stroke-dashoffset: -${pathLength}; 
            opacity: 0.3; 
          }
        }
        `}
      </style>
      <div
        className={`svg-dash-loader ${className}`}
        style={{
          backgroundColor,
          borderRadius: "16px",
          padding: "12px",
          ...style,
        }}
      >
        <svg
          width={size}
          height={size}
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: glow ? `drop-shadow(0 0 8px ${color})` : "none",
          }}
          aria-label="Loading content..."
          role="status"
        >
          <path
            d={paths.track}
            stroke="rgba(0, 0, 0, 0.08)"
            strokeWidth={strokeWidth / 2}
            fill="none"
          />

          <path
            d={paths.main}
            stroke={color}
            strokeWidth={strokeWidth}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeDasharray={`${pathLength / 4} ${pathLength}`}
            style={{
              animation: `${dashAnimationName} ${duration}s ${easing} infinite`,
            }}
          />
        </svg>
      </div>
    </>
  );
};

export {
  SnakeLineLoader,
  BallPathLoader,
  ZigzagPathLoader,
  CircleStrokeLoader,
  LissajousCurveLoader,
  SVGStrokeDashAnimation,
};

// Lissajous Loader
