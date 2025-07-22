import React from "react";

// Enhanced default props with better design system
const defaultProps = {
  size: "64px",
  color: "#f1f5f9", // Softer light grey
  highlightColor: "#ffffff", // Pure white for shimmer
  shimmerColor: "rgba(255, 255, 255, 0.8)", // Semi-transparent shimmer
  className: "",
  style: {},
  rounded: true,
  animationDuration: "2s", // Slower, more elegant animation
  animationDelay: "0s",
};

// Helper for generating unique animation names
let animationCounter = 0;
const generateAnimationName = (prefix = "anim") =>
  `${prefix}-${animationCounter++}`;

// Enhanced shimmer effect with multiple variants
const createShimmerKeyframes = (name, direction = "horizontal") => {
  if (direction === "horizontal") {
    return `
@keyframes ${name} {
  0% { 
    background-position: -200% 0;
    opacity: 0;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% { 
    background-position: 200% 0;
    opacity: 0;
  }
}`;
  } else if (direction === "pulse") {
    return `
@keyframes ${name} {
  0%, 100% { 
    opacity: 1;
    transform: scale(1);
  }
  50% { 
    opacity: 0.7;
    transform: scale(0.98);
  }
}`;
  }
};

// Enhanced Base Skeleton Bar component
const SkeletonBar = ({
  width,
  height,
  color,
  rounded,
  className,
  style,
  hasShimmer,
  animationType = "shimmer",
  animationDelay = "0s",
}) => {
  const animationName = generateAnimationName(animationType);
  const keyframes = createShimmerKeyframes(animationName, animationType);

  const getBorderRadius = () => {
    if (!rounded) return "0";
    const heightNum = parseInt(height);
    if (heightNum <= 20) return "6px";
    if (heightNum <= 40) return "8px";
    return "12px";
  };

  const getBackground = () => {
    if (hasShimmer && animationType === "shimmer") {
      return `linear-gradient(
        110deg,
        ${color} 8%,
        ${defaultProps.shimmerColor} 18%,
        ${defaultProps.highlightColor} 33%,
        ${defaultProps.shimmerColor} 50%,
        ${color} 70%
      )`;
    }
    return color;
  };

  const getAnimation = () => {
    if (!hasShimmer) return "none";
    if (animationType === "pulse") {
      return `${animationName} 2s ease-in-out infinite ${animationDelay}`;
    }
    return `${animationName} ${defaultProps.animationDuration} ease-in-out infinite ${animationDelay}`;
  };

  return (
    <>
      {hasShimmer && <style>{keyframes}</style>}
      <div
        className={className}
        style={{
          width: width,
          height: height,
          background: getBackground(),
          backgroundSize:
            hasShimmer && animationType === "shimmer" ? "200% 100%" : "auto",
          borderRadius: getBorderRadius(),
          animation: getAnimation(),
          boxShadow: "0 1px 3px rgba(0, 0, 0, 0.02)",
          position: "relative",
          overflow: "hidden",
          ...style,
        }}
      />
    </>
  );
};

// Enhanced Text Skeleton with better typography
const TextSkeleton = ({
  lines = 3,
  lineHeight = "1.2em",
  gap = "0.5em",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  rounded = defaultProps.rounded,
  hasShimmer = true,
  variant = "paragraph", // paragraph, heading, caption
}) => {
  const getLineHeight = () => {
    switch (variant) {
      case "heading":
        return "1.8em";
      case "caption":
        return "1em";
      default:
        return lineHeight;
    }
  };

  const getLineVariations = () => {
    const variations = [];
    for (let i = 0; i < lines; i++) {
      let width;
      if (variant === "heading") {
        width = i === 0 ? "85%" : i === lines - 1 ? "60%" : "75%";
      } else {
        width =
          i === lines - 1
            ? `${60 + Math.random() * 20}%`
            : `${85 + Math.random() * 15}%`;
      }
      variations.push(width);
    }
    return variations;
  };

  const lineVariations = getLineVariations();

  return (
    <div
      className={className}
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        ...style,
      }}
      aria-label="Loading text content"
      role="status"
    >
      {[...Array(lines)].map((_, i) => (
        <SkeletonBar
          key={i}
          width={lineVariations[i]}
          height={getLineHeight()}
          color={color}
          rounded={rounded}
          style={{
            marginBottom: i < lines - 1 ? gap : "0",
          }}
          hasShimmer={hasShimmer}
          animationDelay={`${i * 0.1}s`}
        />
      ))}
    </div>
  );
};

// Enhanced Image Skeleton with aspect ratio support
const ImageSkeleton = ({
  width = "100%",
  height = "200px",
  aspectRatio,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  rounded = defaultProps.rounded,
  hasShimmer = true,
}) => {
  const containerStyle = aspectRatio
    ? { width, aspectRatio, height: "auto" }
    : { width, height };

  return (
    <SkeletonBar
      width="100%"
      height="100%"
      color={color}
      rounded={rounded}
      className={className}
      style={{
        ...containerStyle,
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        ...style,
      }}
      hasShimmer={hasShimmer}
      aria-label="Loading image"
      role="img"
    />
  );
};

// Enhanced Avatar + Text Card with better proportions
const AvatarTextCardSkeleton = ({
  size = "md", // sm, md, lg
  orientation = "horizontal", // horizontal, vertical
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  rounded = defaultProps.rounded,
  hasShimmer = true,
}) => {
  const getSizes = () => {
    switch (size) {
      case "sm":
        return {
          avatar: "32px",
          width: "200px",
          height: "60px",
          padding: "12px",
          textHeight: ["14px", "12px"],
        };
      case "lg":
        return {
          avatar: "64px",
          width: "300px",
          height: "140px",
          padding: "20px",
          textHeight: ["18px", "16px"],
        };
      default:
        return {
          avatar: "48px",
          width: "250px",
          height: "100px",
          padding: "16px",
          textHeight: ["16px", "14px"],
        };
    }
  };

  const sizes = getSizes();
  const isVertical = orientation === "vertical";

  return (
    <div
      className={className}
      style={{
        width: sizes.width,
        height: isVertical ? "auto" : sizes.height,
        backgroundColor: defaultProps.highlightColor,
        borderRadius: rounded ? "12px" : "0",
        padding: sizes.padding,
        display: "flex",
        flexDirection: isVertical ? "column" : "row",
        alignItems: isVertical ? "center" : "center",
        boxSizing: "border-box",
        boxShadow:
          "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
        ...style,
      }}
      aria-label="Loading user card"
      role="status"
    >
      <SkeletonBar
        width={sizes.avatar}
        height={sizes.avatar}
        color={color}
        rounded={true}
        style={{
          borderRadius: "50%",
          marginRight: isVertical ? "0" : "16px",
          marginBottom: isVertical ? "12px" : "0",
          flexShrink: 0,
        }}
        hasShimmer={hasShimmer}
      />
      <div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "8px",
          width: isVertical ? "100%" : "auto",
          alignItems: isVertical ? "center" : "flex-start",
        }}
      >
        <SkeletonBar
          width={isVertical ? "80%" : "85%"}
          height={sizes.textHeight[0]}
          color={color}
          rounded={rounded}
          hasShimmer={hasShimmer}
          animationDelay="0.1s"
        />
        <SkeletonBar
          width={isVertical ? "60%" : "65%"}
          height={sizes.textHeight[1]}
          color={color}
          rounded={rounded}
          hasShimmer={hasShimmer}
          animationDelay="0.2s"
        />
      </div>
    </div>
  );
};

// Enhanced Grid with responsive design
const GridCardSkeleton = ({
  count = 6,
  columns = "auto", // auto, 1, 2, 3, 4, etc.
  minCardWidth = "280px",
  cardHeight = "200px",
  gap = "1.5rem",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  rounded = defaultProps.rounded,
  hasShimmer = true,
}) => {
  const getGridTemplate = () => {
    if (columns === "auto") {
      return `repeat(auto-fit, minmax(${minCardWidth}, 1fr))`;
    }
    return `repeat(${columns}, 1fr)`;
  };

  return (
    <div
      className={className}
      style={{
        display: "grid",
        gridTemplateColumns: getGridTemplate(),
        gap: gap,
        width: "100%",
        ...style,
      }}
      aria-label="Loading grid of cards"
      role="status"
    >
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            height: cardHeight,
            backgroundColor: defaultProps.highlightColor,
            borderRadius: rounded ? "16px" : "0",
            overflow: "hidden",
            position: "relative",
            display: "flex",
            flexDirection: "column",
            padding: "20px",
            boxSizing: "border-box",
            boxShadow:
              "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
          }}
        >
          {/* Image area */}
          <SkeletonBar
            width="100%"
            height="60%"
            color={color}
            rounded={rounded}
            style={{ marginBottom: "16px" }}
            hasShimmer={hasShimmer}
            animationDelay={`${i * 0.1}s`}
          />

          {/* Title */}
          <SkeletonBar
            width="90%"
            height="18px"
            color={color}
            rounded={rounded}
            style={{ marginBottom: "8px" }}
            hasShimmer={hasShimmer}
            animationDelay={`${i * 0.1 + 0.1}s`}
          />

          {/* Subtitle */}
          <SkeletonBar
            width="70%"
            height="14px"
            color={color}
            rounded={rounded}
            hasShimmer={hasShimmer}
            animationDelay={`${i * 0.1 + 0.2}s`}
          />
        </div>
      ))}
    </div>
  );
};

// Enhanced List with better item structure
const ListSkeleton = ({
  count = 5,
  itemHeight = "auto", // auto for flexible height
  gap = "1rem",
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  rounded = defaultProps.rounded,
  hasShimmer = true,
  variant = "default", // default, detailed, minimal
}) => {
  const getItemStructure = (index) => {
    switch (variant) {
      case "detailed":
        return (
          <div
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: "16px",
              width: "100%",
            }}
          >
            <SkeletonBar
              width="48px"
              height="48px"
              color={color}
              rounded={true}
              style={{ borderRadius: "50%", flexShrink: 0 }}
              hasShimmer={hasShimmer}
            />
            <div
              style={{
                flexGrow: 1,
                display: "flex",
                flexDirection: "column",
                gap: "8px",
              }}
            >
              <SkeletonBar
                width="70%"
                height="16px"
                color={color}
                rounded={rounded}
                hasShimmer={hasShimmer}
              />
              <SkeletonBar
                width="90%"
                height="14px"
                color={color}
                rounded={rounded}
                hasShimmer={hasShimmer}
              />
              <SkeletonBar
                width="40%"
                height="12px"
                color={color}
                rounded={rounded}
                hasShimmer={hasShimmer}
              />
            </div>
          </div>
        );
      case "minimal":
        return (
          <SkeletonBar
            width={`${75 + Math.random() * 20}%`}
            height="16px"
            color={color}
            rounded={rounded}
            hasShimmer={hasShimmer}
          />
        );
      default:
        return (
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "12px",
              width: "100%",
            }}
          >
            <SkeletonBar
              width="32px"
              height="32px"
              color={color}
              rounded={true}
              style={{ borderRadius: "50%", flexShrink: 0 }}
              hasShimmer={hasShimmer}
            />
            <SkeletonBar
              width={`${60 + Math.random() * 25}%`}
              height="16px"
              color={color}
              rounded={rounded}
              hasShimmer={hasShimmer}
            />
          </div>
        );
    }
  };

  return (
    <div
      className={className}
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        gap: gap,
        ...style,
      }}
      aria-label="Loading list items"
      role="status"
    >
      {[...Array(count)].map((_, i) => (
        <div
          key={i}
          style={{
            width: "100%",
            minHeight: itemHeight === "auto" ? "auto" : itemHeight,
            backgroundColor: defaultProps.highlightColor,
            borderRadius: rounded ? "12px" : "0",
            padding: variant === "minimal" ? "12px 16px" : "16px",
            boxSizing: "border-box",
            boxShadow:
              "0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06)",
          }}
        >
          {getItemStructure(i)}
        </div>
      ))}
    </div>
  );
};

// Enhanced Table with better responsive design
const TableSkeleton = ({
  rows = 5,
  columns = 4,
  hasHeader = true,
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  rounded = defaultProps.rounded,
  hasShimmer = true,
}) => {
  const renderRow = (isHeader = false, rowIndex = 0) => (
    <div
      key={`${isHeader ? "header" : "row"}-${rowIndex}`}
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: "16px",
        padding: "16px",
        backgroundColor: isHeader
          ? defaultProps.color
          : defaultProps.highlightColor,
        borderRadius: rounded ? "8px" : "0",
        marginBottom: "8px",
        boxShadow: "0 1px 3px rgba(0, 0, 0, 0.1)",
      }}
    >
      {[...Array(columns)].map((_, colIndex) => (
        <SkeletonBar
          key={colIndex}
          width={isHeader ? "90%" : `${60 + Math.random() * 30}%`}
          height={isHeader ? "18px" : "16px"}
          color={isHeader ? defaultProps.highlightColor : color}
          rounded={rounded}
          hasShimmer={hasShimmer}
          animationDelay={`${(rowIndex * columns + colIndex) * 0.05}s`}
        />
      ))}
    </div>
  );

  return (
    <div
      className={className}
      style={{
        width: "100%",
        borderRadius: rounded ? "12px" : "0",
        overflow: "hidden",
        backgroundColor: "white",
        boxShadow:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        ...style,
      }}
      aria-label="Loading table data"
      role="table"
    >
      {hasHeader && renderRow(true)}
      {[...Array(rows)].map((_, i) => renderRow(false, i))}
    </div>
  );
};

// Enhanced Button Skeleton
const ButtonSkeleton = ({
  size = "md", // sm, md, lg
  variant = "primary", // primary, secondary, ghost
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  rounded = defaultProps.rounded,
  hasShimmer = true,
}) => {
  const getSizeProps = () => {
    switch (size) {
      case "sm":
        return { width: "80px", height: "32px", fontSize: "14px" };
      case "lg":
        return { width: "160px", height: "48px", fontSize: "18px" };
      default:
        return { width: "120px", height: "40px", fontSize: "16px" };
    }
  };

  const sizeProps = getSizeProps();

  return (
    <SkeletonBar
      width={sizeProps.width}
      height={sizeProps.height}
      color={color}
      rounded={rounded}
      className={className}
      style={{
        borderRadius: rounded ? "8px" : "0",
        boxShadow:
          variant === "primary" ? "0 2px 4px rgba(0, 0, 0, 0.1)" : "none",
        border: variant === "secondary" ? `1px solid ${color}` : "none",
        ...style,
      }}
      hasShimmer={hasShimmer}
      animationType={variant === "ghost" ? "pulse" : "shimmer"}
      aria-label="Loading button"
      role="button"
    />
  );
};

// Enhanced Full-page Skeleton with modern layout
const FullPageSkeleton = ({
  layout = "default", // default, dashboard, article, profile
  color = defaultProps.color,
  className = defaultProps.className,
  style = defaultProps.style,
  rounded = defaultProps.rounded,
  hasShimmer = true,
}) => {
  const getLayoutStructure = () => {
    switch (layout) {
      case "dashboard":
        return (
          <>
            {/* Header */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                marginBottom: "2rem",
              }}
            >
              <SkeletonBar
                width="200px"
                height="32px"
                color={color}
                rounded={rounded}
                hasShimmer={hasShimmer}
              />
              <SkeletonBar
                width="120px"
                height="40px"
                color={color}
                rounded={rounded}
                hasShimmer={hasShimmer}
              />
            </div>

            {/* Stats Cards */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1.5rem",
                marginBottom: "2rem",
              }}
            >
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  style={{
                    backgroundColor: defaultProps.highlightColor,
                    padding: "1.5rem",
                    borderRadius: "12px",
                  }}
                >
                  <SkeletonBar
                    width="60%"
                    height="16px"
                    color={color}
                    rounded={rounded}
                    hasShimmer={hasShimmer}
                    style={{ marginBottom: "8px" }}
                  />
                  <SkeletonBar
                    width="80%"
                    height="24px"
                    color={color}
                    rounded={rounded}
                    hasShimmer={hasShimmer}
                  />
                </div>
              ))}
            </div>

            {/* Main Content */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "2fr 1fr",
                gap: "2rem",
              }}
            >
              <ImageSkeleton
                width="100%"
                height="300px"
                color={color}
                rounded={rounded}
                hasShimmer={hasShimmer}
              />
              <ListSkeleton
                count={5}
                variant="minimal"
                color={color}
                rounded={rounded}
                hasShimmer={hasShimmer}
              />
            </div>
          </>
        );

      case "article":
        return (
          <div style={{ maxWidth: "800px", margin: "0 auto" }}>
            <SkeletonBar
              width="90%"
              height="40px"
              color={color}
              rounded={rounded}
              hasShimmer={hasShimmer}
              style={{ marginBottom: "1rem" }}
            />
            <SkeletonBar
              width="200px"
              height="16px"
              color={color}
              rounded={rounded}
              hasShimmer={hasShimmer}
              style={{ marginBottom: "2rem" }}
            />
            <ImageSkeleton
              width="100%"
              height="300px"
              color={color}
              rounded={rounded}
              hasShimmer={hasShimmer}
              style={{ marginBottom: "2rem" }}
            />
            <TextSkeleton
              lines={8}
              variant="paragraph"
              color={color}
              rounded={rounded}
              hasShimmer={hasShimmer}
            />
          </div>
        );

      default:
        return (
          <>
            <SkeletonBar
              width="90%"
              height="40px"
              color={color}
              rounded={rounded}
              hasShimmer={hasShimmer}
              style={{ marginBottom: "2rem" }}
            />
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 3fr",
                gap: "2rem",
              }}
            >
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1rem",
                }}
              >
                <SkeletonBar
                  width="100%"
                  height="20px"
                  color={color}
                  rounded={rounded}
                  hasShimmer={hasShimmer}
                />
                <SkeletonBar
                  width="80%"
                  height="20px"
                  color={color}
                  rounded={rounded}
                  hasShimmer={hasShimmer}
                />
                <SkeletonBar
                  width="90%"
                  height="20px"
                  color={color}
                  rounded={rounded}
                  hasShimmer={hasShimmer}
                />
              </div>
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: "1.5rem",
                }}
              >
                <SkeletonBar
                  width="100%"
                  height="30px"
                  color={color}
                  rounded={rounded}
                  hasShimmer={hasShimmer}
                />
                <TextSkeleton
                  lines={4}
                  color={color}
                  rounded={rounded}
                  hasShimmer={hasShimmer}
                />
                <ImageSkeleton
                  width="100%"
                  height="200px"
                  color={color}
                  rounded={rounded}
                  hasShimmer={hasShimmer}
                />
              </div>
            </div>
          </>
        );
    }
  };

  return (
    <div
      className={className}
      style={{
        width: "100%",
        minHeight: "500px",
        backgroundColor: "white",
        borderRadius: rounded ? "16px" : "0",
        padding: "2rem",
        boxSizing: "border-box",
        boxShadow:
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        ...style,
      }}
      aria-label="Loading full page content"
      role="status"
    >
      {getLayoutStructure()}
    </div>
  );
};

// Export all enhanced skeleton components
export {
  TextSkeleton,
  ImageSkeleton,
  AvatarTextCardSkeleton,
  GridCardSkeleton,
  ListSkeleton,
  TableSkeleton,
  ButtonSkeleton,
  FullPageSkeleton,
};
