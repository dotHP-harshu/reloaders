import React, { useMemo } from "react";

// Common default props for all CSS loaders
const defaultLoaderProps = {
  size: "30px", // Base size for the loader
  color: "#3498db", // Primary color
  secondaryColor: "#666", // Secondary color
  accentColor: "#aaa", // Accent color
  className: "",
  style: {},
  speed: "normal", // "slow", "normal", "fast"
};

// Speed mapping for different animation durations
const getLoaderAnimationDuration = (speed) => {
  const durations = {
    slow: "1.5s",
    normal: "1s",
    fast: "0.5s",
  };
  return durations[speed] || durations.normal;
};

// Helper for generating unique animation names
let animationCounter = 0;
const generateAnimationName = (prefix = "loader-anim") =>
  `${prefix}-${Date.now()}-${animationCounter++}`;

// 1. Basic Cube Loader
const CubeLoader = ({
  size = defaultLoaderProps.size,
  secondaryColor = defaultLoaderProps.secondaryColor,
  accentColor = defaultLoaderProps.accentColor,
  className = defaultLoaderProps.className,
  style = defaultLoaderProps.style,
  speed = defaultLoaderProps.speed,
}) => {
  const animationName = useMemo(() => generateAnimationName("Cube"), []);
  const duration = getLoaderAnimationDuration(speed);

  const d = `calc(0.353*${size})`;
  const width = `calc(${size} + ${d})`;

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          50%,100% { transform: translateY(0.1px); }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          "--s": size,
          width,
          aspectRatio: "1",
          clipPath: `polygon(${d} 0,100% 0,100% calc(100% - ${d}),calc(100% - ${d}) 100%,0 100%,0 ${d})`,
          background: `conic-gradient(from -90deg at ${size} ${d}, #fff 135deg,${secondaryColor} 0 270deg,${accentColor} 0)`,
          animation: `${animationName} ${duration} infinite cubic-bezier(0.5,300,0.5,-300)`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 2. Cube Loader with Glow Effect
const CubeGlowLoader = ({
  size = defaultLoaderProps.size,
  color = defaultLoaderProps.color,
  secondaryColor = defaultLoaderProps.secondaryColor,
  accentColor = defaultLoaderProps.accentColor,
  className = defaultLoaderProps.className,
  style = defaultLoaderProps.style,
  speed = defaultLoaderProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("Cube-glow"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  const d = `calc(0.353*${size})`;
  const width = `calc(${size} + ${d})`;

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          50% { filter: drop-shadow(0 0 5px ${color}); }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          "--s": size,
          width,
          aspectRatio: "1",
          display: "grid",
          filter: "drop-shadow(0 0 0 #fff)",
          animation: `${animationName} ${duration} infinite`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      >
        <div
          style={{
            clipPath: `polygon(${d} 0,100% 0,100% calc(100% - ${d}),calc(100% - ${d}) 100%,0 100%,0 ${d})`,
            background: `conic-gradient(from -90deg at ${size} ${d}, #fff 135deg,${secondaryColor} 0 270deg,${accentColor} 0)`,
          }}
        />
      </div>
    </>
  );
};

// 3. Shrinking Cube Loader
const ShrinkingCubeLoader = ({
  size = defaultLoaderProps.size,
  secondaryColor = defaultLoaderProps.secondaryColor,
  accentColor = defaultLoaderProps.accentColor,
  className = defaultLoaderProps.className,
  style = defaultLoaderProps.style,
  speed = defaultLoaderProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("shrink-Cube"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  const d = `calc(0.353*${size})`;
  const height = `calc(${size} + ${d})`;

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          100% { height: 40%; }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          "--s": size,
          height,
          aspectRatio: "1",
          display: "grid",
          ...style,
        }}
        aria-label="Loading"
        role="status"
      >
        <div
          style={{
            height: "100%",
            margin: "auto 0",
            clipPath: `polygon(${d} 0,100% 0,100% calc(100% - ${d}),calc(100% - ${d}) 100%,0 100%,0 ${d})`,
            background: `conic-gradient(from -90deg at ${size} ${d}, #fff 135deg,${secondaryColor} 0 270deg,${accentColor} 0)`,
            animation: `${animationName} ${duration} infinite alternate`,
          }}
        />
      </div>
    </>
  );
};

// 4. Dual Cube Loader (Horizontal)
const DualCubeLoaderHorizontal = ({
  size = defaultLoaderProps.size,
  color = defaultLoaderProps.color,
  secondaryColor = defaultLoaderProps.secondaryColor,
  accentColor = defaultLoaderProps.accentColor,
  className = defaultLoaderProps.className,
  style = defaultLoaderProps.style,
  speed = defaultLoaderProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("dual-Cube-h"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  const d = `calc(0.353*${size})`;
  const width = `calc(${size} + ${d})`;

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%     { transform: translate(0) }
          16.67% { transform: translate(-10px) }
          33.33% { transform: translate(10px) }
          50%,100% { transform: translate(0) }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          "--s": size,
          width,
          aspectRatio: "1",
          display: "grid",
          ...style,
        }}
        aria-label="Loading"
        role="status"
      >
        <div
          style={{
            clipPath: `polygon(${d} 0,100% 0,100% calc(100% - ${d}),calc(100% - ${d}) 100%,0 100%,0 ${d})`,
            background: `conic-gradient(from -90deg at ${size} ${d}, #fff 135deg,${secondaryColor} 0 270deg,${accentColor} 0)`,
            animation: `${animationName} ${duration} infinite`,
            zIndex: "1",
            marginBottom: `calc(${d}/-2 - 1px)`,
          }}
        />
        <div
          style={{
            clipPath: `polygon(${d} 0,100% 0,100% calc(100% - ${d}),calc(100% - ${d}) 100%,0 100%,0 ${d})`,
            background: `conic-gradient(from -90deg at ${size} ${d}, #fff 135deg,${secondaryColor} 0 270deg,${accentColor} 0)`,
            animation: `${animationName} ${duration} infinite`,
            marginTop: `calc(${d}/-2 - 1px)`,
            animationDelay: `calc(${duration} / 2)`,
          }}
        />
      </div>
    </>
  );
};

// 5. Dual Cube Loader (Vertical)
const DualCubeLoaderVertical = ({
  size = defaultLoaderProps.size,
  color = defaultLoaderProps.color,
  secondaryColor = defaultLoaderProps.secondaryColor,
  accentColor = defaultLoaderProps.accentColor,
  className = defaultLoaderProps.className,
  style = defaultLoaderProps.style,
  speed = defaultLoaderProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("dual-Cube-v"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  const d = `calc(0.353*${size})`;
  const width = `calc(${size} + ${d})`;

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%     { transform: translateY(0) }
          16.67% { transform: translateY(-10px) }
          33.33% { transform: translateY(10px) }
          50%,100% { transform: translateY(0) }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          "--s": size,
          width,
          aspectRatio: "1",
          display: "flex",
          ...style,
        }}
        aria-label="Loading"
        role="status"
      >
        <div
          style={{
            flex: "1",
            clipPath: `polygon(${d} 0,100% 0,100% calc(100% - ${d}),calc(100% - ${d}) 100%,0 100%,0 ${d})`,
            background: `conic-gradient(from -90deg at calc(100% - ${d}) ${d}, #fff 135deg,${secondaryColor} 0 270deg,${accentColor} 0)`,
            animation: `${animationName} ${duration} infinite`,
            marginRight: `calc(${d}/-2 - 1px)`,
          }}
        />
        <div
          style={{
            flex: "1",
            clipPath: `polygon(${d} 0,100% 0,100% calc(100% - ${d}),calc(100% - ${d}) 100%,0 100%,0 ${d})`,
            background: `conic-gradient(from -90deg at calc(100% - ${d}) ${d}, #fff 135deg,${secondaryColor} 0 270deg,${accentColor} 0)`,
            animation: `${animationName} ${duration} infinite`,
            marginLeft: `calc(${d}/-2 - 1px)`,
            animationDelay: `calc(${duration} / 2)`,
          }}
        />
      </div>
    </>
  );
};

// 6. Moving Cube Loader
const MovingCubeLoader = ({
  size = defaultLoaderProps.size,
  color = defaultLoaderProps.color,
  secondaryColor = defaultLoaderProps.secondaryColor,
  accentColor = defaultLoaderProps.accentColor,
  className = defaultLoaderProps.className,
  style = defaultLoaderProps.style,
  speed = defaultLoaderProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("moving-Cube"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);

  const d = `calc(0.353*${size})`;
  const width = `calc(${size} + ${d})`;

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%  { transform: translate(0,0) }
          25% { transform: translate(30px,0) }
          50% { transform: translate(30px,30px) }
          75% { transform: translate(0,30px) }
          100%{ transform: translate(0,0) }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          "--s": size,
          width,
          aspectRatio: "1",
          display: "grid",
          ...style,
        }}
        aria-label="Loading"
        role="status"
      >
        <div
          style={{
            gridArea: "1/1",
            clipPath: `polygon(${d} 0,100% 0,100% calc(100% - ${d}),calc(100% - ${d}) 100%,0 100%,0 ${d})`,
            background: `conic-gradient(from -90deg at calc(100% - ${d}) ${d}, #fff 135deg,${secondaryColor} 0 270deg,${accentColor} 0)`,
            animation: `${animationName} ${duration} infinite`,
          }}
        />
        <div
          style={{
            gridArea: "1/1",
            clipPath: `polygon(${d} 0,100% 0,100% calc(100% - ${d}),calc(100% - ${d}) 100%,0 100%,0 ${d})`,
            background: `conic-gradient(from -90deg at calc(100% - ${d}) ${d}, #fff 135deg,${secondaryColor} 0 270deg,${accentColor} 0)`,
            animation: `${animationName} ${duration} infinite`,
            animationDelay: `calc(-${duration} / 2)`,
          }}
        />
      </div>
    </>
  );
};


export {
  CubeLoader,
  CubeGlowLoader,
  ShrinkingCubeLoader,
  DualCubeLoaderHorizontal,
  DualCubeLoaderVertical,
  MovingCubeLoader,

};
