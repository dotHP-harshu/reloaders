import React, { useMemo } from "react";

// Enhanced Defaults with modern color palette
const defaultProps = {
  size: "64px",
  color: "#6366f1", // Modern indigo
  className: "",
  style: {},
  rounded: true,
  speed: "normal",
};

let animationCounter = 0;
const generateAnimationName = (prefix = "anim") =>
  `${prefix}-${animationCounter++}`;

const getLoaderAnimationDuration = (speed) => {
  const durations = {
    slow: "1.5s",
    normal: "1s",
    fast: "0.5s",
  };
  return durations[speed] || durations.normal;
};

// 1. Pulsing Bars Loader
const PulsingBarsLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed
}) => {
  const animationName = useMemo(() => generateAnimationName("pulse-bars"), []);
  const animationDuration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%  {background-size: 20% 100%,20% 100%,20% 100%}
          33% {background-size: 20% 10% ,20% 100%,20% 100%}
          50% {background-size: 20% 100%,20% 10% ,20% 100%}
          66% {background-size: 20% 100%,20% 100%,20% 10% }
          100%{background-size: 20% 100%,20% 100%,20% 100%}
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "1",
          background: `
            no-repeat linear-gradient(${color} 0 0) 0%   50%,
            no-repeat linear-gradient(${color} 0 0) 50%  50%,
            no-repeat linear-gradient(${color} 0 0) 100% 50%`,
          backgroundSize: "20% 100%",
          animation: `${animationName} ${animationDuration} infinite linear`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 2. Rising Bars Loader
const RisingBarsLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(() => generateAnimationName("rising-bars"), []);
  const duration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%  {background-size: 20% 100%,20% 100%,20% 100%}
          20% {background-size: 20% 60% ,20% 100%,20% 100%}
          40% {background-size: 20% 80% ,20% 60% ,20% 100%}
          60% {background-size: 20% 100%,20% 80% ,20% 60% }
          80% {background-size: 20% 100%,20% 100%,20% 80% }
          100%{background-size: 20% 100%,20% 100%,20% 100%}
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "1",
          background: `
            no-repeat linear-gradient(${color} 0 0) 0%   100%,
            no-repeat linear-gradient(${color} 0 0) 50%  100%,
            no-repeat linear-gradient(${color} 0 0) 100% 100%`,
          backgroundSize: "20% 100%",
          animation: `${animationName} ${duration} infinite linear`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 3. Sliding Gradient Bars
const SlidingGradientBars = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("sliding-gradient"),
    []
  );

  const duration = getLoaderAnimationDuration(speed);


  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          100% {background-position: left top,center top,right top }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "1",
          background: `
            linear-gradient(${color}00 calc(1*100%/6),${color} 0 calc(3*100%/6),${color}00 0) left   bottom,
            linear-gradient(${color}00 calc(2*100%/6),${color} 0 calc(4*100%/6),${color}00 0) center bottom,
            linear-gradient(${color}00 calc(3*100%/6),${color} 0 calc(5*100%/6),${color}00 0) right  bottom`,
          backgroundSize: "20% 600%",
          backgroundRepeat: "no-repeat",
          animation: `${animationName} ${duration} infinite linear`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 4. Moving Center Bars
const MovingCenterBars = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("moving-center"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);


  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          33%  {background-position: 0% 50%,50% 100%,100% 100%}
          50%  {background-position: 0%  0%,50%  50%,100% 100%}
          66%  {background-position: 0%  0%,50%   0%,100%  50%}
          100% {background-position: 0%  0%,50%   0%,100%   0%}
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "1",
          background: `
            no-repeat linear-gradient(${color} calc(50% - 10px),${color}00 0 calc(50% + 10px),${color} 0) 0%   100%,
            no-repeat linear-gradient(${color} calc(50% - 10px),${color}00 0 calc(50% + 10px),${color} 0) 50%  100%,
            no-repeat linear-gradient(${color} calc(50% - 10px),${color}00 0 calc(50% + 10px),${color} 0) 100% 100%`,
          backgroundSize: "20% calc(200% + 20px)",
          animation: `${animationName} ${duration} infinite linear`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 5. Alternating Bars Loader
const AlternatingBarsLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("alternating-bars"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);


  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          20% {background-position: 0% 50% ,50% 100%,100% 100%}
          40% {background-position: 0% 0%  ,50% 50% ,100% 100%}
          60% {background-position: 0% 100%,50% 0%  ,100% 50% }
          80% {background-position: 0% 100%,50% 100%,100% 0%  }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "0.75",
          background: `
            no-repeat linear-gradient(${color} 0 0) 0%   100%,
            no-repeat linear-gradient(${color} 0 0) 50%  100%,
            no-repeat linear-gradient(${color} 0 0) 100% 100%`,
          backgroundSize: "20% 65%",
          animation: `${animationName} ${duration} infinite linear`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 6. Vertical Wave Bars
const VerticalWaveBars = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("vertical-wave"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);


  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          20% {background-position: 0% 0%  ,50% 50% ,100% 50% }
          40% {background-position: 0% 100%,50% 0%  ,100% 50% }
          60% {background-position: 0% 50% ,50% 100%,100% 0%  }
          80% {background-position: 0% 50% ,50% 50% ,100% 100%}
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "0.75",
          background: `
            no-repeat linear-gradient(${color} 0 0) 0%   50%,
            no-repeat linear-gradient(${color} 0 0) 50%  50%,
            no-repeat linear-gradient(${color} 0 0) 100% 50%`,
          backgroundSize: "20% 50%",
          animation: `${animationName} ${duration} infinite linear`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 7. Size Morphing Bars
const SizeMorphingBars = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(() => generateAnimationName("size-morph"), []);
  const duration = getLoaderAnimationDuration(speed);


  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          0%  {background-size: 20% 50% ,20% 50% ,20% 50% }
          20% {background-size: 20% 20% ,20% 50% ,20% 50% }
          40% {background-size: 20% 100%,20% 20% ,20% 50% }
          60% {background-size: 20% 50% ,20% 100%,20% 20% }
          80% {background-size: 20% 50% ,20% 50% ,20% 100%}
          100%{background-size: 20% 50% ,20% 50% ,20% 50% }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "0.75",
          background: `
            no-repeat linear-gradient(${color} 0 0) 0%   50%,
            no-repeat linear-gradient(${color} 0 0) 50%  50%,
            no-repeat linear-gradient(${color} 0 0) 100% 50%`,
          backgroundSize: "20% 50%",
          animation: `${animationName} ${duration} infinite linear alternate`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 8. Sequential Bars Loader
const SequentialBarsLoader = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("sequential-bars"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);


  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          16.67% {background-position: 0% 0%  ,50% 100%,100% 100%}
          33.33% {background-position: 0% 0%  ,50% 0%  ,100% 100%}
          50%    {background-position: 0% 0%  ,50% 0%  ,100% 0%  }
          66.67% {background-position: 0% 100%,50% 0%  ,100% 0%  }
          83.33% {background-position: 0% 100%,50% 100%,100% 0%  }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "0.75",
          background: `
            no-repeat linear-gradient(${color} 0 0) 0%   100%,
            no-repeat linear-gradient(${color} 0 0) 50%  100%,
            no-repeat linear-gradient(${color} 0 0) 100% 100%`,
          backgroundSize: "20% 65%",
          animation: `${animationName} ${duration} infinite linear`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 9. Cross Pattern Bars
const CrossPatternBars = ({
  size = defaultProps.size,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("cross-pattern"),
    []
  );
    const duration = getLoaderAnimationDuration(speed);


  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          33% {background-position: 0% 0%  ,50% 100%,100% 0%  }
          66% {background-position: 0% 100%,50% 0%  ,100% 100%}
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          aspectRatio: "0.75",
          background: `
            no-repeat linear-gradient(${color} 0 0) 0%   50%,
            no-repeat linear-gradient(${color} 0 0) 50%  50%,
            no-repeat linear-gradient(${color} 0 0) 100% 50%`,
          backgroundSize: "20% 60%",
          animation: `${animationName} ${duration} infinite`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 10. Horizontal Stripes Loader
const HorizontalStripesLoader = ({
  size = "45px",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  speed = defaultProps.speed,
}) => {
  const animationName = useMemo(
    () => generateAnimationName("horizontal-stripes"),
    []
  );
  const duration = getLoaderAnimationDuration(speed);


  return (
    <>
      <style>
        {`
        @keyframes ${animationName} {
          33%  {background-position: 0   0   ,100% 100%}
          66%  {background-position: 0   100%,100% 0   }
          100% {background-position: 50% 100%,50%  0   }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          height: size,
          aspectRatio: "1.2",
          background: `
            no-repeat repeating-linear-gradient(90deg,${color} 0 20%,${color}00 0 40%) 50% 0,
            no-repeat repeating-linear-gradient(90deg,${color} 0 20%,${color}00 0 40%) 50% 100%`,
          backgroundSize: "calc(500%/6) 50%",
          animation: `${animationName} ${duration} infinite linear`,
          ...style,
        }}
        aria-label="Loading"
        role="status"
      />
    </>
  );
};

// 11. Enhanced Progress Bar with gradient and glow
const BasicProgressBar = ({
  width = "100%",
  height = defaultProps.size,
  color = defaultProps.color,
  speed = defaultProps.speed,
  className = "",
  style = {},
  rounded = true,
  gradient = true,
  glow = true,
}) => {
  const fillKey = generateAnimationName("fill");
  const radius = rounded ? "8px" : "0";

  const backgroundColor = gradient
    ? `linear-gradient(90deg, ${color}, ${color}aa, ${color})`
    : color;

  const boxShadow = glow ? `0 0 10px ${color}40, 0 0 20px ${color}20` : "none";

  const duration = getLoaderAnimationDuration(speed);

  return (
    <>
      <style>
        {`
          @keyframes ${fillKey} {
            0% { 
              width: 0%; 
              opacity: 0.7;
            }
            50% {
              opacity: 1;
            }
            100% { 
              width: 100%; 
              opacity: 0.9;
            }
          }
        `}
      </style>
      <div
        className={className}
        style={{
          width,
          height,
          backgroundColor: "#f1f5f9",
          borderRadius: radius,
          overflow: "hidden",
          position: "relative",
          border: "1px solid #e2e8f0",
          ...style,
        }}
      >
        <div
          style={{
            height: "100%",
            background: backgroundColor,
            animation: `${fillKey} ${duration } cubic-bezier(0.4, 0, 0.2, 1) infinite`,
            borderRadius: radius,
            boxShadow,
            willChange: "width, opacity",
          }}
        />
      </div>
    </>
  );
};

// 12. Enhanced Striped Loader with 3D effect
const StripedLoaderBar = ({
  width = "100%",
  height = defaultProps.size,
  color = defaultProps.color,
  className = "",
  style = {},
  rounded = true,
}) => {
  const stripeKey = generateAnimationName("stripe");
  const pulseKey = generateAnimationName("pulse");
  const radius = rounded ? "8px" : "0";
  const h = parseFloat(height);

  return (
    <>
      <style>
        {`
          @keyframes ${stripeKey} {
            0% { background-position: 0 0; }
            100% { background-position: ${h * 3}px 0; }
          }
          @keyframes ${pulseKey} {
            0%, 100% { transform: scaleY(1); }
            50% { transform: scaleY(1.05); }
          }
        `}
      </style>
      <div
        className={className}
        style={{
          width,
          height,
          borderRadius: radius,
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            ${color} 0,
            ${color} ${h * 0.6}px,
            ${color}cc ${h * 0.6}px,
            ${color}cc ${h * 1.2}px,
            rgba(255,255,255,0.3) ${h * 1.2}px,
            rgba(255,255,255,0.3) ${h * 1.8}px
          )`,
          backgroundSize: `${h * 3}px ${h}px`,
          animation: `${stripeKey} 1s linear infinite, ${pulseKey} 2s ease-in-out infinite`,
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.2)",
          boxShadow: `0 2px 8px ${color}30, inset 0 1px 0 rgba(255,255,255,0.3)`,
          willChange: "background-position, transform",
          ...style,
        }}
      />
    </>
  );
};

// 13. Enhanced Indeterminate Progress with shimmer effect
const IndeterminateProgressBar = ({
  width = "100%",
  height = defaultProps.size,
  color = defaultProps.color,
  className = "",
  style = {},
  rounded = true,
}) => {
  const moveKey = generateAnimationName("indeterminate");
  const shimmerKey = generateAnimationName("shimmer");
  const radius = rounded ? "8px" : "0";

  return (
    <>
      <style>
        {`
          @keyframes ${moveKey} {
            0% { 
              left: -35%; 
              right: 100%; 
              transform: skewX(-10deg);
            }
            25% {
              transform: skewX(0deg);
            }
            50% { 
              left: 25%; 
              right: -25%; 
              transform: skewX(10deg);
            }
            75% {
              transform: skewX(0deg);
            }
            100% { 
              left: 100%; 
              right: -70%;
              transform: skewX(-10deg);
            }
          }
          @keyframes ${shimmerKey} {
            0%, 100% { opacity: 0.8; }
            50% { opacity: 1; }
          }
        `}
      </style>
      <div
        className={className}
        style={{
          width,
          height,
          backgroundColor: "#f1f5f9",
          borderRadius: radius,
          overflow: "hidden",
          position: "relative",
          border: "1px solid #e2e8f0",
          ...style,
        }}
      >
        <div
          style={{
            position: "absolute",
            height: "100%",
            background: `linear-gradient(90deg, ${color}aa, ${color}, ${color}aa)`,
            animation: `${moveKey} 2s cubic-bezier(0.645, 0.045, 0.355, 1) infinite, ${shimmerKey} 1s ease-in-out infinite`,
            borderRadius: radius,
            boxShadow: `0 0 15px ${color}50`,
            willChange: "left, right, transform, opacity",
          }}
        />
      </div>
    </>
  );
};

// 14. Enhanced Dual Bar with synchronized wave motion
const DualBarLoader = ({
  width = "100%",
  height = defaultProps.size,
  color = defaultProps.color,
  className = "",
  style = {},
  rounded = true,
}) => {
  const wave1Key = generateAnimationName("wave-1");
  const wave2Key = generateAnimationName("wave-2");
  const radius = rounded ? "8px" : "0";

  return (
    <>
      <style>
        {`
          @keyframes ${wave1Key} {
            0% { 
              transform: translateX(-120%) scaleX(0.8);
              opacity: 0.7;
            }
            50% { 
              transform: translateX(0) scaleX(1);
              opacity: 1;
            }
            100% { 
              transform: translateX(120%) scaleX(0.8);
              opacity: 0.7;
            }
          }
          @keyframes ${wave2Key} {
            0% { 
              transform: translateX(120%) scaleX(0.8);
              opacity: 0.7;
            }
            50% { 
              transform: translateX(0) scaleX(1);
              opacity: 1;
            }
            100% { 
              transform: translateX(-120%) scaleX(0.8);
              opacity: 0.7;
            }
          }
        `}
      </style>
      <div
        className={className}
        style={{
          ...style,
          width,
          height: `calc(${height} * 2 + 8px)`,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        {[wave1Key, wave2Key].map((key, i) => (
          <div
            key={i}
            style={{
              height,
              backgroundColor: "#f1f5f9",
              borderRadius: radius,
              overflow: "hidden",
              position: "relative",
              border: "1px solid #e2e8f0",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "60%",
                height: "100%",
                background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                animation: `${key} 1.8s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`,
                borderRadius: radius,
                willChange: "transform, opacity",
              }}
            />
          </div>
        ))}
      </div>
    </>
  );
};

// 15. Enhanced Growing Bars with elastic animation
const GrowingBarLoader = ({
  height = defaultProps.size,
  barWidth = "6px",
  color = defaultProps.color,
  className = "",
  style = {},
  barCount = 5,
  gap = "3px",
  rounded = true,
}) => {
  const growKey = generateAnimationName("grow-elastic");
  const radius = rounded ? "4px" : "0";

  return (
    <>
      <style>
        {`
          @keyframes ${growKey} {
            0%, 100% { 
              transform: scaleY(0.3) scaleX(1);
              opacity: 0.6;
            }
            50% { 
              transform: scaleY(1.1) scaleX(1.05);
              opacity: 1;
            }
          }
        `}
      </style>
      <div
        className={className}
        style={{
          ...style,
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          width:"fit-content",
          height,
          padding: "4px 0",
        }}
      >
        {[...Array(barCount)].map((_, i) => (
          <div
            key={i}
            style={{
              width: barWidth,
              height: "100%",
              background: `linear-gradient(to top, ${color}, ${color}dd)`,
              margin: `0 ${gap}`,
              borderRadius: radius,
              transformOrigin: "bottom center",
              animation: `${growKey} 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite`,
              animationDelay: `${i * 0.12}s`,
              boxShadow: `0 2px 8px ${color}40`,
              willChange: "transform, opacity",
            }}
          />
        ))}
      </div>
    </>
  );
};

// 16. Enhanced Waveform with realistic audio visualization
const WaveformBar = ({
  height = defaultProps.size,
  barWidth = "4px",
  color = defaultProps.color,
  className = "",
  style = {},
  barCount = 8,
  gap = "2px",
  rounded = true,
}) => {
  const waveKey = generateAnimationName("waveform-realistic");
  const radius = rounded ? "3px" : "0";

  // Create more realistic waveform pattern
  const waveformPattern = [0.3, 0.7, 1, 0.4, 0.8, 0.2, 0.9, 0.5];

  return (
    <>
      <style>
        {`
          @keyframes ${waveKey} {
            0% { transform: scaleY(0.2); opacity: 0.6; }
            25% { transform: scaleY(var(--peak-1, 0.8)); opacity: 0.9; }
            50% { transform: scaleY(var(--peak-2, 1)); opacity: 1; }
            75% { transform: scaleY(var(--peak-3, 0.6)); opacity: 0.8; }
            100% { transform: scaleY(0.3); opacity: 0.6; }
          }
        `}
      </style>
      <div
        className={className}
        style={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "center",
          width:"fit-content",
          height,
          padding: "4px 0",
          ...style,
        }}
      >
        {[...Array(barCount)].map((_, i) => {
          const patternIndex = i % waveformPattern.length;
          const peak1 = waveformPattern[patternIndex] * 0.8;
          const peak2 = waveformPattern[patternIndex];
          const peak3 = waveformPattern[patternIndex] * 0.6;

          return (
            <div
              key={i}
              style={{
                width: barWidth,
                height: "100%",
                background: `linear-gradient(to top, ${color}, ${color}cc, ${color}88)`,
                margin: `0 ${gap}`,
                borderRadius: radius,
                transformOrigin: "bottom center",
                animation: `${waveKey} 1.4s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`,
                animationDelay: `${i * 0.08}s`,
                boxShadow: `0 1px 4px ${color}30`,
                willChange: "transform, opacity",
                "--peak-1": peak1,
                "--peak-2": peak2,
                "--peak-3": peak3,
              }}
            />
          );
        })}
      </div>
    </>
  );
};

// 7. NEW: Morphing Bar Loader
const MorphingBarLoader = ({
  width = "100%",
  height = defaultProps.size,
  color = defaultProps.color,
  className = "",
  style = {},
  rounded = true,
}) => {
  const morphKey = generateAnimationName("morph");
  const radius = rounded ? "8px" : "0";

  return (
    <>
      <style>
        {`
          @keyframes ${morphKey} {
            0% { 
              width: 20%;
              height: 100%;
              left: 0;
              border-radius: 0 50px 50px 0;
            }
            25% {
              width: 50%;
              height: 120%;
              left: 25%;
              border-radius: 50px;
            }
            50% {
              width: 30%;
              height: 100%;
              left: 70%;
              border-radius: 50px 0 0 50px;
            }
            75% {
              width: 60%;
              height: 80%;
              left: 20%;
              border-radius: 50px;
            }
            100% { 
              width: 20%;
              height: 100%;
              left: 0;
              border-radius: 0 50px 50px 0;
            }
          }
        `}
      </style>
      <div
        className={className}
        style={{
          width,
          height,
          backgroundColor: "#f1f5f9",
          borderRadius: radius,
          overflow: "hidden",
          position: "relative",
          border: "1px solid #e2e8f0",
          ...style,
        }}
      >
        <div
          style={{
            position: "absolute",
            background: `linear-gradient(45deg, ${color}, ${color}cc, ${color})`,
            animation: `${morphKey} 3s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite`,
            top: "50%",
            transform: "translateY(-50%)",
            boxShadow: `0 0 15px ${color}40`,
            willChange: "width, height, left, border-radius",
          }}
        />
      </div>
    </>
  );
};

// 8. NEW: Particle Trail Loader
const ParticleTrailLoader = ({
  width = "100%",
  height = defaultProps.size,
  color = defaultProps.color,
  className = "",
  style = {},
  rounded = true,
  particleCount = 3,
}) => {
  const trailKey = generateAnimationName("particle-trail");
  const radius = rounded ? "8px" : "0";

  return (
    <>
      <style>
        {`
          @keyframes ${trailKey} {
            0% { 
              left: -10%;
              opacity: 0;
              transform: scale(0.5);
            }
            20% {
              opacity: 1;
              transform: scale(1);
            }
            80% {
              opacity: 1;
              transform: scale(1);
            }
            100% { 
              left: 110%;
              opacity: 0;
              transform: scale(0.5);
            }
          }
        `}
      </style>
      <div
        className={className}
        style={{
          width,
          height,
          backgroundColor: "#f1f5f9",
          borderRadius: radius,
          overflow: "hidden",
          position: "relative",
          border: "1px solid #e2e8f0",
          ...style,
        }}
      >
        {[...Array(particleCount)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: "20%",
              height: "100%",
              background: `radial-gradient(circle, ${color}, ${color}aa, transparent)`,
              animation: `${trailKey} 2s cubic-bezier(0.25, 0.46, 0.45, 0.94) infinite`,
              animationDelay: `${i * 0.3}s`,
              borderRadius: radius,
              filter: "blur(0.5px)",
              willChange: "left, opacity, transform",
            }}
          />
        ))}
      </div>
    </>
  );
};

export {
  PulsingBarsLoader,
  RisingBarsLoader,
  SlidingGradientBars,
  MovingCenterBars,
  AlternatingBarsLoader,
  VerticalWaveBars,
  SizeMorphingBars,
  SequentialBarsLoader,
  CrossPatternBars,
  HorizontalStripesLoader,
  BasicProgressBar,
  StripedLoaderBar,
  IndeterminateProgressBar,
  DualBarLoader,
  GrowingBarLoader,
  WaveformBar,
  MorphingBarLoader,
  ParticleTrailLoader,
};
