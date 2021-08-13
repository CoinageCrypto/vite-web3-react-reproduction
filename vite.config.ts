import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [reactRefresh()],

  build: {
    // Turn off minification to make it easier to debug the production build.
    minify: false,
  },

  resolve: {
    alias: {
      // We need Node's crypto module for @web3-react.
      crypto: "crypto-browserify",

      // And stream is for @web3-react too.
      // The default browserify stream library has circular dependencies and breaks in a Vite context.
      stream: "vite-compatible-readable-stream",
    },
  },
});
