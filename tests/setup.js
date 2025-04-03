import "@testing-library/jest-dom/vitest";
import { server } from "./mocks/server";
import { afterAll, afterEach, beforeAll } from "vitest";

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());
beforeEach(() => {
  vi.spyOn(Storage.prototype, "getItem").mockClear();
  vi.spyOn(Storage.prototype, "setItem").mockClear();
  vi.spyOn(Storage.prototype, "removeItem").mockClear();
  localStorage.clear();
});
afterEach(() => {
  vi.restoreAllMocks(); // Resets all mocks
  localStorage.clear(); // Ensures no leftover data
});
