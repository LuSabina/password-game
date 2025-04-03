import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    mockReset: true,
    setupFiles: "tests/setup.js",
    coverage: {
      provider: "v8",
    },
  },
  resolve: {
    alias: {
      "react-router-dom": "react-router-dom",
    },
  },
});
