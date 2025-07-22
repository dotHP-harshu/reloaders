import React, { useMemo } from "react";

// Default properties for skeleton components
const defaultProps = {
  color: "#1b64adff",
  highlightColor: "#bb3232ff",
  shimmerColor: "rgba(164, 60, 60, 0.8)", // kept for consistency
  className: "",
  style: {},
  rounded: true,
  animation: "shimmer",
  speed: "normal",
  shimmerDirection: "to right",
};

// Generate unique animation names
let animationCounter = 0;
const generateAnimationName = (prefix = "anim") =>
  `${prefix}-${Date.now()}-${animationCounter++}`;

// Map speed to animation duration
const getAnimationDuration = (speed) => {
  const durations = {
    slow: "2.5s",
    normal: "1.8s",
    fast: "1s",
  };
  return durations[speed] || durations.normal;
};

// Generate shimmer keyframes (smooth infinite loop)
const createShimmerKeyframes = (name) => {
  return `
    @keyframes ${name} {
      0% {
        background-position: -200% 0;
      }
      100% {
        background-position: 200% 0;
      }
    }
  `;
};

// SkeletonBar (rectangle) component
const SkeletonBar = ({
  width,
  height,
  color = defaultProps.color,
  highlightColor = defaultProps.highlightColor,
  shimmerColor = defaultProps.shimmerColor,
  rounded = defaultProps.rounded,
  animation = defaultProps.animation,
  speed = defaultProps.speed,
  shimmerDirection = defaultProps.shimmerDirection,
  className = defaultProps.className,
  style = {},
}) => {
  const shimmerAnimationName = useMemo(
    () => generateAnimationName("shimmer"),
    []
  );
  const animationDuration = getAnimationDuration(speed);

  const getBackground = () => {
    if (animation === "shimmer") {
      return `linear-gradient(
        ${shimmerDirection},
        ${color} 0%,
        ${color} 35%,
        ${highlightColor} 50%,
        ${color} 65%,
        ${color} 100%
      )`;
    }
    return color;
  };

  const getAnimation = () => {
    if (animation === "shimmer") {
      return `${shimmerAnimationName} ${animationDuration} linear infinite`;
    }
    return "none";
  };

  const getBorderRadius = () => {
    if (typeof rounded === "boolean") {
      return rounded ? "8px" : "0";
    }
    return rounded;
  };

  return (
    <>
      {animation === "shimmer" && (
        <style>{createShimmerKeyframes(shimmerAnimationName)}</style>
      )}
      <div
        className={className}
        style={{
          width: width,
          height: height,
          backgroundColor: color,
          background: getBackground(),
          backgroundSize: "300% 100%", // Wider background for smooth loop
          borderRadius: getBorderRadius(),
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)",
          position: "relative",
          overflow: "hidden",
          animation: getAnimation(),
          willChange: animation === "shimmer" ? "background-position" : "auto",
          ...style,
        }}
        aria-hidden="true"
      />
    </>
  );
};

// CircleSkeleton component
const CircleSkeleton = ({
  size,
  color = defaultProps.color,
  highlightColor = defaultProps.highlightColor,
  shimmerColor = defaultProps.shimmerColor,
  animation = defaultProps.animation,
  speed = defaultProps.speed,
  shimmerDirection = defaultProps.shimmerDirection,
  className = defaultProps.className,
  style = {},
}) => {
  return (
    <SkeletonBar
      width={size}
      height={size}
      color={color}
      highlightColor={highlightColor}
      shimmerColor={shimmerColor}
      rounded="50%"
      animation={animation}
      speed={speed}
      shimmerDirection={shimmerDirection}
      className={className}
      style={style}
      aria-label="Loading circle"
      role="img"
    />
  );
};

// Export components
export { SkeletonBar, CircleSkeleton };
