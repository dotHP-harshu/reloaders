# @dothp/reloaders Library Documentation

Welcome to the `@dothp/reloaders` library documentation! This library provides a collection of visually appealing and highly customizable React loader components, designed to enhance the user experience during asynchronous operations. From classic spinners and progress bars to unique animated shapes and text effects, `@dothp/reloaders` offers a diverse range of loading indicators to fit any application's aesthetic.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Loader Components](#loader-components)
  - [Bar Loaders](#bar-loaders)
    - [BasicProgressBar](#basicprogressbar)
    - [StripedLoaderBar](#stripedloaderbar)
    - [IndeterminateProgressBar](#indeterminateprogressbar)
    - [DualBarLoader](#dualbarloader)
    - [GrowingBarLoader](#growingbarloader)
    - [WaveformBar](#waveformbar)
    - [MorphingBarLoader](#morphingbarloader)
    - [ParticleTrailLoader](#particletrailloader)
  - [Dot Loaders](#dot-loaders)
    - [ThreeBouncingDots](#threebouncingdots)
    - [DotsFading](#dotsfading)
    - [DotWave](#dotwave)
    - [DotCircleLoader](#dotcircleloader)
    - [PulseDots](#pulsedots)
    - [DotDrop](#dotdrop)
    - [TypingDots](#typingdots)
    - [SequentialDotReveal](#sequentialdotreveal)
    - [DNAHelixDots](#dnahelixdots)
    - [OrbitDots](#orbitdots)
  - [Fun Loaders](#fun-loaders)
    - [HeartBeatAnimation](#heartbeatanimation)
    - [CoffeeCupSteam](#coffeecupsteam)
    - [HourglassFlip](#hourglassflip)
    - [LoadingCat](#loadingcat)
    - [LoaderRobot](#loaderrobot)
    - [InfinitySpinner](#infinityspinner)
    - [YinYangLoader](#yinyangloader)
  - [Motion Path Loaders](#motion-path-loaders)
    - [BallPathLoader](#ballpathloader)
    - [SnakeLineLoader](#snakelineloader)
    - [CircleStrokeLoader](#circlestrokeloader)
    - [ZigzagPathLoader](#zigzagpathloader)
    - [LissajousCurveLoader](#lissajouscurveloader)
    - [SVGStrokeDashAnimation](#svgstrokedashanimation)
  - [Skeleton Loaders](#skeleton-loaders)
    - [TextSkeleton](#textskeleton)
    - [ImageSkeleton](#imageskeleton)
    - [AvatarTextCardSkeleton](#avatartextcardskeleton)
    - [GridCardSkeleton](#gridcardskeleton)
    - [ListSkeleton](#listskeleton)
    - [TableSkeleton](#tableskeleton)
    - [ButtonSkeleton](#buttonskeleton)
    - [FullPageSkeleton](#fullpageskeleton)
  - [Shape Loaders](#shape-loaders)
    - [RainbowSpinner](#rainbowspinner)
    - [ColorFillDots](#colorfilldots)
    - [ShapeMorphing](#shapemorphing)
    - [GeometricShapes](#geometricshapes)
    - [HexagonLoader](#hexagonloader)
    - [TriangleBounce](#trianglebounce)
    - [PolygonRotation](#polygonrotation)
    - [ColorShiftingBackground](#colorshiftingbackground)
  - [Spinner Loaders](#spinner-loaders)
    - [SimpleSpinner](#simplespinner)
    - [DualRingSpinner](#dualringspinner)
    - [PulseSpinner](#pulsespinner)
    - [RippleSpinner](#ripplespinner)
    - [OrbitSpinner](#orbitspinner)
    - [SolarSpinner](#solarspinner)
    - [DashedRingLoader](#dashedringloader)
    - [PieLoader](#pieloader)
    - [SVGRotateLoader](#svgrotateloader)
    - [DNAHelixLoader](#dnahelixloader)
  - [Text Loaders](#text-loaders)
    - [TypingDotsLoader](#typingdotsloader)
    - [TypewriterLoader](#typewriterloader)
    - [TextFadeLoader](#textfadeloader)
    - [TextPulseLoader](#textpulseloader)
    - [TextWaveLoader](#textwaveloader)
    - [GlitchTextLoader](#glitchtextloader)
    - [ScrambledLettersLoader](#scrambledlettersloader)
    - [ProgressiveWordLoader](#progressivewordloader)
    - [ColorCycleTextLoader](#colorcycletextloader)
    - [BlinkingTextLoader](#blinkingtextloader)

---

## Installation

To use this library in your React project, you can install it via npm or yarn:

```bash
npm install @dothp/reloaders react react-dom
# or
yarn add @dothp/reloaders react react-dom
```

> **Note:** This library requires `react` and `react-dom` as peer dependencies. Ensure they are installed in your project.

---

## Usage

All components are exported individually from their respective files within the `@dothp/reloaders` package. You can import them directly into your React components.

Here's a general example of how to import and use a loader:

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

---

## Loader Components

The library components are organized into several categories based on their functionality and visual style.

### Bar Loaders

These components provide various styles of progress bars and linear loading indicators.

#### BasicProgressBar

A fundamental progress bar with options for gradient and glow effects.

**Import:**
```jsx
import { BasicProgressBar } from '@dothp/reloaders/BarLoaders';
```

**Example Usage:**
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
| `width` | string | `'100%'` | The width of the progress bar |
| `height` | string | `'8px'` | The height of the progress bar |
| `color` | string | `'#6366f1'` | The primary color of the progress bar |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners if true |
| `gradient` | boolean | `true` | Applies a gradient fill if true |
| `glow` | boolean | `true` | Adds a subtle glow effect if true |

---

#### StripedLoaderBar

A linear loader featuring a dynamic striped pattern.

**Import:**
```jsx
import { StripedLoaderBar } from '@dothp/reloaders/BarLoaders';
```

**Example Usage:**
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
| `width` | string | `'100%'` | The width of the loader bar |
| `height` | string | `'8px'` | The height of the loader bar |
| `color` | string | `'#6366f1'` | The primary color of the stripes |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners if true |

---

#### IndeterminateProgressBar

A progress bar with a continuous, indeterminate animation.

**Import:**
```jsx
import { IndeterminateProgressBar } from '@dothp/reloaders/BarLoaders';
```

**Example Usage:**
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
| `width` | string | `'100%'` | The width of the progress bar |
| `height` | string | `'8px'` | The height of the progress bar |
| `color` | string | `'#6366f1'` | The primary color of the moving indicator |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners if true |

---

#### DualBarLoader

A loader featuring two synchronized bars moving in opposite directions.

**Import:**
```jsx
import { DualBarLoader } from '@dothp/reloaders/BarLoaders';
```

**Example Usage:**
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
| `width` | string | `'100%'` | The width of the loader |
| `height` | string | `'8px'` | The height of each individual bar |
| `color` | string | `'#6366f1'` | The color of the moving elements |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners to the bars if true |

---

#### GrowingBarLoader

A set of bars that grow and shrink in an elastic, sequential motion.

**Import:**
```jsx
import { GrowingBarLoader } from '@dothp/reloaders/BarLoaders';
```

**Example Usage:**
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
| `height` | string | `'64px'` | The overall height of the loader container |
| `barWidth` | string | `'6px'` | The width of each individual bar |
| `color` | string | `'#6366f1'` | The color of the bars |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `barCount` | integer | `5` | The number of bars in the loader |
| `gap` | string | `'3px'` | The space between bars |
| `rounded` | boolean | `true` | Applies rounded corners to the bars if true |

---

#### WaveformBar

A loader resembling an audio waveform, with bars animating based on a realistic pattern.

**Import:**
```jsx
import { WaveformBar } from '@dothp/reloaders/BarLoaders';
```

**Example Usage:**
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
| `height` | string | `'64px'` | The overall height of the loader container |
| `barWidth` | string | `'4px'` | The width of each individual bar |
| `color` | string | `'#6366f1'` | The color of the bars |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `barCount` | integer | `8` | The number of bars in the loader |
| `gap` | string | `'2px'` | The space between bars |
| `rounded` | boolean | `true` | Applies rounded corners to the bars if true |

---

#### MorphingBarLoader

A single bar that continuously morphs its shape and position.

**Import:**
```jsx
import { MorphingBarLoader } from '@dothp/reloaders/BarLoaders';
```

**Example Usage:**
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
| `width` | string | `'100%'` | The width of the container |
| `height` | string | `'8px'` | The height of the bar |
| `color` | string | `'#6366f1'` | The color of the morphing bar |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners to the container if true |

---

#### ParticleTrailLoader

A bar that emits a trail of particles as it moves.

**Import:**
```jsx
import { ParticleTrailLoader } from '@dothp/reloaders/BarLoaders';
```

**Example Usage:**
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
| `width` | string | `'100%'` | The width of the container |
| `height` | string | `'8px'` | The height of the trail area |
| `color` | string | `'#6366f1'` | The color of the particles |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners to the container if true |
| `particleCount` | integer | `3` | The number of particles in the trail |

---

### Dot Loaders

These components feature various animations using dots.

#### ThreeBouncingDots

Three dots that bounce smoothly in a sequence.

**Import:**
```jsx
import { ThreeBouncingDots } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'16px'` | The size (width and height) of each dot |
| `color` | string | `'#3498db'` | The color of the dots |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `gap` | string | `'6px'` | The space between dots |

---

#### DotsFading

Multiple dots that fade in and out sequentially.

**Import:**
```jsx
import { DotsFading } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'14px'` | The size of each dot |
| `color` | string | `'#3498db'` | The color of the dots |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotCount` | integer | `5` | The number of dots |
| `gap` | string | `'4px'` | The space between dots |

---

#### DotWave

Dots that move in a wave-like pattern.

**Import:**
```jsx
import { DotWave } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'16px'` | The size of each dot |
| `color` | string | `'#3498db'` | The color of the dots |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotCount` | integer | `5` | The number of dots |
| `gap` | string | `'4px'` | The space between dots |

---

#### DotCircleLoader

Dots arranged in a circle, animating with a fading and scaling effect.

**Import:**
```jsx
import { DotCircleLoader } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'64px'` | The overall size of the circular container |
| `color` | string | `'#3498db'` | The color of the dots |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotCount` | integer | `8` | The number of dots in the circle |
| `dotSize` | string | `'12px'` | The size of each individual dot |

---

#### PulseDots

Multiple dots that pulse in and out, creating a breathing effect.

**Import:**
```jsx
import { PulseDots } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'16px'` | The size of each dot |
| `color` | string | `'#3498db'` | The color of the dots |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotCount` | integer | `3` | The number of dots |
| `gap` | string | `'8px'` | The space between dots |

---

#### DotDrop

Dots that appear to drop and disappear, simulating a falling effect.

**Import:**
```jsx
import { DotDrop } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'12px'` | The size of each dot |
| `color` | string | `'#3498db'` | The color of the dots |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotCount` | integer | `4` | The number of dots |
| `gap` | string | `'8px'` | The space between dots |

---

#### TypingDots

Mimics the "typing" indicator seen in chat applications.

**Import:**
```jsx
import { TypingDots } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'10px'` | The size of each dot |
| `color` | string | `'#3498db'` | The color of the dots |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotCount` | integer | `3` | The number of dots |
| `gap` | string | `'3px'` | The space between dots |

---

#### SequentialDotReveal

Dots that sequentially reveal themselves with a scaling effect.

**Import:**
```jsx
import { SequentialDotReveal } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'16px'` | The size of each dot |
| `color` | string | `'#3498db'` | The color of the dots |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotCount` | integer | `4` | The number of dots |
| `gap` | string | `'6px'` | The space between dots |

---

#### DNAHelixDots

Dots arranged to simulate a rotating DNA helix structure.

**Import:**
```jsx
import { DNAHelixDots } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'8px'` | The size of each dot |
| `color` | string | `'#3498db'` | The primary color of the dots |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotCount` | integer | `6` | The number of dots in the helix |

---

#### OrbitDots

Dots orbiting a central point, creating a planetary system effect.

**Import:**
```jsx
import { OrbitDots } from '@dothp/reloaders/DotLoaders';
```

**Example Usage:**
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
| `size` | string | `'64px'` | The overall size of the orbit container |
| `color` | string | `'#3498db'` | The color of the central dot and orbits |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotSize` | string | `'8px'` | The size of the orbiting dots |
| `orbitCount` | integer | `3` | The number of orbiting paths |

---

### Fun Loaders

These components offer unique and playful loading animations.

#### HeartBeatAnimation

A heart icon that pulses and beats.

**Import:**
```jsx
import { HeartBeatAnimation } from '@dothp/reloaders/FunLoaders';
```

**Example Usage:**
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
| `size` | string | `'50px'` | The size of the heart icon |
| `color` | string | `'#e74c3c'` | The color of the heart |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'1.2s'` | The duration of one heartbeat cycle |

---

#### CoffeeCupSteam

An animated coffee cup with rising steam.

**Import:**
```jsx
import { CoffeeCupSteam } from '@dothp/reloaders/FunLoaders';
```

**Example Usage:**
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
| `size` | string | `'80px'` | The overall size of the coffee cup |
| `color` | string | `'#6d4c41'` | The color of the coffee cup |
| `steamColor` | string | `'#e0e0e0'` | The color of the steam particles |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'2s'` | The duration of the steam animation cycle |

---

#### HourglassFlip

An hourglass that flips and shows sand falling.

**Import:**
```jsx
import { HourglassFlip } from '@dothp/reloaders/FunLoaders';
```

**Example Usage:**
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
| `size` | string | `'64px'` | The overall size of the hourglass |
| `color` | string | `'#8e44ad'` | The color of the hourglass frame |
| `sandColor` | string | `'#f39c12'` | The color of the sand |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'3s'` | The duration of one flip cycle |

---

#### LoadingCat

An animated cat walking and wagging its tail.

**Import:**
```jsx
import { LoadingCat } from '@dothp/reloaders/FunLoaders';
```

**Example Usage:**
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
| `size` | string | `'80px'` | The overall size of the cat |
| `color` | string | `'#34495e'` | The color of the cat's fur |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'2s'` | The duration of one spin cycle |

---

### Motion Path Loaders

These components feature elements moving along predefined or dynamic paths.

#### BallPathLoader

A ball that follows a rectangular path.

**Import:**
```jsx
import { BallPathLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example Usage:**
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
| `size` | number | `64` | The overall size of the square path container |
| `color` | string | `'#3498db'` | The color of the ball |
| `backgroundColor` | string | `'transparent'` | Background color of the container |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | number | `1.5` | The duration of one full path cycle in seconds |
| `easing` | string | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `ballSize` | number | `10` | The size of the orbiting ball |
| `pathVisible` | boolean | `true` | If true, the path outline is visible |
| `pathColor` | string | `'rgba(0, 0, 0, 0.1)'` | Color of the path outline |
| `shadow` | boolean | `false` | Adds a subtle box shadow to the ball |
| `glow` | boolean | `false` | Adds a glow effect to the ball |
| `opacity` | number | `1` | Opacity of the ball |
| `direction` | string | `'clockwise'` | Direction of movement ('clockwise' or 'counterclockwise') |

---

#### SnakeLineLoader

A line that animates around a circular, square, or polygonal path.

**Import:**
```jsx
import { SnakeLineLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example Usage:**
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
| `size` | number | `64` | The overall size of the loader container |
| `color` | string | `'#3498db'` | The color of the snake line |
| `backgroundColor` | string | `'transparent'` | Background color of the container |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | number | `1.5` | The duration of one full animation cycle in seconds |
| `easing` | string | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `strokeWidth` | number | `4` | The thickness of the line |
| `opacity` | number | `1` | Opacity of the line |
| `glow` | boolean | `false` | Adds a glow effect to the line |
| `segments` | integer | `3` | The number of visible segments in the line |
| `shape` | string | `'circle'` | The shape of the path ('circle', 'square', 'polygon') |

---

#### CircleStrokeLoader

A circular loader with a stroke that fills and empties, optionally showing progress.

**Import:**
```jsx
import { CircleStrokeLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example Usage:**
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
| `size` | number | `64` | The overall size of the circular loader |
| `color` | string | `'#3498db'` | The color of the stroke |
| `backgroundColor` | string | `'transparent'` | Background color of the container |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | number | `1.5` | The duration of one full animation cycle in seconds |
| `easing` | string | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `strokeWidth` | number | `4` | The thickness of the circular stroke |
| `opacity` | number | `1` | Opacity of the stroke |
| `glow` | boolean | `false` | Adds a glow effect to the stroke |
| `gradient` | boolean | `false` | Applies a gradient to the stroke if true |
| `trackColor` | string | `'rgba(0, 0, 0, 0.08)'` | Color of the background track |
| `lineCap` | string | `'round'` | Style of the stroke ends ('round', 'butt', 'square') |
| `progress` | number | `null` | If a number (0-100), it shows static progress; otherwise, it animates |

---

#### ZigzagPathLoader

A dot that moves along a zigzag, diamond, or infinity-shaped path.

**Import:**
```jsx
import { ZigzagPathLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example Usage:**
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
| `size` | number | `64` | The overall size of the container |
| `color` | string | `'#3498db'` | The color of the dot |
| `backgroundColor` | string | `'transparent'` | Background color of the container |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | number | `1.5` | The duration of one full path cycle in seconds |
| `easing` | string | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `dotSize` | number | `12` | The size of the moving dot |
| `pathVisible` | boolean | `true` | If true, the path outline is visible |
| `pathColor` | string | `'rgba(0, 0, 0, 0.1)'` | Color of the path outline |
| `shadow` | boolean | `false` | Adds a subtle box shadow to the dot |
| `glow` | boolean | `false` | Adds a glow effect to the dot |
| `opacity` | number | `1` | Opacity of the dot |
| `pattern` | string | `'zigzag'` | The shape of the path ('zigzag', 'diamond', 'infinity') |

---

#### LissajousCurveLoader

Multiple dots animating along a Lissajous curve.

**Import:**
```jsx
import { LissajousCurveLoader } from '@dothp/reloaders/MotionPathLoaders';
```

**Example Usage:**
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
| `size` | number | `64` | The overall size of the container |
| `color` | string | `'#3498db'` | The color of the dots |
| `backgroundColor` | string | `'transparent'` | Background color of the container |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | number | `1.5` | The duration of one full curve cycle in seconds |
| `easing` | string | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `dotSize` | number | `8` | The size of each dot |
| `dotCount` | integer | `3` | The number of dots animating |
| `shadow` | boolean | `false` | Adds a subtle box shadow to the dots |
| `glow` | boolean | `false` | Adds a glow effect to the dots |
| `opacity` | number | `1` | Opacity of the dots |
| `trail` | boolean | `false` | If true, dots will have a fading trail effect |

---

#### SVGStrokeDashAnimation

An SVG path that animates its stroke, creating a drawing effect.

**Import:**
```jsx
import { SVGStrokeDashAnimation } from '@dothp/reloaders/MotionPathLoaders';
```

**Example Usage:**
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
| `size` | number | `64` | The overall size of the SVG container |
| `color` | string | `'#3498db'` | The color of the SVG stroke |
| `backgroundColor` | string | `'transparent'` | Background color of the container |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | number | `1.5` | The duration of one full animation cycle in seconds |
| `easing` | string | `'cubic-bezier(0.4, 0, 0.6, 1)'` | CSS easing function for the animation |
| `strokeWidth` | number | `4` | The thickness of the SVG stroke |
| `opacity` | number | `1` | Opacity of the stroke |
| `glow` | boolean | `false` | Adds a glow effect to the stroke |
| `pathType` | string | `'wave'` | The type of SVG path ('wave', 'spiral', 'heart', 'star') |

---

### Skeleton Loaders

These components provide placeholder "skeleton" loading states for various UI elements.

#### TextSkeleton

A skeleton loader for text content, simulating paragraphs or headings.

**Import:**
```jsx
import { TextSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example Usage:**
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
| `lines` | integer | `3` | The number of text lines to display |
| `lineHeight` | string | `'1.2em'` | The height of each text line |
| `gap` | string | `'0.5em'` | The vertical space between lines |
| `color` | string | `'#f1f5f9'` | The background color of the skeleton lines |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners to the lines |
| `hasShimmer` | boolean | `true` | If true, a shimmering effect is applied |
| `variant` | string | `'paragraph'` | The style of text ('paragraph', 'heading', 'caption') |

---

#### ImageSkeleton

A skeleton loader for image placeholders.

**Import:**
```jsx
import { ImageSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example Usage:**
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
| `width` | string | `'100%'` | The width of the image placeholder |
| `height` | string | `'200px'` | The height of the image placeholder |
| `aspectRatio` | string | undefined | Sets the aspect ratio (e.g., '16/9'). Overrides height if provided |
| `color` | string | `'#f1f5f9'` | The background color of the skeleton |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners |
| `hasShimmer` | boolean | `true` | If true, a shimmering effect is applied |

---

#### AvatarTextCardSkeleton

A skeleton loader for a user card, typically with an avatar and text lines.

**Import:**
```jsx
import { AvatarTextCardSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example Usage:**
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
| `size` | string | `'md'` | Predefined size for the card ('sm', 'md', 'lg') |
| `orientation` | string | `'horizontal'` | Layout of avatar and text ('horizontal', 'vertical') |
| `color` | string | `'#f1f5f9'` | The background color of the skeleton elements |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners to the card and its elements |
| `hasShimmer` | boolean | `true` | If true, a shimmering effect is applied |

---

#### GridCardSkeleton

A skeleton loader for a grid of cards.

**Import:**
```jsx
import { GridCardSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example Usage:**
```jsx
<GridCardSkeleton 
  count={3} 
  columns={3} 
  cardHeight="250px" 
  color="#f1f5f9" 
  hasShimmer={true} 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `count` | integer | `6` | The number of skeleton cards in the grid |
| `columns` | string | `'auto'` | Defines grid columns ('auto', '1', '2', '3', etc.) |
| `minCardWidth` | string | `'280px'` | Minimum width for auto-fit columns |
| `cardHeight` | string | `'200px'` | The height of each skeleton card |
| `gap` | string | `'1.5rem'` | The space between grid items |
| `color` | string | `'#f1f5f9'` | The background color of the skeleton elements within cards |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners to the cards |
| `hasShimmer` | boolean | `true` | If true, a shimmering effect is applied |

---

#### ListSkeleton

A skeleton loader for a list of items.

**Import:**
```jsx
import { ListSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example Usage:**
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
| `count` | integer | `5` | The number of skeleton list items |
| `itemHeight` | string | `'auto'` | The height of each list item ('auto' for flexible height) |
| `gap` | string | `'1rem'` | The vertical space between list items |
| `color` | string | `'#f1f5f9'` | The background color of the skeleton elements within items |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners to the list items |
| `hasShimmer` | boolean | `true` | If true, a shimmering effect is applied |
| `variant` | string | `'default'` | The structure of list items ('default', 'detailed', 'minimal') |

---

#### TableSkeleton

A skeleton loader for tabular data.

**Import:**
```jsx
import { TableSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example Usage:**
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
| `rows` | integer | `5` | The number of data rows |
| `columns` | integer | `4` | The number of columns |
| `hasHeader` | boolean | `true` | If true, includes a header row |
| `color` | string | `'#f1f5f9'` | The background color of the skeleton cells |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners to the table rows/cells |
| `hasShimmer` | boolean | `true` | If true, a shimmering effect is applied |

---

#### ButtonSkeleton

A skeleton loader for a button.

**Import:**
```jsx
import { ButtonSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example Usage:**
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
| `size` | string | `'md'` | Predefined size for the button ('sm', 'md', 'lg') |
| `variant` | string | `'primary'` | Style of the button ('primary', 'secondary', 'ghost') |
| `color` | string | `'#f1f5f9'` | The background color of the skeleton button |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners |
| `hasShimmer` | boolean | `true` | If true, a shimmering effect is applied |

---

#### FullPageSkeleton

A comprehensive skeleton loader for an entire page layout.

**Import:**
```jsx
import { FullPageSkeleton } from '@dothp/reloaders/OtherLoaders';
```

**Example Usage:**
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
| `layout` | string | `'default'` | Predefined page layout ('default', 'dashboard', 'article', 'profile') |
| `color` | string | `'#f1f5f9'` | The background color of the skeleton elements |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `rounded` | boolean | `true` | Applies rounded corners to the layout elements |
| `hasShimmer` | boolean | `true` | If true, a shimmering effect is applied |

---

### Shape Loaders

These components utilize various geometric shapes for their animations.

#### RainbowSpinner

A circular spinner with a vibrant, continuously shifting rainbow gradient border.

**Import:**
```jsx
import { RainbowSpinner } from '@dothp/reloaders/ShapeLoaders';
```

**Example Usage:**
```jsx
<RainbowSpinner 
  size="70px" 
  duration="2s" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The overall size of the spinner |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'1.5s'` | The duration of one full spin cycle |

---

#### ColorFillDots

Dots that bounce and change color, with an optional second color for the fill.

**Import:**
```jsx
import { ColorFillDots } from '@dothp/reloaders/ShapeLoaders';
```

**Example Usage:**
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
| `size` | string | `'15px'` | The size of each dot |
| `color` | string | `'#3498db'` | The primary color of the dots |
| `secondColor` | string | `'#ff6b9d'` | The color the dots transition to (use 'none' to disable) |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `dotCount` | integer | `3` | The number of dots |
| `gap` | string | `'8px'` | The space between dots |
| `duration` | string | `'1.5s'` | The duration of one bounce cycle |

---

#### ShapeMorphing

A single shape that continuously morphs between a circle, square, and rounded square.

**Import:**
```jsx
import { ShapeMorphing } from '@dothp/reloaders/ShapeLoaders';
```

**Example Usage:**
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
| `size` | string | `'64px'` | The size of the morphing shape |
| `color` | string | `'#3498db'` | The primary color of the shape |
| `secondColor` | string | `'#ff6b9d'` | The color the shape transitions to (use 'none' to disable) |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'1.5s'` | The duration of one morphing cycle |

---

#### GeometricShapes

Multiple small geometric shapes orbiting a central point.

**Import:**
```jsx
import { GeometricShapes } from '@dothp/reloaders/ShapeLoaders';
```

**Example Usage:**
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
| `size` | string | `'64px'` | The overall size of the container |
| `color` | string | `'#3498db'` | The primary color of the shapes |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'1.5s'` | The duration of one orbit cycle |
| `shapeCount` | integer | `3` | The number of orbiting shapes |

---

#### HexagonLoader

A hexagonal shape with a spinning and pulsing animation.

**Import:**
```jsx
import { HexagonLoader } from '@dothp/reloaders/ShapeLoaders';
```

**Example Usage:**
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
| `size` | string | `'64px'` | The overall size of the hexagon |
| `color` | string | `'#3498db'` | The primary color of the hexagon |
| `secondColor` | string | `'#fff'` | The color the hexagon pulses to (use 'none' to disable) |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'1.5s'` | The duration of one animation cycle |

---

#### TriangleBounce

Multiple triangles that bounce with an elastic effect.

**Import:**
```jsx
import { TriangleBounce } from '@dothp/reloaders/ShapeLoaders';
```

**Example Usage:**
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
| `size` | string | `'64px'` | The size of each triangle |
| `color` | string | `'#3498db'` | The primary color of the triangles |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'1.5s'` | The duration of one bounce cycle |
| `triangleCount` | integer | `3` | The number of triangles |
| `gap` | string | `'10px'` | The space between triangles |

---

#### PolygonRotation

A polygon that rotates and scales, with a dynamic number of sides.

**Import:**
```jsx
import { PolygonRotation } from '@dothp/reloaders/ShapeLoaders';
```

**Example Usage:**
```jsx
<PolygonRotation 
  size="80px" 
  color="#3498db" 
  sides={5} 
  duration="2s" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The overall size of the polygon |
| `color` | string | `'#3498db'` | The primary color of the polygon |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'1.5s'` | The duration of one rotation cycle |
| `sides` | integer | `4` | The number of sides of the polygon |

---

#### ColorShiftingBackground

A background that smoothly shifts through a sequence of gradients.

**Import:**
```jsx
import { ColorShiftingBackground } from '@dothp/reloaders/ShapeLoaders';
```

**Example Usage:**
```jsx
<ColorShiftingBackground 
  width="100%" 
  height="150px" 
  duration="6s" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `width` | string | `'100%'` | The width of the background |
| `height` | string | `'100px'` | The height of the background |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'5s'` | The duration of one full color cycle |

---

### Spinner Loaders

These components provide various styles of classic spinning indicators.

#### SimpleSpinner

A basic circular spinner with customizable thickness and glow.

**Import:**
```jsx
import { SimpleSpinner } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<SimpleSpinner 
  size="60px" 
  color="#3498db" 
  thickness={8} 
  glowEffect={true} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The size of the spinner |
| `color` | string | `'#3498db'` | The color of the spinner |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `thickness` | integer | `6` | The thickness of the spinner's border |
| `glowEffect` | boolean | `false` | Adds a glow effect if true |

---

#### DualRingSpinner

A spinner composed of two concentric rings, with an optional pulsing effect.

**Import:**
```jsx
import { DualRingSpinner } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<DualRingSpinner 
  size="70px" 
  color="#3498db" 
  pulseEffect={true} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The size of the spinner |
| `color` | string | `'#3498db'` | The color of the rings |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `pulseEffect` | boolean | `true` | If true, the spinner will pulse in size |

---

#### PulseSpinner

A spinner that emits concentric, fading pulse waves.

**Import:**
```jsx
import { PulseSpinner } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<PulseSpinner 
  size="80px" 
  color="#3498db" 
  waves={4} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The size of the spinner |
| `color` | string | `'#3498db'` | The color of the pulse waves |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `waves` | integer | `3` | The number of pulse waves |

---

#### RippleSpinner

A spinner with expanding ripple effects.

**Import:**
```jsx
import { RippleSpinner } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<RippleSpinner 
  size="70px" 
  color="#3498db" 
  gradientEffect={true} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The size of the spinner |
| `color` | string | `'#3498db'` | The color of the ripples |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `gradientEffect` | boolean | `true` | Applies a gradient to the ripples if true |

---

#### OrbitSpinner

A central core with multiple dots orbiting around it.

**Import:**
```jsx
import { OrbitSpinner } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<OrbitSpinner 
  size="90px" 
  color="#3498db" 
  dotColor="#666" 
  dotCount={8} 
  trailEffect={true} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The overall size of the spinner |
| `color` | string | `'#3498db'` | The color of the central core |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `dotColor` | string | `'#666'` | The color of the orbiting dots |
| `trailEffect` | boolean | `true` | If true, dots will have a fading trail |
| `dotCount` | integer | `6` | The number of orbiting dots |

---

#### SolarSpinner

A spinner simulating a solar system with a central star and orbiting planets.

**Import:**
```jsx
import { SolarSpinner } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<SolarSpinner 
  size="100px" 
  color="#3498db" 
  dotColor="#666" 
  planetSizes={[0.7, 1.1, 0.5, 1.3]} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The overall size of the solar system |
| `color` | string | `'#3498db'` | The color of the central star |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `dotColor` | string | `'#666'` | The color of the planets |
| `planetSizes` | array | `[0.8, 1, 0.6, 1.2]` | An array of numbers to scale planet sizes |

---

#### DashedRingLoader

A circular ring with a dashed stroke that animates around the circumference.

**Import:**
```jsx
import { DashedRingLoader } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<DashedRingLoader 
  size="70px" 
  color="#3498db" 
  dashSize={10} 
  glowIntensity={0.5} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The size of the ring |
| `color` | string | `'#3498db'` | The color of the dashed stroke |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `dashSize` | integer | `8` | The length of each dash segment |
| `glowIntensity` | number | `0.3` | The intensity of the glow effect (0-1) |

---

#### PieLoader

A circular loader that fills up like a pie chart.

**Import:**
```jsx
import { PieLoader } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<PieLoader 
  size="80px" 
  color="#3498db" 
  showPercentage={true} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The size of the pie loader |
| `color` | string | `'#3498db'` | The fill color of the pie |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `gradientEnd` | string | `null` | An optional end color for a gradient fill |
| `showPercentage` | boolean | `false` | If true, displays a placeholder for percentage text |

---

#### SVGRotateLoader

An SVG-based loader that rotates and morphs its internal shape.

**Import:**
```jsx
import { SVGRotateLoader } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<SVGRotateLoader 
  size="90px" 
  color="#3498db" 
  morphEffect={true} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The size of the SVG container |
| `color` | string | `'#3498db'` | The primary color of the SVG shape |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `morphEffect` | boolean | `true` | If true, the inner circle will morph its radius |

---

#### DNAHelixLoader

A loader that visualizes a rotating DNA helix structure.

**Import:**
```jsx
import { DNAHelixLoader } from '@dothp/reloaders/Spinner';
```

**Example Usage:**
```jsx
<DNAHelixLoader 
  size="80px" 
  color="#3498db" 
  secondaryColor="#e74c3c" 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | string | `'64px'` | The overall size of the helix loader |
| `color` | string | `'#3498db'` | The primary color of the helix strands |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `secondaryColor` | string | `'#e74c3c'` | The secondary color for alternating helix strands |

---

### Text Loaders

These components provide various animated text-based loading indicators.

#### TypingDotsLoader

Displays text followed by animated typing dots.

**Import:**
```jsx
import { TypingDotsLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<TypingDotsLoader 
  text="Processing" 
  color="#3498db" 
  size="28px" 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'Loading'` | The main text to display |
| `color` | string | `'#3498db'` | The color of the text and dots |
| `size` | string | `'24px'` | The font size of the text |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |

---

#### TypewriterLoader

Displays text with a typewriter effect, character by character.

**Import:**
```jsx
import { TypewriterLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<TypewriterLoader 
  text="Generating content" 
  color="#3498db" 
  size="26px" 
  loop={true} 
  cursorChar="_" 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'Loading'` | The text to be typed |
| `color` | string | `'#3498db'` | The color of the text |
| `size` | string | `'24px'` | The font size of the text |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Typing speed ('slow', 'normal', 'fast') |
| `loop` | boolean | `true` | If true, the animation will repeat |
| `cursorChar` | string | `'|'` | The character used for the blinking cursor |
| `cursorBlinkSpeed` | string | `'0.7s'` | The speed at which the cursor blinks |

---

#### TextFadeLoader

Text that fades in and out with a subtle scaling effect.

**Import:**
```jsx
import { TextFadeLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<TextFadeLoader 
  text="Loading Data" 
  color="#3498db" 
  size="30px" 
  glowEffect={true} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'Loading'` | The text to animate |
| `color` | string | `'#3498db'` | The color of the text |
| `size` | string | `'24px'` | The font size of the text |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `glowEffect` | boolean | `false` | Adds a glow effect to the text |
| `fadeScale` | number | `1.05` | The scale factor when the text is fully visible |

---

#### TextPulseLoader

Text that pulses in size and opacity.

**Import:**
```jsx
import { TextPulseLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<TextPulseLoader 
  text="Loading..." 
  color="#3498db" 
  size="32px" 
  pulseScale={1.2} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'Loading'` | The text to animate |
| `color` | string | `'#3498db'` | The color of the text |
| `size` | string | `'24px'` | The font size of the text |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `pulseScale` | number | `1.1` | The maximum scale factor during the pulse |
| `pulseOpacity` | number | `0.8` | The minimum opacity during the pulse |

---

#### TextWaveLoader

Text where each character moves in a wave-like vertical motion.

**Import:**
```jsx
import { TextWaveLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<TextWaveLoader 
  text="Loading" 
  color="#3498db" 
  size="36px" 
  waveHeight="0.3em" 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'Loading'` | The text to animate |
| `color` | string | `'#3498db'` | The color of the text |
| `size` | string | `'24px'` | The font size of the text |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `waveHeight` | string | `'0.2em'` | The maximum vertical displacement of characters |
| `characterDelayMultiplier` | number | `0.1` | Multiplier for delay between character animations |

---

#### GlitchTextLoader

Text that appears with a digital "glitch" effect.

**Import:**
```jsx
import { GlitchTextLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<GlitchTextLoader 
  text="ERROR" 
  color="#e74c3c" 
  size="40px" 
  intensity="5px" 
  flickerSpeed="0.03s" 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'Loading'` | The text to apply the glitch effect to |
| `color` | string | `'#3498db'` | The primary color of the text |
| `size` | string | `'24px'` | The font size of the text |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `intensity` | string | `'3px'` | The maximum horizontal shift for the glitch effect |
| `flickerSpeed` | string | `'0.05s'` | The speed of the text flickering |

---

#### ScrambledLettersLoader

Text that appears to unscramble from random characters.

**Import:**
```jsx
import { ScrambledLettersLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<ScrambledLettersLoader 
  text="Decoding" 
  color="#3498db" 
  size="28px" 
  revealInterval={80} 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'Loading'` | The target text to unscramble |
| `color` | string | `'#3498db'` | The color of the text |
| `size` | string | `'24px'` | The font size of the text |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Overall animation speed (influences internal delays) |
| `scrambleCharacters` | string | `'!@#$%^&*()-_+=[]{};:',.<>/?'` | Characters used for scrambling |
| `revealInterval` | integer | `100` | Time in milliseconds between revealing each character |

---

#### ProgressiveWordLoader

Cycles through a list of words, fading them in and out.

**Import:**
```jsx
import { ProgressiveWordLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<ProgressiveWordLoader 
  wordList={["Loading", "Fetching Data", "Almost Done"]} 
  color="#3498db" 
  size="30px" 
  revealInterval={1500} 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `wordList` | array | `['Loading', 'Fetching', 'Finalizing', 'Complete']` | An array of strings to cycle through |
| `color` | string | `'#3498db'` | The color of the words |
| `size` | string | `'24px'` | The font size of the words |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed for fading ('slow', 'normal', 'fast') |
| `revealInterval` | integer | `1000` | Time in milliseconds between displaying each word |

---

#### ColorCycleTextLoader

Text that smoothly cycles through a predefined list of colors.

**Import:**
```jsx
import { ColorCycleTextLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<ColorCycleTextLoader 
  text="Loading" 
  size="34px" 
  colors={["#ff0000", "#00ff00", "#0000ff"]} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'Loading'` | The text to apply the color cycle to |
| `size` | string | `'24px'` | The font size of the text |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `colors` | array | `['#e74c3c', '#3498db', '#2ecc71', '#f1c40f', '#9b59b6']` | An array of color strings to cycle through |

---

#### BlinkingTextLoader

Text that blinks on and off, with an optional flicker effect.

**Import:**
```jsx
import { BlinkingTextLoader } from '@dothp/reloaders/TextLoaders';
```

**Example Usage:**
```jsx
<BlinkingTextLoader 
  text="Connecting..." 
  color="#3498db" 
  size="28px" 
  flicker={true} 
  speed="normal" 
/>
```

**Props:**
| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `text` | string | `'Loading'` | The text to blink |
| `color` | string | `'#3498db'` | The color of the text |
| `size` | string | `'24px'` | The font size of the text |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `speed` | string | `'normal'` | Animation speed ('slow', 'normal', 'fast') |
| `flicker` | boolean | `false` | If true, adds a rapid flickering effect |

---

## Contributing

We welcome contributions to the `@dothp/reloaders` library! If you have ideas for new loaders, improvements to existing ones, or bug fixes, please feel free to submit a pull request or open an issue on our GitHub repository.

## License

This library is licensed under the MIT License. See the LICENSE file for more details.

## Support

If you encounter any issues or have questions about using the library, please check our documentation or open an issue on GitHub. We're here to help make your loading experiences as smooth and visually appealing as possible! walking cycle |

---

#### LoaderRobot

An animated robot with moving arms and blinking eyes.

**Import:**
```jsx
import { LoaderRobot } from '@dothp/reloaders/FunLoaders';
```

**Example Usage:**
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
| `size` | string | `'64px'` | The overall size of the robot |
| `color` | string | `'#34495e'` | The primary color of the robot's body |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'1.8s'` | The duration of one animation cycle |

---

#### InfinitySpinner

An infinity symbol that animates with a continuous flow.

**Import:**
```jsx
import { InfinitySpinner } from '@dothp/reloaders/FunLoaders';
```

**Example Usage:**
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
| `size` | integer | `64` | The overall size of the spinner (width) |
| `color` | string | `'#9b59b6'` | The color of the infinity symbol |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'2s'` | The duration of one animation cycle |

---

#### YinYangLoader

A classic Yin-Yang symbol with a smooth spinning animation.

**Import:**
```jsx
import { YinYangLoader } from '@dothp/reloaders/FunLoaders';
```

**Example Usage:**
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
| `size` | string | `'64px'` | The overall size of the Yin-Yang symbol |
| `color1` | string | `'#2c3e50'` | The first primary color |
| `color2` | string | `'#ecf0f1'` | The second primary color |
| `className` | string | - | Additional CSS class names |
| `style` | object | - | Inline CSS styles |
| `duration` | string | `'2s'` | The duration of one