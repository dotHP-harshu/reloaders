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

// 42. Pacman Loader (eating dots) - Improved
// const PacmanLoader = ({
//   size = 60,
//   color = "#f1c40f",
//   dotColor = "#ecf0f1",
//   className = "",
//   style = {},
//   dotCount = 6,
//   duration = 2,
// }) => {
//   const pacmanSize = parseFloat(size);
//   const dotSize = pacmanSize / 6;
//   const dotGap = dotSize * 1.5;
//   const trackWidth = (dotSize + dotGap) * dotCount + pacmanSize;

//   const pacmanEat = generateAnimationName("pacman-eat");
//   const pacmanMove = generateAnimationName("pacman-move");
//   const dotFadeMove = generateAnimationName("dot-fade-move");

//   return (
//     <>
//       <style>
//         {`
//         @keyframes ${pacmanEat} {
//           0%, 100% { transform: rotate(0deg); }
//           50% { transform: rotate(35deg); }
//         }

//         @keyframes ${pacmanMove} {
//           0% { transform: translateX(0); }
//           100% { transform: translateX(${trackWidth}px); }
//         }

//         @keyframes ${dotFadeMove} {
//           0% {
//             opacity: 1;
//             transform: translateX(0) scale(1);
//           }
//           80% {
//             opacity: 0.3;
//             transform: translateX(-${pacmanSize}px) scale(0.6);
//           }
//           100% {
//             opacity: 0;
//             transform: translateX(-${pacmanSize * 1.5}px) scale(0);
//           }
//         }
//         `}
//       </style>

//       <div
//         className={className}
//         style={{
//           position: "relative",
//           width: `${trackWidth}px`,
//           height: `${pacmanSize}px`,
//           overflow: "hidden",
//           ...style,
//         }}
//         role="status"
//         aria-label="Loading..."
//       >
//         {/* Pacman wrapper with overflow hidden */}
//         <div
//           style={{
//             position: "absolute",
//             width: pacmanSize,
//             height: pacmanSize,
//             animation: `${pacmanMove} ${duration}s linear infinite`,
//             zIndex: 2,
//           }}
//         >
//           {/* Pacman head */}
//           <div
//             style={{
//               position: "relative",
//               width: "100%",
//               height: "100%",
//               borderRadius: "50%",
//               background: `radial-gradient(circle at 30% 30%, #fff59d, ${color})`,
//               overflow: "hidden", // Clip everything inside
//               boxShadow: "2px 4px 6px rgba(0,0,0,0.2)",
//             }}
//           >
//             {/* Top mouth */}
//             <div
//               style={{
//                 position: "absolute",
//                 top: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "50%",
//                 background: "#fff",
//                 transformOrigin: "100% 100%",
//                 animation: `${pacmanEat} ${duration / 4}s ease-in-out infinite`,
//                 clipPath: "polygon(0 0, 100% 0, 100% 100%)",
//               }}
//             />
//             {/* Bottom mouth */}
//             <div
//               style={{
//                 position: "absolute",
//                 bottom: 0,
//                 left: 0,
//                 width: "100%",
//                 height: "50%",
//                 background: "#fff",
//                 transformOrigin: "100% 0%",
//                 animation: `${pacmanEat} ${
//                   duration / 4
//                 }s ease-in-out infinite reverse`,
//                 clipPath: "polygon(0 100%, 100% 100%, 100% 0%)",
//               }}
//             />
//             {/* Eye */}
//             <div
//               style={{
//                 width: pacmanSize * 0.1,
//                 height: pacmanSize * 0.1,
//                 backgroundColor: "#2c3e50",
//                 borderRadius: "50%",
//                 position: "absolute",
//                 top: "25%",
//                 left: "35%",
//                 zIndex: 3,
//               }}
//             />
//           </div>
//         </div>

//         {/* Dots */}
//         <div
//           style={{
//             position: "absolute",
//             left: `${pacmanSize + dotGap / 2}px`,
//             top: "50%",
//             transform: "translateY(-50%)",
//             display: "flex",
//             zIndex: 1,
//           }}
//         >
//           {[...Array(dotCount)].map((_, i) => (
//             <div
//               key={i}
//               style={{
//                 width: dotSize,
//                 height: dotSize,
//                 borderRadius: "50%",
//                 background: `radial-gradient(circle, ${dotColor}, #bdc3c7)`,
//                 marginRight: `${dotGap}px`,
//                 animation: `${dotFadeMove} ${duration}s infinite`,
//                 animationDelay: `${(i * duration) / dotCount}s`,
//               }}
//             />
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// 43. Heart Beat Animation - Improved
const HeartBeatAnimation = ({
  size = "50px",
  color = "#e74c3c",
  className = defaultProps.className,
  style = defaultProps.style,
  duration = "1.2s",
}) => {
  const heartbeatAnimation = generateAnimationName("heartbeat");
  const pulseAnimation = generateAnimationName("heart-pulse");

  return (
    <>
      <style>
        {`
        @keyframes ${heartbeatAnimation} {
          0% { transform: scale(1); }
          10% { transform: scale(1.1); }
          20% { transform: scale(1); }
          30% { transform: scale(1.15); }
          40% { transform: scale(1); }
          100% { transform: scale(1); }
        }
        @keyframes ${pulseAnimation} {
          0%, 100% {
            opacity: 0.3;
            transform: scale(1);
          }
          50% {
            opacity: 0.8;
            transform: scale(1.2);
          }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          width: size,
          height: size,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          transformOrigin: "center",
          animation: `${heartbeatAnimation} ${duration} infinite ease-in-out`,
          filter: "drop-shadow(0 4px 8px rgba(231, 76, 60, 0.3))",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {/* Pulse ring */}
        <div
          style={{
            position: "absolute",
            width: "100%",
            height: "100%",
            border: `3px solid ${color}`,
            borderRadius: "50%",
            animation: `${pulseAnimation} ${duration} infinite ease-in-out`,
            opacity: 0.3,
          }}
        />
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="heartGradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#ff6b6b" />
              <stop offset="100%" stopColor={color} />
            </linearGradient>
          </defs>
          <path
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
            fill="url(#heartGradient)"
          />
        </svg>
      </div>
    </>
  );
};

// 44. Coffee Cup Steam - Improved
const CoffeeCupSteam = ({
  size = "80px",
  color = "#6d4c41",
  steamColor = "#e0e0e0",
  className = defaultProps.className,
  style = defaultProps.style,
  duration = "2s",
}) => {
  const steamAnimation = generateAnimationName("steam-rise");
  const cupAnimation = generateAnimationName("cup-wiggle");

  return (
    <>
      <style>
        {`
        @keyframes ${steamAnimation} {
          0% { 
            transform: translateY(0) scale(0.8) rotate(0deg); 
            opacity: 0; 
          }
          20% { 
            opacity: 1; 
          }
          80% { 
            opacity: 0.7; 
          }
          100% { 
            transform: translateY(-${
              parseFloat(size) * 0.8
            }px) scale(1.3) rotate(10deg); 
            opacity: 0; 
          }
        }
        @keyframes ${cupAnimation} {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-2px) rotate(1deg); }
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.1))",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {/* Steam particles with different sizes */}
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            style={{
              position: "absolute",
              width: `${parseFloat(size) / (4 + i)}px`,
              height: `${parseFloat(size) / (4 + i)}px`,
              background: `radial-gradient(circle, ${steamColor}, transparent)`,
              borderRadius: "50%",
              opacity: 0,
              animation: `${steamAnimation} ${duration} infinite cubic-bezier(0.4, 0, 0.2, 1)`,
              animationDelay: `${i * (parseFloat(duration) / 6)}s`,
              bottom: `calc(${parseFloat(size) * 0.5}px)`,
              left: `calc(50% + ${(i - 2) * 8}px)`,
              transform: "translateX(-50%)",
              filter: "blur(1px)",
            }}
          />
        ))}

        {/* Coffee Cup with gradient and animation */}
        <div
          style={{
            width: "70%",
            height: "55%",
            background: `linear-gradient(135deg, ${color}, #5d4037)`,
            borderRadius: "8px 8px 4px 4px",
            position: "relative",
            animation: `${cupAnimation} 3s infinite ease-in-out`,
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.1)",
          }}
        >
          {/* Coffee liquid */}
          <div
            style={{
              position: "absolute",
              top: "8px",
              left: "8px",
              right: "8px",
              height: "60%",
              background: "linear-gradient(135deg, #8d6e63, #3e2723)",
              borderRadius: "4px 4px 0 0",
            }}
          />
          {/* Handle with 3D effect */}
          <div
            style={{
              position: "absolute",
              right: "-25%",
              top: "20%",
              width: "35%",
              height: "50%",
              border: `4px solid ${color}`,
              borderRadius: "50%",
              borderLeftColor: "transparent",
              borderBottomColor: "transparent",
              transform: "rotate(45deg)",
              boxShadow: "2px 2px 4px rgba(0,0,0,0.2)",
            }}
          />
        </div>
      </div>
    </>
  );
};

// 45. Hourglass Flip - Improved
const HourglassFlip = ({
  size = defaultProps.size,
  color = "#8e44ad",
  sandColor = "#f39c12",
  className = defaultProps.className,
  style = defaultProps.style,
  duration = "3s",
}) => {
  const flipAnimation = generateAnimationName("hourglass-flip");
  const sandFallAnimation = generateAnimationName("sand-fall");
  const glowAnimation = generateAnimationName("hourglass-glow");

  return (
    <>
      <style>
        {`
        @keyframes ${flipAnimation} {
          0%, 45% { transform: rotateX(0deg); }
          50%, 95% { transform: rotateX(180deg); }
          100% { transform: rotateX(360deg); }
        }
        @keyframes ${sandFallAnimation} {
          0% { height: 80%; top: 5%; }
          45% { height: 10%; top: 70%; }
          50% { height: 10%; top: 5%; }
          100% { height: 80%; top: 5%; }
        }
        @keyframes ${glowAnimation} {
          0%, 100% { box-shadow: 0 0 20px rgba(142, 68, 173, 0.3); }
          50% { box-shadow: 0 0 30px rgba(142, 68, 173, 0.6); }
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
          perspective: "1000px",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        <div
          style={{
            position: "relative",
            width: "75%",
            height: "95%",
            transformStyle: "preserve-3d",
            animation: `${flipAnimation} ${duration} infinite ease-in-out, ${glowAnimation} ${duration} infinite ease-in-out`,
            background: `linear-gradient(135deg, ${color}, #9b59b6)`,
            clipPath:
              "polygon(20% 0%, 80% 0%, 90% 50%, 80% 100%, 20% 100%, 10% 50%)",
            borderRadius: "4px",
          }}
        >
          {/* Sand animation */}
          <div
            style={{
              position: "absolute",
              width: "60%",
              height: "40%",
              background: `linear-gradient(135deg, ${sandColor}, #e67e22)`,
              left: "20%",
              clipPath: "polygon(0 0, 100% 0, 80% 100%, 20% 100%)",
              transformOrigin: "center",
              animation: `${sandFallAnimation} ${duration} infinite ease-in-out`,
              borderRadius: "2px",
            }}
          />
          {/* Thin sand stream */}
          <div
            style={{
              position: "absolute",
              width: "2px",
              height: "20%",
              backgroundColor: sandColor,
              left: "50%",
              top: "40%",
              transform: "translateX(-50%)",
              opacity: 0.8,
            }}
          />
        </div>
      </div>
    </>
  );
};

// 46. Loading Cat - Improved
const LoadingCat = ({
  size = "80px",
  color = "#34495e",
  className = defaultProps.className,
  style = defaultProps.style,
  duration = "2s",
}) => {
  const tailWagAnimation = generateAnimationName("tail-wag");
  const catWalkAnimation = generateAnimationName("cat-walk");
  const catBounceAnimation = generateAnimationName("cat-bounce");

  return (
    <>
      <style>
        {`
        @keyframes ${tailWagAnimation} {
          0%, 100% { transform: rotate(15deg) scaleY(1); }
          25% { transform: rotate(-5deg) scaleY(1.1); }
          50% { transform: rotate(20deg) scaleY(0.9); }
          75% { transform: rotate(-10deg) scaleY(1.1); }
        }
        @keyframes ${catWalkAnimation} {
          0% { transform: translateX(calc(100% + 50px)); }
          100% { transform: translateX(-100px); }
        }
        @keyframes ${catBounceAnimation} {
          0%, 100% { transform: translateY(0); }
          25%, 75% { transform: translateY(-3px); }
          50% { transform: translateY(-1px); }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          position: "relative",
          width: `calc(${size} * 2.5)`,
          height: size,
          overflow: "hidden",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        <div
          style={{
            position: "absolute",
            top: "50%",
            transform: "translateY(-50%)",
            animation: `${catWalkAnimation} ${duration} infinite linear, ${catBounceAnimation} 0.6s infinite ease-in-out`,
          }}
        >
          {/* Cat Body with gradient */}
          <div
            style={{
              width: size,
              height: `${parseFloat(size) * 0.6}px`,
              background: `linear-gradient(135deg, ${color}, #2c3e50)`,
              borderRadius: "50% / 60% 60% 40% 40%",
              position: "relative",
              boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            }}
          >
            {/* Stripes */}
            <div
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
                background: `repeating-linear-gradient(
                  90deg,
                  transparent,
                  transparent 8px,
                  rgba(0,0,0,0.1) 8px,
                  rgba(0,0,0,0.1) 12px
                )`,
                borderRadius: "inherit",
              }}
            />

            {/* Head */}
            <div
              style={{
                position: "absolute",
                width: `${parseFloat(size) * 0.45}px`,
                height: `${parseFloat(size) * 0.45}px`,
                background: `linear-gradient(135deg, ${color}, #2c3e50)`,
                borderRadius: "50%",
                top: "-25%",
                left: "65%",
                boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
              }}
            >
              {/* Ears with pink inside */}
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  left: "8px",
                  width: "0",
                  height: "0",
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderBottom: `12px solid ${color}`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-6px",
                  left: "12px",
                  width: "0",
                  height: "0",
                  borderLeft: "4px solid transparent",
                  borderRight: "4px solid transparent",
                  borderBottom: "6px solid #ff6b9d",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "8px",
                  width: "0",
                  height: "0",
                  borderLeft: "8px solid transparent",
                  borderRight: "8px solid transparent",
                  borderBottom: `12px solid ${color}`,
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "-6px",
                  right: "12px",
                  width: "0",
                  height: "0",
                  borderLeft: "4px solid transparent",
                  borderRight: "4px solid transparent",
                  borderBottom: "6px solid #ff6b9d",
                }}
              />

              {/* Eyes */}
              <div
                style={{
                  position: "absolute",
                  width: "6px",
                  height: "8px",
                  backgroundColor: "#2ecc71",
                  borderRadius: "50%",
                  top: "40%",
                  left: "25%",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  width: "6px",
                  height: "8px",
                  backgroundColor: "#2ecc71",
                  borderRadius: "50%",
                  top: "40%",
                  right: "25%",
                }}
              />

              {/* Nose */}
              <div
                style={{
                  position: "absolute",
                  width: "3px",
                  height: "3px",
                  backgroundColor: "#ff6b9d",
                  borderRadius: "50%",
                  top: "55%",
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              />
            </div>

            {/* Tail with improved animation */}
            <div
              style={{
                position: "absolute",
                width: `${parseFloat(size) * 0.6}px`,
                height: `${parseFloat(size) * 0.12}px`,
                background: `linear-gradient(90deg, ${color}, #2c3e50)`,
                borderRadius: "0 50% 50% 0",
                bottom: "20%",
                left: "-45%",
                transformOrigin: "right center",
                animation: `${tailWagAnimation} 0.8s infinite ease-in-out`,
                boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
              }}
            />

            {/* Legs with bounce effect */}
            {[10, 25, 50, 65].map((leftPos, i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "8px",
                  height: "18px",
                  backgroundColor: color,
                  bottom: "-12px",
                  left: `${leftPos}%`,
                  borderRadius: "4px 4px 6px 6px",
                  boxShadow: "0 2px 4px rgba(0,0,0,0.2)",
                  animation: `${catBounceAnimation} 0.6s infinite ease-in-out`,
                  animationDelay: `${i * 0.1}s`,
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

// 47. Loader Robot - Improved
const LoaderRobot = ({
  size = defaultProps.size,
  color = "#34495e",
  className = defaultProps.className,
  style = defaultProps.style,
  duration = "1.8s",
}) => {
  const armAnimation = generateAnimationName("robot-arm");
  const headAnimation = generateAnimationName("robot-head");
  const bodyAnimation = generateAnimationName("robot-body");
  const eyeAnimation = generateAnimationName("robot-eye");

  return (
    <>
      <style>
        {`
        @keyframes ${armAnimation} {
          0%, 100% { transform: rotate(0deg) translateY(0); }
          25% { transform: rotate(15deg) translateY(-2px); }
          50% { transform: rotate(0deg) translateY(0); }
          75% { transform: rotate(-15deg) translateY(-2px); }
        }
        @keyframes ${headAnimation} {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-3px) rotate(2deg); }
          50% { transform: translateY(-1px) rotate(0deg); }
        }
        @keyframes ${bodyAnimation} {
          0%, 100% { transform: scaleY(1) scaleX(1); }
          50% { transform: scaleY(0.95) scaleX(1.02); }
        }
        @keyframes ${eyeAnimation} {
          0%, 90%, 100% { background-color: #3498db; }
          95% { background-color: #e74c3c; }
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "flex-end",
          filter: "drop-shadow(0 4px 8px rgba(0,0,0,0.2))",
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {/* Head with antenna */}
        <div
          style={{
            width: "55%",
            height: "32%",
            background: `linear-gradient(135deg, ${color}, #2c3e50)`,
            borderRadius: "8px",
            marginBottom: "5%",
            position: "relative",
            animation: `${headAnimation} ${duration} infinite ease-in-out`,
            boxShadow:
              "0 2px 6px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.1)",
          }}
        >
          {/* Antenna */}
          <div
            style={{
              position: "absolute",
              width: "3px",
              height: "15px",
              backgroundColor: color,
              top: "-12px",
              left: "50%",
              transform: "translateX(-50%)",
              borderRadius: "2px",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "8px",
              height: "8px",
              backgroundColor: "#e74c3c",
              borderRadius: "50%",
              top: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              boxShadow: "0 0 8px rgba(231, 76, 60, 0.5)",
            }}
          />

          {/* Eyes with animation */}
          <div
            style={{
              position: "absolute",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              top: "30%",
              left: "25%",
              animation: `${eyeAnimation} ${duration} infinite ease-in-out`,
              boxShadow: "0 0 6px rgba(52, 152, 219, 0.6)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "12px",
              height: "12px",
              borderRadius: "50%",
              top: "30%",
              right: "25%",
              animation: `${eyeAnimation} ${duration} infinite ease-in-out`,
              animationDelay: "0.1s",
              boxShadow: "0 0 6px rgba(52, 152, 219, 0.6)",
            }}
          />

          {/* Mouth */}
          <div
            style={{
              position: "absolute",
              width: "20px",
              height: "8px",
              borderRadius: "0 0 10px 10px",
              backgroundColor: "#2c3e50",
              bottom: "20%",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          />
        </div>

        {/* Body */}
        <div
          style={{
            width: "75%",
            height: "50%",
            background: `linear-gradient(135deg, ${color}, #2c3e50)`,
            borderRadius: "12px",
            position: "relative",
            transformOrigin: "bottom center",
            animation: `${bodyAnimation} ${duration} infinite ease-in-out`,
            boxShadow:
              "0 4px 12px rgba(0,0,0,0.2), inset 0 2px 4px rgba(255,255,255,0.1)",
          }}
        >
          {/* Arms */}
          <div
            style={{
              position: "absolute",
              width: "22%",
              height: "65%",
              background: `linear-gradient(135deg, ${color}, #2c3e50)`,
              borderRadius: "8px",
              top: "15%",
              left: "-28%",
              transformOrigin: "top center",
              animation: `${armAnimation} ${duration} infinite ease-in-out`,
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "22%",
              height: "65%",
              background: `linear-gradient(135deg, ${color}, #2c3e50)`,
              borderRadius: "8px",
              top: "15%",
              right: "-28%",
              transformOrigin: "top center",
              animation: `${armAnimation} ${duration} infinite ease-in-out reverse`,
              boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
            }}
          />

          {/* Chest panel */}
          <div
            style={{
              position: "absolute",
              width: "60%",
              height: "40%",
              backgroundColor: "#2c3e50",
              borderRadius: "6px",
              top: "20%",
              left: "20%",
              boxShadow: "inset 0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            {/* Status lights */}
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                style={{
                  position: "absolute",
                  width: "8px",
                  height: "8px",
                  backgroundColor:
                    i === 0 ? "#2ecc71" : i === 1 ? "#f39c12" : "#e74c3c",
                  borderRadius: "50%",
                  top: "30%",
                  left: `${25 + i * 25}%`,
                  boxShadow: `0 0 6px ${
                    i === 0 ? "#2ecc71" : i === 1 ? "#f39c12" : "#e74c3c"
                  }`,
                  animation: `${eyeAnimation} ${
                    parseFloat(duration) + i * 0.2
                  }s infinite ease-in-out`,
                  animationDelay: `${i * 0.3}s`,
                }}
              />
            ))}
          </div>
        </div>

        {/* Legs/Base */}
        <div
          style={{
            width: "65%",
            height: "18%",
            background: `linear-gradient(135deg, ${color}, #2c3e50)`,
            borderRadius: "8px",
            marginTop: "5%",
            boxShadow: "0 4px 8px rgba(0,0,0,0.2)",
            position: "relative",
          }}
        >
          {/* Wheels/tracks */}
          <div
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              backgroundColor: "#2c3e50",
              borderRadius: "50%",
              bottom: "-10px",
              left: "15%",
              border: "2px solid #34495e",
            }}
          />
          <div
            style={{
              position: "absolute",
              width: "20px",
              height: "20px",
              backgroundColor: "#2c3e50",
              borderRadius: "50%",
              bottom: "-10px",
              right: "15%",
              border: "2px solid #34495e",
            }}
          />
        </div>
      </div>
    </>
  );
};

// 48. Infinity Symbol Spinner - Improved
const InfinitySpinner = ({
  size = 64,
  color = "#9b59b6",
  className = "",
  style = {},
  duration = "2s",
}) => {
  const infinityDashAnimation = generateAnimationName("infinity-dash");
  const infinityGlowAnimation = generateAnimationName("infinity-glow");

  return (
    <>
      <style>
        {`
        @keyframes ${infinityDashAnimation} {
          0% { stroke-dashoffset: 0; }
          100% { stroke-dashoffset: -300; }
        }

        @keyframes ${infinityGlowAnimation} {
          0%, 100% {
            filter: drop-shadow(0 0 5px ${color});
          }
          50% {
            filter: drop-shadow(0 0 15px ${color}) drop-shadow(0 0 25px ${color});
          }
        }
        `}
      </style>

      <svg
        className={className}
        width={size}
        height={size / 2}
        viewBox="0 0 100 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{
          animation: `${infinityGlowAnimation} ${duration} ease-in-out infinite`,
          ...style,
        }}
        role="status"
        aria-label="Loading..."
      >
        <defs>
          <linearGradient
            id="infinityGradient"
            x1="0%"
            y1="0%"
            x2="100%"
            y2="0%"
          >
            <stop offset="0%" stopColor={color} />
            <stop offset="50%" stopColor="#8e44ad" />
            <stop offset="100%" stopColor={color} />
          </linearGradient>
        </defs>

        <path
          d="M20 25 C 20 10, 40 10, 50 25 C 60 40, 80 40, 80 25 C 80 10, 60 10, 50 25 C 40 40, 20 40, 20 25 Z"
          stroke="url(#infinityGradient)"
          strokeWidth="6"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray="100 200"
          style={{
            animation: `${infinityDashAnimation} ${duration} linear infinite`,
          }}
        />
      </svg>
    </>
  );
};

// 49. Yin-Yang Loader - Improved
const YinYangLoader = ({
  size = defaultProps.size,
  color1 = "#2c3e50",
  color2 = "#ecf0f1",
  className = defaultProps.className,
  style = defaultProps.style,
  duration = "2s",
}) => {
  const yinYangSpinAnimation = generateAnimationName("yinyang-spin");
  const yinYangPulseAnimation = generateAnimationName("yinyang-pulse");

  return (
    <>
      <style>
        {`
        @keyframes ${yinYangSpinAnimation} {
          0% { transform: rotate(0deg) scale(1); }
          25% { transform: rotate(90deg) scale(1.05); }
          50% { transform: rotate(180deg) scale(1); }
          75% { transform: rotate(270deg) scale(1.05); }
          100% { transform: rotate(360deg) scale(1); }
        }
        @keyframes ${yinYangPulseAnimation} {
          0%, 100% { box-shadow: 0 0 20px rgba(44, 62, 80, 0.3); }
          50% { box-shadow: 0 0 40px rgba(44, 62, 80, 0.6), 0 0 60px rgba(44, 62, 80, 0.3); }
        }
        `}
      </style>
      <div
        className={className}
        style={{
          position: "relative",
          width: size,
          height: size,
          borderRadius: "50%",
          overflow: "hidden",
          animation: `${yinYangSpinAnimation} ${duration} cubic-bezier(0.4, 0, 0.2, 1) infinite, ${yinYangPulseAnimation} ${duration} ease-in-out infinite`,
          border: `3px solid ${color1}`,
          ...style,
        }}
        aria-label="Loading..."
        role="status"
      >
        {/* Left half (Yin) */}
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "100%",
            background: `linear-gradient(135deg, ${color1}, #34495e)`,
            left: 0,
            top: 0,
          }}
        />

        {/* Right half (Yang) */}
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "100%",
            background: `linear-gradient(135deg, ${color2}, #bdc3c7)`,
            right: 0,
            top: 0,
          }}
        />

        {/* Top semicircle (Yang) */}
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "50%",
            background: `radial-gradient(circle at center, ${color2}, #bdc3c7)`,
            borderRadius: "0 0 100% 100%",
            top: 0,
            left: "25%",
          }}
        />

        {/* Bottom semicircle (Yin) */}
        <div
          style={{
            position: "absolute",
            width: "50%",
            height: "50%",
            background: `radial-gradient(circle at center, ${color1}, #34495e)`,
            borderRadius: "100% 100% 0 0",
            bottom: 0,
            left: "25%",
          }}
        />

        {/* Small circles with glow effect */}
        <div
          style={{
            position: "absolute",
            width: `${parseFloat(size) / 6}px`,
            height: `${parseFloat(size) / 6}px`,
            background: `radial-gradient(circle, ${color2}, #bdc3c7)`,
            borderRadius: "50%",
            top: `${parseFloat(size) / 6}px`,
            left: `calc(50% - ${parseFloat(size) / 12}px)`,
            boxShadow: `0 0 10px ${color2}`,
            border: `2px solid ${color1}`,
          }}
        />
        <div
          style={{
            position: "absolute",
            width: `${parseFloat(size) / 6}px`,
            height: `${parseFloat(size) / 6}px`,
            background: `radial-gradient(circle, ${color1}, #34495e)`,
            borderRadius: "50%",
            bottom: `${parseFloat(size) / 6}px`,
            left: `calc(50% - ${parseFloat(size) / 12}px)`,
            boxShadow: `0 0 10px ${color1}`,
            border: `2px solid ${color2}`,
          }}
        />
      </div>
    </>
  );
};

// Export all fun/complex components
export {
  // PacmanLoader,
  HeartBeatAnimation,
  CoffeeCupSteam,
  // HourglassFlip,
  LoadingCat,
  LoaderRobot,
  InfinitySpinner,
  YinYangLoader,
};
