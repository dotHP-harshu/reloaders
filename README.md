![Banner](./banner.jpg)

# @dothp/reloaders

**A lightweight collection of customizable React loading components**

## Quick Start

```bash
npm install @dothp/reloaders
# or
yarn add @dothp/reloaders
```

## Features

- 🎨 **8 categories** of loaders (bars, dots, spinners, etc.)
- ⚡ **Optimized performance** - CSS animations only
- 🛠 **Fully customizable** - control size, color, speed
- 📦 **Tree-shakable** - import only what you need
- 🎭 **Accessible** - ARIA labels included

## Basic Usage

```jsx
import { SimpleSpinner, ThreeBouncingDots } from '@dothp/reloaders';

function App() {
  return (
    <div>
      <SimpleSpinner size="60px" color="#6366f1" />
      <ThreeBouncingDots color="#3498db" />
    </div>
  );
}
```

## Component Categories

| Category           | Example Components                  | Import Path                |
|--------------------|-------------------------------------|----------------------------|
| **Bar Loaders**    | ProgressBar, WaveformBar            | `.../BarLoaders`           |
| **Dot Loaders**    | BouncingDots, OrbitDots             | `.../DotLoaders`           |
| **Spinners**       | SimpleSpinner, DNAHelixLoader       | `.../Spinner`              |
| **Text Loaders**   | TypewriterLoader, GlitchText        | `.../TextLoaders`          |
| **Shapes**         | HexagonLoader, RainbowSpinner       | `.../ShapeLoaders`         |
| **Motion Paths**   | BallPathLoader, LissajousCurve      | `.../MotionPathLoaders`    |
| **Skeletons**      | TextSkeleton, ImageSkeleton         | `.../SkeletonLoaders`      |
| **Fun Loaders**    | CoffeeCup, LoadingCat               | `.../FunLoaders`           |

## Common Props

All components support these basic props:

| Prop      | Type            | Default    | Description                     |
|-----------|-----------------|------------|---------------------------------|
| `size`    | string/number   | "64px"     | Width/height of loader          |
| `color`   | string          | "#3498db"  | Primary color                   |
| `speed`   | string          | "fast"     | Animation speed              |
| `style`   | object          | {}         | Additional CSS styles           |
| `className` | string        | ""         | Custom class names              |

## Advanced Example

```jsx
import { OrbitSpinner, MorphingBarLoader } from '@dothp/reloaders';

function DashboardLoader() {
  return (
    <div className="loading-overlay">
      <OrbitSpinner 
        size={80}
        color="#8e44ad"
        dotColor="#f1c40f"
        speed="0.8s"
        style={{ marginBottom: '2rem' }}
      />
      <MorphingBarLoader
        width="200px"
        color="#2ecc71"
        rounded={true}
        glowEffect={true}
      />
    </div>
  );
}
```
--- 

## Customization

All components support extensive customization through props:

```jsx
<LoaderComponent 
  size="64px" 
  color="#3498db"
  secondaryColor="#e74c3c"
  speed="fast" // 'slow' | 'normal' | 'fast'
  glow={true}
  rounded={true}
  className="my-loader"
  style={{ margin: '20px' }}
/>
```
---

This version:
- Focuses on key information developers need
- Uses clear, scannable formatting
- Highlights the most important features
- Provides practical examples
- Includes performance considerations
- Maintains all essential technical details
