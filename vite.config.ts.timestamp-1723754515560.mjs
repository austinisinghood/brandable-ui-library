// vite.config.ts
import { resolve } from "node:path";
import react from "file:///Users/austinisinghood/Developer/brandable-ui-library/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { defineConfig } from "file:///Users/austinisinghood/Developer/brandable-ui-library/node_modules/vite/dist/node/index.js";
import dts from "file:///Users/austinisinghood/Developer/brandable-ui-library/node_modules/vite-plugin-dts/dist/index.mjs";
import EsLint from "file:///Users/austinisinghood/Developer/brandable-ui-library/node_modules/vite-plugin-linter/dist/index.js";
import tsConfigPaths from "file:///Users/austinisinghood/Developer/brandable-ui-library/node_modules/vite-tsconfig-paths/dist/index.mjs";

// package.json
var peerDependencies = {
  react: "^18.2.0",
  "react-dom": "^18.2.0"
};

// vite.config.ts
var { EsLinter, linterPlugin } = EsLint;
var vite_config_default = defineConfig((configEnv) => ({
  plugins: [
    tsConfigPaths(),
    linterPlugin({
      include: ["./src}/**/*.{ts,tsx}"],
      linters: [new EsLinter({ configEnv })]
    }),
    dts({
      include: ["src/components/"]
    }),
    react()
  ],
  build: {
    lib: {
      entry: resolve("src", "components/index.ts"),
      name: "BrandableUI",
      formats: ["es", "umd"],
      fileName: (format) => `brandable-ui-library.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(peerDependencies)]
    }
  },
  important: true
}));
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvYXVzdGluaXNpbmdob29kL0RldmVsb3Blci9icmFuZGFibGUtdWktbGlicmFyeVwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiL1VzZXJzL2F1c3RpbmlzaW5naG9vZC9EZXZlbG9wZXIvYnJhbmRhYmxlLXVpLWxpYnJhcnkvdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL1VzZXJzL2F1c3RpbmlzaW5naG9vZC9EZXZlbG9wZXIvYnJhbmRhYmxlLXVpLWxpYnJhcnkvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyByZXNvbHZlIH0gZnJvbSAnbm9kZTpwYXRoJ1xuXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IGR0cyBmcm9tICd2aXRlLXBsdWdpbi1kdHMnXG5pbXBvcnQgRXNMaW50IGZyb20gJ3ZpdGUtcGx1Z2luLWxpbnRlcidcbmltcG9ydCB0c0NvbmZpZ1BhdGhzIGZyb20gJ3ZpdGUtdHNjb25maWctcGF0aHMnXG5jb25zdCB7IEVzTGludGVyLCBsaW50ZXJQbHVnaW4gfSA9IEVzTGludFxuaW1wb3J0ICogYXMgcGFja2FnZUpzb24gZnJvbSAnLi9wYWNrYWdlLmpzb24nXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKChjb25maWdFbnYpID0+ICh7XG4gIHBsdWdpbnM6IFtcbiAgICB0c0NvbmZpZ1BhdGhzKCksXG4gICAgbGludGVyUGx1Z2luKHtcbiAgICAgIGluY2x1ZGU6IFsnLi9zcmN9LyoqLyoue3RzLHRzeH0nXSxcbiAgICAgIGxpbnRlcnM6IFtuZXcgRXNMaW50ZXIoeyBjb25maWdFbnYgfSldLFxuICAgIH0pLFxuICAgIGR0cyh7XG4gICAgICBpbmNsdWRlOiBbJ3NyYy9jb21wb25lbnRzLyddLFxuICAgIH0pLFxuICAgIHJlYWN0KCksXG4gIF0sXG4gIGJ1aWxkOiB7XG4gICAgbGliOiB7XG4gICAgICBlbnRyeTogcmVzb2x2ZSgnc3JjJywgJ2NvbXBvbmVudHMvaW5kZXgudHMnKSxcbiAgICAgIG5hbWU6ICdCcmFuZGFibGVVSScsXG4gICAgICBmb3JtYXRzOiBbJ2VzJywgJ3VtZCddLFxuICAgICAgZmlsZU5hbWU6IChmb3JtYXQpID0+IGBicmFuZGFibGUtdWktbGlicmFyeS4ke2Zvcm1hdH0uanNgLFxuICAgIH0sXG4gICAgcm9sbHVwT3B0aW9uczoge1xuICAgICAgZXh0ZXJuYWw6IFsuLi5PYmplY3Qua2V5cyhwYWNrYWdlSnNvbi5wZWVyRGVwZW5kZW5jaWVzKV0sXG4gICAgfSxcbiAgfSxcbiAgaW1wb3J0YW50OiB0cnVlLFxufSkpXG4iXSwKICAibWFwcGluZ3MiOiAiO0FBQWlWLFNBQVMsZUFBZTtBQUV6VyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sWUFBWTtBQUNuQixPQUFPLG1CQUFtQjs7Ozs7Ozs7O0FBQzFCLElBQU0sRUFBRSxVQUFVLGFBQWEsSUFBSTtBQUduQyxJQUFPLHNCQUFRLGFBQWEsQ0FBQyxlQUFlO0FBQUEsRUFDMUMsU0FBUztBQUFBLElBQ1AsY0FBYztBQUFBLElBQ2QsYUFBYTtBQUFBLE1BQ1gsU0FBUyxDQUFDLHNCQUFzQjtBQUFBLE1BQ2hDLFNBQVMsQ0FBQyxJQUFJLFNBQVMsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUFBLElBQ3ZDLENBQUM7QUFBQSxJQUNELElBQUk7QUFBQSxNQUNGLFNBQVMsQ0FBQyxpQkFBaUI7QUFBQSxJQUM3QixDQUFDO0FBQUEsSUFDRCxNQUFNO0FBQUEsRUFDUjtBQUFBLEVBQ0EsT0FBTztBQUFBLElBQ0wsS0FBSztBQUFBLE1BQ0gsT0FBTyxRQUFRLE9BQU8scUJBQXFCO0FBQUEsTUFDM0MsTUFBTTtBQUFBLE1BQ04sU0FBUyxDQUFDLE1BQU0sS0FBSztBQUFBLE1BQ3JCLFVBQVUsQ0FBQyxXQUFXLHdCQUF3QjtBQUFBLElBQ2hEO0FBQUEsSUFDQSxlQUFlO0FBQUEsTUFDYixVQUFVLENBQUMsR0FBRyxPQUFPLEtBQWlCLGdCQUFnQixDQUFDO0FBQUEsSUFDekQ7QUFBQSxFQUNGO0FBQUEsRUFDQSxXQUFXO0FBQ2IsRUFBRTsiLAogICJuYW1lcyI6IFtdCn0K
