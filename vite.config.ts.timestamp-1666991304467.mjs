// vite.config.ts
import { defineConfig } from "./node_modules/vite/dist/node/index.js";
import { resolve } from "path";
import react from "./node_modules/@vitejs/plugin-react/dist/index.mjs";

// package.json
var peerDependencies = {
  "@emotion/react": "^11.10.4",
  "@emotion/styled": "^11.10.4",
  "@mui/icons-material": "^5.10.9",
  "@mui/material": "^5.10.9",
  "@mui/system": "^5.10.9",
  "@mui/x-data-grid": "^5.17.7",
  "@mui/x-date-pickers": "^5.0.4",
  "chart.js": "^3.9.1",
  react: "^18.2.0",
  "react-chartjs-2": "^4.3.1",
  "react-dom": "^18.2.0",
  sweetalert2: "^11.5.1"
};

// vite.config.ts
import dts from "./node_modules/vite-plugin-dts/dist/index.mjs";
import tsconfigPaths from "./node_modules/vite-tsconfig-paths/dist/index.mjs";
var __vite_injected_original_dirname = "./";
var vite_config_default = defineConfig({
  build: {
    sourcemap: true,
    lib: {
      entry: resolve(__vite_injected_original_dirname, "src/index.ts"),
      name: "PremedUi",
      formats: ["es", "umd"],
      fileName: (format) => `premed-ui.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM"
        }
      }
    }
  },
  plugins: [
    react(),
    dts({
      insertTypesEntry: true
    }),
    tsconfigPaths()
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJFOlxcXFxUcmFiYWpvXFxcXEVDT1NVUlxcXFxSZXBvc2l0b3Jpb3NcXFxcZWNvc3VyLXVpXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJFOlxcXFxUcmFiYWpvXFxcXEVDT1NVUlxcXFxSZXBvc2l0b3Jpb3NcXFxcZWNvc3VyLXVpXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9FOi9UcmFiYWpvL0VDT1NVUi9SZXBvc2l0b3Jpb3MvZWNvc3VyLXVpL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XHJcbmltcG9ydCB7IHJlc29sdmUgfSBmcm9tICdwYXRoJztcclxuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0JztcclxuaW1wb3J0ICogYXMgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nO1xyXG5pbXBvcnQgZHRzIGZyb20gJ3ZpdGUtcGx1Z2luLWR0cyc7XHJcblxyXG5pbXBvcnQgdHNjb25maWdQYXRocyBmcm9tICd2aXRlLXRzY29uZmlnLXBhdGhzJztcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgYnVpbGQ6IHtcclxuICAgIHNvdXJjZW1hcDogdHJ1ZSxcclxuICAgIGxpYjoge1xyXG4gICAgICAvLyBDb3VsZCBhbHNvIGJlIGEgZGljdGlvbmFyeSBvciBhcnJheSBvZiBtdWx0aXBsZSBlbnRyeSBwb2ludHNcclxuICAgICAgZW50cnk6IHJlc29sdmUoX19kaXJuYW1lLCAnc3JjL2luZGV4LnRzJyksXHJcbiAgICAgIG5hbWU6ICdFY29zdXJVaScsXHJcbiAgICAgIC8vIHRoZSBwcm9wZXIgZXh0ZW5zaW9ucyB3aWxsIGJlIGFkZGVkXHJcbiAgICAgIGZvcm1hdHM6IFsnZXMnLCAndW1kJ10sXHJcbiAgICAgIGZpbGVOYW1lOiAoZm9ybWF0KSA9PiBgZWNvc3VyLXVpLiR7Zm9ybWF0fS5qc2AsXHJcbiAgICB9LFxyXG4gICAgcm9sbHVwT3B0aW9uczoge1xyXG4gICAgICAvLyBtYWtlIHN1cmUgdG8gZXh0ZXJuYWxpemUgZGVwcyB0aGF0IHNob3VsZG4ndCBiZSBidW5kbGVkXHJcbiAgICAgIC8vIGludG8geW91ciBsaWJyYXJ5XHJcbiAgICAgIGV4dGVybmFsOiBbLi4uT2JqZWN0LmtleXMocGFja2FnZUpzb24ucGVlckRlcGVuZGVuY2llcyldLFxyXG4gICAgICBvdXRwdXQ6IHtcclxuICAgICAgICBnbG9iYWxzOiB7XHJcbiAgICAgICAgICByZWFjdDogJ1JlYWN0JyxcclxuICAgICAgICAgICdyZWFjdC1kb20nOiAnUmVhY3RET00nLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0sXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgcGx1Z2luczogW1xyXG4gICAgcmVhY3QoKSxcclxuICAgIGR0cyh7XHJcbiAgICAgIGluc2VydFR5cGVzRW50cnk6IHRydWUsXHJcbiAgICB9KSxcclxuICAgIHRzY29uZmlnUGF0aHMoKSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFvVCxTQUFTLG9CQUFvQjtBQUNqVixTQUFTLGVBQWU7QUFDeEIsT0FBTyxXQUFXOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRWxCLE9BQU8sU0FBUztBQUVoQixPQUFPLG1CQUFtQjtBQU4xQixJQUFNLG1DQUFtQztBQVN6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixPQUFPO0FBQUEsSUFDTCxXQUFXO0FBQUEsSUFDWCxLQUFLO0FBQUEsTUFFSCxPQUFPLFFBQVEsa0NBQVcsY0FBYztBQUFBLE1BQ3hDLE1BQU07QUFBQSxNQUVOLFNBQVMsQ0FBQyxNQUFNLEtBQUs7QUFBQSxNQUNyQixVQUFVLENBQUMsV0FBVyxhQUFhO0FBQUEsSUFDckM7QUFBQSxJQUNBLGVBQWU7QUFBQSxNQUdiLFVBQVUsQ0FBQyxHQUFHLE9BQU8sS0FBaUIsZ0JBQWdCLENBQUM7QUFBQSxNQUN2RCxRQUFRO0FBQUEsUUFDTixTQUFTO0FBQUEsVUFDUCxPQUFPO0FBQUEsVUFDUCxhQUFhO0FBQUEsUUFDZjtBQUFBLE1BQ0Y7QUFBQSxJQUNGO0FBQUEsRUFDRjtBQUFBLEVBQ0EsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sSUFBSTtBQUFBLE1BQ0Ysa0JBQWtCO0FBQUEsSUFDcEIsQ0FBQztBQUFBLElBQ0QsY0FBYztBQUFBLEVBQ2hCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
