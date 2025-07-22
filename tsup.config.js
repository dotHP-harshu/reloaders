// tsup.config.js
import { defineConfig } from "tsup";

export default defineConfig({
  entry: [
    "src/BarLoaders.jsx",
    "src/DotLoaders.jsx",
    "src/FunLoaders.jsx",
    "src/MotionPathLoaders.jsx",
    "src/OtherLoaders.jsx",
    "src/ShapeLoaders.jsx",
    "src/SkeletonLoaders.jsx",
    "src/Spinner.jsx",
    "src/TextLoaders.jsx",
  ],
  format: ["esm"],
  outDir: "dist",
  sourcemap: true,
  splitting: false,
  clean: true,
  jsx: "transform",
});
