import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{ts,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        // Único color de acento (ver Plan Maestro §6). Todo lo demás es neutro.
        accent: {
          DEFAULT: "#1f6feb",
          hover: "#1a5fd0",
          soft: "#e8f0fe",
        },
        ink: {
          DEFAULT: "#1a1a1a",
          soft: "#4a4a4a",
          faint: "#767676",
        },
      },
      maxWidth: {
        prose: "68ch",
      },
    },
  },
  plugins: [],
};

export default config;
