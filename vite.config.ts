// <reference types="vitest/config" />

// Configure Vitest (https://vitest.dev/config/)

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { configDefaults } from "vitest/config";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000, // Development server port
  },
  preview: {
    port: 5000, // Preview server port for production build
  },
  plugins: [react()],
  test: {
    globals: true, // Allows using global functions like `describe` and `it`
    environment: "jsdom", // Emulates the DOM in Node.js for React component testing
    css: true,
    setupFiles: "./src/tests/setupTests.ts", // Include the setup file for Jest matchers
    exclude: [...configDefaults.exclude, "node_modules"], // Exclude node_modules
  },
});
