# @dothp/reloaders

A comprehensive collection of visually appealing and highly customizable React loader components designed to enhance the user experience during asynchronous operations. From classic spinners and progress bars to unique animated shapes and text effects, `@dothp/reloaders` offers a diverse range of loading indicators to fit any application's aesthetic.

## Table of Contents

- [Features](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#features)
- [Installation](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#installation)
- [Quick Start](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#quick-start)
- [Component Categories Overview](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#component-categories-overview)
- [Component Documentation](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#component-documentation)
  - [Bar Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#bar-loaders)
    - [BasicProgressBar](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#basicprogressbar)
    - [StripedLoaderBar](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#stripedloaderbar)
    - [IndeterminateProgressBar](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#indeterminateprogressbar)
    - [DualBarLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dualbarloader)
    - [GrowingBarLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#growingbarloader)
    - [WaveformBar](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#waveformbar)
    - [MorphingBarLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#morphingbarloader)
    - [ParticleTrailLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#particletrailloader)
  - [Dot Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dot-loaders)
    - [ThreeBouncingDots](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#threebouncingdots)
    - [DotsFading](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dotsfading)
    - [DotWave](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dotwave)
    - [DotCircleLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dotcircleloader)
    - [PulseDots](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#pulsedots)
    - [DotDrop](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dotdrop)
    - [TypingDots](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#typingdots)
    - [SequentialDotReveal](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#sequentialdotreveal)
    - [DNAHelixDots](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dnahelixdots)
    - [OrbitDots](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#orbitdots)
  - [Fun Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#fun-loaders)
    - [HeartBeatAnimation](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#heartbeatanimation)
    - [CoffeeCupSteam](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#coffeecupsteam)
    - [HourglassFlip](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#hourglassflip)
    - [LoadingCat](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#loadingcat)
    - [LoaderRobot](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#loaderrobot)
    - [InfinitySpinner](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#infinityspinner)
    - [YinYangLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#yinyangloader)
  - [Motion Path Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#motion-path-loaders)
    - [BallPathLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#ballpathloader)
    - [SnakeLineLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#snakelineloader)
    - [CircleStrokeLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#circlestrokeloader)
    - [ZigzagPathLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#zigzagpathloader)
    - [LissajousCurveLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#lissajouscurveloader)
    - [SVGStrokeDashAnimation](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#svgstrokedashanimation)
  - [Skeleton Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#skeleton-loaders)
    - [TextSkeleton](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#textskeleton)
    - [ImageSkeleton](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#imageskeleton)
    - [AvatarTextCardSkeleton](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#avatartextcardskeleton)
    - [GridCardSkeleton](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#gridcardskeleton)
    - [ListSkeleton](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#listskeleton)
    - [TableSkeleton](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#tableskeleton)
    - [ButtonSkeleton](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#buttonskeleton)
    - [FullPageSkeleton](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#fullpageskeleton)
  - [Shape Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#shape-loaders)
    - [RainbowSpinner](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#rainbowspinner)
    - [ColorFillDots](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#colorfilldots)
    - [ShapeMorphing](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#shapemorphing)
    - [GeometricShapes](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#geometricshapes)
    - [HexagonLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#hexagonloader)
    - [TriangleBounce](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#trianglebounce)
    - [PolygonRotation](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#polygonrotation)
    - [ColorShiftingBackground](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#colorshiftingbackground)
  - [Spinner Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#spinner-loaders)
    - [SimpleSpinner](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#simplespinner)
    - [DualRingSpinner](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dualringspinner)
    - [PulseSpinner](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#pulsespinner)
    - [RippleSpinner](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#ripplespinner)
    - [OrbitSpinner](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#orbitspinner)
    - [SolarSpinner](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#solarspinner)
    - [DashedRingLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dashedringloader)
    - [PieLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#pieloader)
    - [SVGRotateLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#svgrotateloader)
    - [DNAHelixLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dnahelixloader)
  - [Text Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#text-loaders)
    - [TypingDotsLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#typingdotsloader)
    - [TypewriterLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#typewriterloader)
    - [TextFadeLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#textfadeloader)
    - [TextPulseLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#textpulseloader)
    - [TextWaveLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#textwaveloader)
    - [GlitchTextLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#glitchtextloader)
    - [ScrambledLettersLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#scrambledlettersloader)
    - [ProgressiveWordLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#progressivewordloader)
    - [ColorCycleTextLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#colorcycletextloader)
    - [BlinkingTextLoader](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#blinkingtextloader)
- [Common Props Reference](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#common-props-reference)
- [Browser Support](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#browser-support)
- [TypeScript Support](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#typescript-support)
- [Performance Tips](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#performance-tips)
- [Contributing](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#contributing)
- [License](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#license)

## Features

- 🎨 **Highly Customizable** - Extensive props for colors, sizes, animations, and effects
- 🚀 **Performance Optimized** - Lightweight components with smooth animations
- 📱 **Responsive** - Works seamlessly across all device sizes
- 🎭 **Diverse Collection** - 70+ unique loader components across 8 categories
- 🔧 **TypeScript Ready** - Full TypeScript support with type definitions
- 🎪 **Fun & Professional** - From playful animations to corporate-ready designs

## Installation

Install the package using npm or yarn:

```bash
npm install @dothp/reloaders react react-dom
```

```bash
yarn add @dothp/reloaders react react-dom
```

> **Note:** This library requires `react` and `react-dom` as peer dependencies. Ensure they are installed in your project.

## Quick Start

```jsx
import React from 'react';
import { SimpleSpinner } from '@dothp/reloaders/Spinner';

const MyLoadingComponent = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '200px' 
    }}>
      <SimpleSpinner 
        size="80px" 
        color="#6366f1" 
        speed="fast" 
        glowEffect={true} 
      />
    </div>
  );
};

export default MyLoadingComponent;
```

## Component Categories Overview

| Category | Count | Description |
|----------|-------|-------------|
| 🔶 [Bar Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#bar-loaders) | 8 | Linear progress indicators and animated bars |
| 🔵 [Dot Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#dot-loaders) | 10 | Various animations using dots and circles |
| 🎪 [Fun Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#fun-loaders) | 7 | Playful and unique animated designs |
| 🛤️ [Motion Path Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#motion-path-loaders) | 6 | Elements following predefined paths |
| 💀 [Skeleton Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#skeleton-loaders) | 8 | Placeholder loading states for UI elements |
| 🔷 [Shape Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#shape-loaders) | 8 | Geometric shapes and morphing animations |
| 🌀 [Spinner Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#spinner-loaders) | 10 | Classic spinning indicators |
| 📝 [Text Loaders](../../c:/Users/Harsh Prajapati/Downloads/dothp-reloaders-readme.md#text-loaders) | 10 | Animated text-based indicators |

## Component Documentation

## Bar Loaders

Linear progress indicators and animated bars perfect for showing loading progress or continuous operations.

### BasicProgressBar

A fundamental progress bar with options for gradient and glow effects.

**Import:**
```jsx
import { BasicProgressBar } from '@dothp/reloaders/BarLoaders';
```

**Example:**
```jsx
<BasicProgressBar 
  width="80%" 
  height="10px" 
  color="#6366f1" 
  rounded={true} 
  gradient={true} 
  glow={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'100%'` | The width of the progress bar |
| `height` | `string` | `'8px'` | The height of the progress bar |
| `color` | `string` | `'#6366f1'` | The primary color of the progress bar |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners if true |
| `gradient` | `boolean` | `true` | Applies a gradient fill if true |
| `glow` | `boolean` | `true` | Adds a subtle glow effect if true |

### StripedLoaderBar

A linear loader featuring a dynamic striped pattern that creates a moving effect.

**Import:**
```jsx
import { StripedLoaderBar } from '@dothp/reloaders/BarLoaders';
```

**Example:**
```jsx
<StripedLoaderBar 
  width="70%" 
  height="12px" 
  color="#6366f1" 
  rounded={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'100%'` | The width of the loader bar |
| `height` | `string` | `'8px'` | The height of the loader bar |
| `color` | `string` | `'#6366f1'` | The primary color of the stripes |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners if true |

### IndeterminateProgressBar

A progress bar with a continuous, indeterminate animation that slides back and forth.

**Import:**
```jsx
import { IndeterminateProgressBar } from '@dothp/reloaders/BarLoaders';
```

**Example:**
```jsx
<IndeterminateProgressBar 
  width="90%" 
  height="8px" 
  color="#6366f1" 
  rounded={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'100%'` | The width of the progress bar |
| `height` | `string` | `'8px'` | The height of the progress bar |
| `color` | `string` | `'#6366f1'` | The color of the moving indicator |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners if true |

### DualBarLoader

A loader featuring two synchronized bars moving in opposite directions for dynamic visual effect.

**Import:**
```jsx
import { DualBarLoader } from '@dothp/reloaders/BarLoaders';
```

**Example:**
```jsx
<DualBarLoader 
  width="60%" 
  height="10px" 
  color="#6366f1" 
  rounded={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'100%'` | The width of the loader |
| `height` | `string` | `'8px'` | The height of each individual bar |
| `color` | `string` | `'#6366f1'` | The color of the moving elements |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners to the bars if true |

### GrowingBarLoader

A set of bars that grow and shrink in an elastic, sequential motion creating a wave-like effect.

**Import:**
```jsx
import { GrowingBarLoader } from '@dothp/reloaders/BarLoaders';
```

**Example:**
```jsx
<GrowingBarLoader 
  height="50px" 
  barWidth="8px" 
  color="#6366f1" 
  barCount={7} 
  gap="4px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `height` | `string` | `'64px'` | The overall height of the loader container |
| `barWidth` | `string` | `'6px'` | The width of each individual bar |
| `color` | `string` | `'#6366f1'` | The color of the bars |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `barCount` | `number` | `5` | The number of bars in the loader |
| `gap` | `string` | `'3px'` | The space between bars |
| `rounded` | `boolean` | `true` | Applies rounded corners to the bars if true |

### WaveformBar

A loader resembling an audio waveform, with bars animating based on a realistic audio pattern.

**Import:**
```jsx
import { WaveformBar } from '@dothp/reloaders/BarLoaders';
```

**Example:**
```jsx
<WaveformBar 
  height="40px" 
  barWidth="5px" 
  color="#6366f1" 
  barCount={10} 
  gap="3px" 
  rounded={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `height` | `string` | `'64px'` | The overall height of the loader container |
| `barWidth` | `string` | `'4px'` | The width of each individual bar |
| `color` | `string` | `'#6366f1'` | The color of the bars |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `barCount` | `number` | `8` | The number of bars in the loader |
| `gap` | `string` | `'2px'` | The space between bars |
| `rounded` | `boolean` | `true` | Applies rounded corners to the bars if true |

### MorphingBarLoader

A single bar that continuously morphs its shape and position, creating fluid animations.

**Import:**
```jsx
import { MorphingBarLoader } from '@dothp/reloaders/BarLoaders';
```

**Example:**
```jsx
<MorphingBarLoader 
  width="150px" 
  height="10px" 
  color="#6366f1" 
  rounded={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'100%'` | The width of the container |
| `height` | `string` | `'8px'` | The height of the bar |
| `color` | `string` | `'#6366f1'` | The color of the morphing bar |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners to the container if true |

### ParticleTrailLoader

A bar that emits a trail of particles as it moves, creating a dynamic particle effect.

**Import:**
```jsx
import { ParticleTrailLoader } from '@dothp/reloaders/BarLoaders';
```

**Example:**
```jsx
<ParticleTrailLoader 
  width="200px" 
  height="15px" 
  color="#6366f1" 
  particleCount={5} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'100%'` | The width of the container |
| `height` | `string` | `'8px'` | The height of the trail area |
| `color` | `string` | `'#6366f1'` | The color of the particles |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners to the container if true |
| `particleCount` | `number` | `3` | The number of particles in the trail |

## Dot Loaders

Various animations using dots and circles, perfect for subtle loading indicators.

### ThreeBouncingDots

Three dots that bounce smoothly in a sequence, creating a classic loading animation.

**Import:**
```jsx
import { ThreeBouncingDots } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<ThreeBouncingDots 
  size="20px" 
  color="#3498db" 
  gap="8px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'16px'` | The size (width and height) of each dot |
| `color` | `string` | `'#3498db'` | The color of the dots |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `gap` | `string` | `'6px'` | The space between dots |

### DotsFading

Multiple dots that fade in and out sequentially, creating a wave-like fading effect.

**Import:**
```jsx
import { DotsFading } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<DotsFading 
  size="18px" 
  color="#3498db" 
  dotCount={6} 
  gap="5px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'14px'` | The size of each dot |
| `color` | `string` | `'#3498db'` | The color of the dots |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotCount` | `number` | `5` | The number of dots |
| `gap` | `string` | `'4px'` | The space between dots |

### DotWave

Dots that move in a wave-like pattern, creating a flowing vertical motion.

**Import:**
```jsx
import { DotWave } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<DotWave 
  size="22px" 
  color="#3498db" 
  dotCount={5} 
  gap="6px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'16px'` | The size of each dot |
| `color` | `string` | `'#3498db'` | The color of the dots |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotCount` | `number` | `5` | The number of dots |
| `gap` | `string` | `'4px'` | The space between dots |

### DotCircleLoader

Dots arranged in a circle, animating with a fading and scaling effect around the circumference.

**Import:**
```jsx
import { DotCircleLoader } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<DotCircleLoader 
  size="70px" 
  color="#3498db" 
  dotCount={10} 
  dotSize="10px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The overall size of the circular container |
| `color` | `string` | `'#3498db'` | The color of the dots |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotCount` | `number` | `8` | The number of dots in the circle |
| `dotSize` | `string` | `'12px'` | The size of each individual dot |

### PulseDots

Multiple dots that pulse in and out, creating a breathing effect with synchronized scaling.

**Import:**
```jsx
import { PulseDots } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<PulseDots 
  size="20px" 
  color="#3498db" 
  dotCount={4} 
  gap="10px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'16px'` | The size of each dot |
| `color` | `string` | `'#3498db'` | The color of the dots |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotCount` | `number` | `3` | The number of dots |
| `gap` | `string` | `'8px'` | The space between dots |

### DotDrop

Dots that appear to drop and disappear, simulating a falling or dripping effect.

**Import:**
```jsx
import { DotDrop } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<DotDrop 
  size="15px" 
  color="#3498db" 
  dotCount={5} 
  gap="10px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'12px'` | The size of each dot |
| `color` | `string` | `'#3498db'` | The color of the dots |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotCount` | `number` | `4` | The number of dots |
| `gap` | `string` | `'8px'` | The space between dots |

### TypingDots

Mimics the "typing" indicator seen in chat applications with three bouncing dots.

**Import:**
```jsx
import { TypingDots } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<TypingDots 
  size="10px" 
  color="#3498db" 
  dotCount={3} 
  gap="3px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'10px'` | The size of each dot |
| `color` | `string` | `'#3498db'` | The color of the dots |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotCount` | `number` | `3` | The number of dots |
| `gap` | `string` | `'3px'` | The space between dots |

### SequentialDotReveal

Dots that sequentially reveal themselves with a scaling effect, appearing one after another.

**Import:**
```jsx
import { SequentialDotReveal } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<SequentialDotReveal 
  size="20px" 
  color="#3498db" 
  dotCount={5} 
  gap="8px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'16px'` | The size of each dot |
| `color` | `string` | `'#3498db'` | The color of the dots |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotCount` | `number` | `4` | The number of dots |
| `gap` | `string` | `'6px'` | The space between dots |

### DNAHelixDots

Dots arranged to simulate a rotating DNA helix structure with intertwining motion.

**Import:**
```jsx
import { DNAHelixDots } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<DNAHelixDots 
  size="10px" 
  color="#3498db" 
  dotCount={8} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'8px'` | The size of each dot |
| `color` | `string` | `'#3498db'` | The primary color of the dots |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotCount` | `number` | `6` | The number of dots in the helix |

### OrbitDots

Dots orbiting a central point, creating a planetary system effect with multiple orbital paths.

**Import:**
```jsx
import { OrbitDots } from '@dothp/reloaders/DotLoaders';
```

**Example:**
```jsx
<OrbitDots 
  size="80px" 
  color="#3498db" 
  dotSize="10px" 
  orbitCount={4} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The overall size of the orbit container |
| `color` | `string` | `'#3498db'` | The color of the central dot and orbits |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotSize` | `string` | `'8px'` | The size of the orbiting dots |
| `orbitCount` | `number` | `3` | The number of orbiting paths |

## Fun Loaders

Playful and unique animated designs that add character and personality to loading states.

### HeartBeatAnimation

A heart icon that pulses and beats with a realistic heartbeat rhythm.

**Import:**
```jsx
import { HeartBeatAnimation } from '@dothp/reloaders/FunLoaders';
```

**Example:**
```jsx
<HeartBeatAnimation 
  size="60px" 
  color="#e74c3c" 
  duration="1s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'50px'` | The size of the heart icon |
| `color` | `string` | `'#e74c3c'` | The color of the heart |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'1.2s'` | The duration of one heartbeat cycle |

### CoffeeCupSteam

An animated coffee cup with rising steam particles, perfect for loading screens in coffee-related apps.

**Import:**
```jsx
import { CoffeeCupSteam } from '@dothp/reloaders/FunLoaders';
```

**Example:**
```jsx
<CoffeeCupSteam 
  size="100px" 
  color="#6d4c41" 
  steamColor="#e0e0e0" 
  duration="2.5s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'80px'` | The overall size of the coffee cup |
| `color` | `string` | `'#6d4c41'` | The color of the coffee cup |
| `steamColor` | `string` | `'#e0e0e0'` | The color of the steam particles |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'2s'` | The duration of the steam animation cycle |

### HourglassFlip

An hourglass that flips and shows sand falling from top to bottom chamber.

**Import:**
```jsx
import { HourglassFlip } from '@dothp/reloaders/FunLoaders';
```

**Example:**
```jsx
<HourglassFlip 
  size="70px" 
  color="#8e44ad" 
  sandColor="#f39c12" 
  duration="3s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The overall size of the hourglass |
| `color` | `string` | `'#8e44ad'` | The color of the hourglass frame |
| `sandColor` | `string` | `'#f39c12'` | The color of the sand |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'3s'` | The duration of one flip cycle |

### LoadingCat

An animated cat walking and wagging its tail, adding whimsy to loading states.

**Import:**
```jsx
import { LoadingCat } from '@dothp/reloaders/FunLoaders';
```

**Example:**
```jsx
<LoadingCat 
  size="90px" 
  color="#34495e" 
  duration="2s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'80px'` | The overall size of the cat |
| `color` | `string` | `'#34495e'` | The color of the cat's fur |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'2s'` | The duration of one walking cycle |

### LoaderRobot

An animated robot with moving arms and blinking eyes, perfect for tech-related applications.

**Import:**
```jsx
import { LoaderRobot } from '@dothp/reloaders/FunLoaders';
```

**Example:**
```jsx
<LoaderRobot 
  size="70px" 
  color="#34495e" 
  duration="1.8s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The overall size of the robot |
| `color` | `string` | `'#34495e'` | The primary color of the robot's body |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'1.8s'` | The duration of one animation cycle |

### InfinitySpinner

An infinity symbol that animates with a continuous flow, creating an elegant loop effect.

**Import:**
```jsx
import { InfinitySpinner } from '@dothp/reloaders/FunLoaders';
```

**Example:**
```jsx
<InfinitySpinner 
  size={80} 
  color="#9b59b6" 
  duration="2.5s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `64` | The overall size of the spinner (width) |
| `color` | `string` | `'#9b59b6'` | The color of the infinity symbol |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'2s'` | The duration of one animation cycle |

### YinYangLoader

A classic Yin-Yang symbol with a smooth spinning animation representing balance and harmony.

**Import:**
```jsx
import { YinYangLoader } from '@dothp/reloaders/FunLoaders';
```

**Example:**
```jsx
<YinYangLoader 
  size="70px" 
  color1="#2c3e50" 
  color2="#ecf0f1" 
  duration="2s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The overall size of the Yin-Yang symbol |
| `color1` | `string` | `'#2c3e50'` | The first primary color |
| `color2` | `string` | `'#ecf0f1'` | The second primary color |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'2s'` | The duration of one spin cycle |

## Motion Path Loaders

Elements that follow predefined or dynamic paths, creating sophisticated movement patterns.

### BallPathLoader

A ball that follows a rectangular path with customizable direction and visual effects.

**Import:**
```jsx
import { BallPathLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example:**
```jsx
<BallPathLoader 
  size={80} 
  color="#3498db" 
  ballSize={15} 
  pathVisible={true} 
  direction="clockwise" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `64` | The overall size of the square path container |
| `color` | `string` | `'#3498db'` | The color of the ball |
| `backgroundColor` | `string` | `'transparent'` | Background color of the container |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `number` | `1.5` | The duration of one full path cycle in seconds |
| `easing` | `string` | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `ballSize` | `number` | `10` | The size of the orbiting ball |
| `pathVisible` | `boolean` | `true` | If true, the path outline is visible |
| `pathColor` | `string` | `'rgba(0, 0, 0, 0.1)'` | Color of the path outline |
| `shadow` | `boolean` | `false` | Adds a subtle box shadow to the ball |
| `glow` | `boolean` | `false` | Adds a glow effect to the ball |
| `opacity` | `number` | `1` | Opacity of the ball |
| `direction` | `string` | `'clockwise'` | Direction of movement ('clockwise' or 'counterclockwise') |

### SnakeLineLoader

A line that animates around a circular, square, or polygonal path like a snake.

**Import:**
```jsx
import { SnakeLineLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example:**
```jsx
<SnakeLineLoader 
  size={70} 
  color="#3498db" 
  strokeWidth={5} 
  shape="square" 
  segments={4} 
  glow={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `64` | The overall size of the loader container |
| `color` | `string` | `'#3498db'` | The color of the snake line |
| `backgroundColor` | `string` | `'transparent'` | Background color of the container |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `number` | `1.5` | The duration of one full animation cycle in seconds |
| `easing` | `string` | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `strokeWidth` | `number` | `4` | The thickness of the line |
| `opacity` | `number` | `1` | Opacity of the line |
| `glow` | `boolean` | `false` | Adds a glow effect to the line |
| `segments` | `number` | `3` | The number of visible segments in the line |
| `shape` | `string` | `'circle'` | The shape of the path ('circle', 'square', 'polygon') |

### CircleStrokeLoader

A circular loader with a stroke that fills and empties, optionally showing progress.

**Import:**
```jsx
import { CircleStrokeLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example:**
```jsx
<CircleStrokeLoader 
  size={90} 
  color="#3498db" 
  strokeWidth={8} 
  gradient={true} 
  glow={true} 
  progress={75} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `64` | The overall size of the circular loader |
| `color` | `string` | `'#3498db'` | The color of the stroke |
| `backgroundColor` | `string` | `'transparent'` | Background color of the container |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `number` | `1.5` | The duration of one full animation cycle in seconds |
| `easing` | `string` | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `strokeWidth` | `number` | `4` | The thickness of the circular stroke |
| `opacity` | `number` | `1` | Opacity of the stroke |
| `glow` | `boolean` | `false` | Adds a glow effect to the stroke |
| `gradient` | `boolean` | `false` | Applies a gradient to the stroke if true |
| `trackColor` | `string` | `'rgba(0, 0, 0, 0.08)'` | Color of the background track |
| `lineCap` | `string` | `'round'` | Style of the stroke ends ('round', 'butt', 'square') |
| `progress` | `number` | `null` | If a number (0-100), it shows static progress; otherwise, it animates |

### ZigzagPathLoader

A dot that moves along a zigzag, diamond, or infinity-shaped path.

**Import:**
```jsx
import { ZigzagPathLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example:**
```jsx
<ZigzagPathLoader 
  size={80} 
  color="#3498db" 
  dotSize={15} 
  pattern="diamond" 
  pathVisible={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `64` | The overall size of the container |
| `color` | `string` | `'#3498db'` | The color of the dot |
| `backgroundColor` | `string` | `'transparent'` | Background color of the container |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `number` | `1.5` | The duration of one full path cycle in seconds |
| `easing` | `string` | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `dotSize` | `number` | `12` | The size of the moving dot |
| `pathVisible` | `boolean` | `true` | If true, the path outline is visible |
| `pathColor` | `string` | `'rgba(0, 0, 0, 0.1)'` | Color of the path outline |
| `shadow` | `boolean` | `false` | Adds a subtle box shadow to the dot |
| `glow` | `boolean` | `false` | Adds a glow effect to the dot |
| `opacity` | `number` | `1` | Opacity of the dot |
| `pattern` | `string` | `'zigzag'` | The shape of the path ('zigzag', 'diamond', 'infinity') |

### LissajousCurveLoader

Multiple dots animating along a Lissajous curve, creating complex mathematical patterns.

**Import:**
```jsx
import { LissajousCurveLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example:**
```jsx
<LissajousCurveLoader 
  size={100} 
  color="#3498db" 
  dotSize={10} 
  dotCount={5} 
  trail={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `64` | The overall size of the container |
| `color` | `string` | `'#3498db'` | The color of the dots |
| `backgroundColor` | `string` | `'transparent'` | Background color of the container |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `number` | `1.5` | The duration of one full curve cycle in seconds |
| `easing` | `string` | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `dotSize` | `number` | `8` | The size of each dot |
| `dotCount` | `number` | `3` | The number of dots animating |
| `shadow` | `boolean` | `false` | Adds a subtle box shadow to the dots |
| `glow` | `boolean` | `false` | Adds a glow effect to the dots |
| `opacity` | `number` | `1` | Opacity of the dots |
| `trail` | `boolean` | `false` | If true, dots will have a fading trail effect |

### SVGStrokeDashAnimation

An SVG path that animates its stroke, creating a drawing effect with various path types.

**Import:**
```jsx
import { SVGStrokeDashAnimation } from '@dothp/reloaders/MotionPathLoaders';
```

**Example:**
```jsx
<SVGStrokeDashAnimation 
  size={100} 
  color="#3498db" 
  strokeWidth={6} 
  pathType="heart" 
  glow={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number` | `64` | The overall size of the SVG container |
| `color` | `string` | `'#3498db'` | The color of the SVG stroke |
| `backgroundColor` | `string` | `'transparent'` | Background color of the container |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `number` | `1.5` | The duration of one full animation cycle in seconds |
| `easing` | `string` | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `strokeWidth` | `number` | `4` | The thickness of the SVG stroke |
| `opacity` | `number` | `1` | Opacity of the stroke |
| `glow` | `boolean` | `false` | Adds a glow effect to the stroke |
| `pathType` | `string` | `'wave'` | The type of SVG path ('wave', 'spiral', 'heart', 'star') |

## Skeleton Loaders

Placeholder loading states for various UI elements, providing visual structure while content loads.

### TextSkeleton

A skeleton loader for text content, simulating paragraphs, headings, or captions.

**Import:**
```jsx
import { TextSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example:**
```jsx
<TextSkeleton 
  lines={4} 
  variant="paragraph" 
  color="#f1f5f9" 
  hasShimmer={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `lines` | `number` | `3` | The number of text lines to display |
| `lineHeight` | `string` | `'1.2em'` | The height of each text line |
| `gap` | `string` | `'0.5em'` | The vertical space between lines |
| `color` | `string` | `'#f1f5f9'` | The background color of the skeleton lines |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners to the lines |
| `hasShimmer` | `boolean` | `true` | If true, a shimmering effect is applied |
| `variant` | `string` | `'paragraph'` | The style of text ('paragraph', 'heading', 'caption') |

### ImageSkeleton

A skeleton loader for image placeholders with aspect ratio support.

**Import:**
```jsx
import { ImageSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example:**
```jsx
<ImageSkeleton 
  width="300px" 
  height="200px" 
  color="#f1f5f9" 
  hasShimmer={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | `string` | `'100%'` | The width of the image placeholder |
| `height` | `string` | `'200px'` | The height of the image placeholder |
| `aspectRatio` | `string` | `undefined` | Sets the aspect ratio (e.g., '16/9'). Overrides height if provided |
| `color` | `string` | `'#f1f5f9'` | The background color of the skeleton |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners |
| `hasShimmer` | `boolean` | `true` | If true, a shimmering effect is applied |

### AvatarTextCardSkeleton

A skeleton loader for a user card, typically with an avatar and text lines.

**Import:**
```jsx
import { AvatarTextCardSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example:**
```jsx
<AvatarTextCardSkeleton 
  size="lg" 
  orientation="vertical" 
  color="#f1f5f9" 
  hasShimmer={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'md'` | Predefined size for the card ('sm', 'md', 'lg') |
| `orientation` | `string` | `'horizontal'` | Layout of avatar and text ('horizontal', 'vertical') |
| `color` | `string` | `'#f1f5f9'` | The background color of the skeleton elements |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners to the card and its elements |
| `hasShimmer` | `boolean` | `true` | If true, a shimmering effect is applied |

### GridCardSkeleton

A skeleton loader for a grid of cards with customizable layout.

**Import:**
```jsx
import { GridCardSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example:**
```jsx
<GridCardSkeleton 
  count={6} 
  columns={3} 
  cardHeight="250px" 
  color="#f1f5f9" 
  hasShimmer={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `6` | The number of skeleton cards in the grid |
| `columns` | `string` | `'auto'` | Defines grid columns ('auto', '1', '2', '3', etc.) |
| `minCardWidth` | `string` | `'280px'` | Minimum width for auto-fit columns |
| `cardHeight` | `string` | `'200px'` | The height of each skeleton card |
| `gap` | `string` | `'1.5rem'` | The space between grid items |
| `color` | `string` | `'#f1f5f9'` | The background color of the skeleton elements within cards |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners to the cards |
| `hasShimmer` | `boolean` | `true` | If true, a shimmering effect is applied |

### ListSkeleton

A skeleton loader for a list of items with various structure options.

**Import:**
```jsx
import { ListSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example:**
```jsx
<ListSkeleton 
  count={5} 
  variant="detailed" 
  color="#f1f5f9" 
  hasShimmer={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | `number` | `5` | The number of skeleton list items |
| `itemHeight` | `string` | `'auto'` | The height of each list item ('auto' for flexible height) |
| `gap` | `string` | `'1rem'` | The vertical space between list items |
| `color` | `string` | `'#f1f5f9'` | The background color of the skeleton elements within items |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners to the list items |
| `hasShimmer` | `boolean` | `true` | If true, a shimmering effect is applied |
| `variant` | `string` | `'default'` | The structure of list items ('default', 'detailed', 'minimal') |

### TableSkeleton

A skeleton loader for tabular data with header and row support.

**Import:**
```jsx
import { TableSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example:**
```jsx
<TableSkeleton 
  rows={4} 
  columns={5} 
  hasHeader={true} 
  color="#f1f5f9" 
  hasShimmer={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `rows` | `number` | `5` | The number of data rows |
| `columns` | `number` | `4` | The number of columns |
| `hasHeader` | `boolean` | `true` | If true, includes a header row |
| `color` | `string` | `'#f1f5f9'` | The background color of the skeleton cells |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners to the table rows/cells |
| `hasShimmer` | `boolean` | `true` | If true, a shimmering effect is applied |

### ButtonSkeleton

A skeleton loader for button elements with various sizes and styles.

**Import:**
```jsx
import { ButtonSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example:**
```jsx
<ButtonSkeleton 
  size="lg" 
  variant="secondary" 
  color="#f1f5f9" 
  hasShimmer={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'md'` | Predefined size for the button ('sm', 'md', 'lg') |
| `variant` | `string` | `'primary'` | Style of the button ('primary', 'secondary', 'ghost') |
| `color` | `string` | `'#f1f5f9'` | The background color of the skeleton button |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners |
| `hasShimmer` | `boolean` | `true` | If true, a shimmering effect is applied |

### FullPageSkeleton

A comprehensive skeleton loader for an entire page layout with various templates.

**Import:**
```jsx
import { FullPageSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example:**
```jsx
<FullPageSkeleton 
  layout="dashboard" 
  color="#f1f5f9" 
  hasShimmer={true} 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `layout` | `string` | `'default'` | Predefined page layout ('default', 'dashboard', 'article', 'profile') |
| `color` | `string` | `'#f1f5f9'` | The background color of the skeleton elements |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `rounded` | `boolean` | `true` | Applies rounded corners to the layout elements |
| `hasShimmer` | `boolean` | `true` | If true, a shimmering effect is applied |

## Shape Loaders

Geometric shapes and morphing animations that create visually striking loading indicators.

### RainbowSpinner

A circular spinner with a vibrant, continuously shifting rainbow gradient border.

**Import:**
```jsx
import { RainbowSpinner } from '@dothp/reloaders/ShapeLoaders';
```

**Example:**
```jsx
<RainbowSpinner 
  size="70px" 
  duration="2s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The overall size of the spinner |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'1.5s'` | The duration of one full spin cycle |

### ColorFillDots

Dots that bounce and change color, with an optional second color for smooth transitions.

**Import:**
```jsx
import { ColorFillDots } from '@dothp/reloaders/ShapeLoaders';
```

**Example:**
```jsx
<ColorFillDots 
  size="20px" 
  color="#3498db" 
  secondColor="#ff6b9d" 
  dotCount={3} 
  gap="10px" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'15px'` | The size of each dot |
| `color` | `string` | `'#3498db'` | The primary color of the dots |
| `secondColor` | `string` | `'#ff6b9d'` | The color the dots transition to (use 'none' to disable) |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `dotCount` | `number` | `3` | The number of dots |
| `gap` | `string` | `'8px'` | The space between dots |
| `duration` | `string` | `'1.5s'` | The duration of one bounce cycle |

### ShapeMorphing

A single shape that continuously morphs between a circle, square, and rounded square.

**Import:**
```jsx
import { ShapeMorphing } from '@dothp/reloaders/ShapeLoaders';
```

**Example:**
```jsx
<ShapeMorphing 
  size="80px" 
  color="#3498db" 
  secondColor="#ff6b9d" 
  duration="2s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The size of the morphing shape |
| `color` | `string` | `'#3498db'` | The primary color of the shape |
| `secondColor` | `string` | `'#ff6b9d'` | The color the shape transitions to (use 'none' to disable) |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'1.5s'` | The duration of one morphing cycle |

### GeometricShapes

Multiple small geometric shapes orbiting a central point in synchronized motion.

**Import:**
```jsx
import { GeometricShapes } from '@dothp/reloaders/ShapeLoaders';
```

**Example:**
```jsx
<GeometricShapes 
  size="90px" 
  color="#3498db" 
  shapeCount={4} 
  duration="2s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The overall size of the container |
| `color` | `string` | `'#3498db'` | The primary color of the shapes |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'1.5s'` | The duration of one orbit cycle |
| `shapeCount` | `number` | `3` | The number of orbiting shapes |

### HexagonLoader

A hexagonal shape with a spinning and pulsing animation, creating a dynamic geometric effect.

**Import:**
```jsx
import { HexagonLoader } from '@dothp/reloaders/ShapeLoaders';
```

**Example:**
```jsx
<HexagonLoader 
  size="70px" 
  color="#3498db" 
  secondColor="#fff" 
  duration="1.8s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The overall size of the hexagon |
| `color` | `string` | `'#3498db'` | The primary color of the hexagon |
| `secondColor` | `string` | `'#fff'` | The color the hexagon pulses to (use 'none' to disable) |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'1.5s'` | The duration of one animation cycle |

### TriangleBounce

Multiple triangles that bounce with an elastic effect in sequence.

**Import:**
```jsx
import { TriangleBounce } from '@dothp/reloaders/ShapeLoaders';
```

**Example:**
```jsx
<TriangleBounce 
  size="60px" 
  color="#3498db" 
  triangleCount={4} 
  gap="12px" 
  duration="1.5s" 
/>
```

**Props:**

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `string` | `'64px'` | The size of each triangle |
| `color` | `string` | `'#3498db'` | The primary color of the triangles |
| `className` | `string` | - | Additional CSS class names |
| `style` | `object` | - | Inline CSS styles |
| `duration` | `string` | `'1.5s'` | The duration of one bounce cycle |
| `triangleCount` | `number` | `3` | The number of triangles |
| `gap` | `string` | `'10px'` | The space between triangles |

### PolygonRotation

A polygon that rotates and scales, with a dynamic number of sides for versatile geometric patterns.

**Import:**
```jsx
import { PolygonRotation } from '@dothp/reloaders/ShapeLoaders';
```

**Example:**
```jsx
<PolygonRotation 
  size="80px" 
  color="#3498db" 
  sides={5} 
  