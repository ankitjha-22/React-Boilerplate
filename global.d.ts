import "@testing-library/jest-dom";

// Ensure Vitest recognizes jest-dom matchers
declare global {
  namespace Vi {
    type JestMatchers<R> = jest.Matchers<R>;
  }
}
