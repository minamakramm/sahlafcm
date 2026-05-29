// vite.config.js
import { defineConfig } from "file:///D:/college/sem%204/ip/sahla/node_modules/vite/dist/node/index.js";
import react from "file:///D:/college/sem%204/ip/sahla/node_modules/@vitejs/plugin-react/dist/index.js";
import path from "path";
var __vite_injected_original_dirname = "D:\\college\\sem 4\\ip\\sahla";
var vite_config_default = defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__vite_injected_original_dirname, "./src")
    }
  },
  server: {
    port: 3e3,
    open: true
  },
  build: {
    // Disable sourcemap in production for smaller bundles
    sourcemap: false,
    // Target modern browsers for smaller output
    target: "es2020",
    // Minify with esbuild (faster than terser)
    minify: "esbuild",
    // Enable CSS code splitting — each lazy route gets its own CSS
    cssCodeSplit: true,
    // Preload dynamic imports for faster navigation
    modulePreload: {
      polyfill: true
    },
    rollupOptions: {
      output: {
        manualChunks: {
          // Core React — cached long-term, ~140KB
          vendor: ["react", "react-dom"],
          // Router — separate chunk, changes rarely, ~30KB
          router: ["react-router-dom"],
          // Supabase — large, changes rarely, ~100KB
          supabase: ["@supabase/supabase-js"],
          // State management — ~40KB
          state: ["zustand", "@tanstack/react-query"],
          // i18n — separate chunk, ~50KB
          i18n: ["i18next", "react-i18next", "i18next-browser-languagedetector"],
          // Framer motion — heavy (~120KB), used widely but can load after first paint
          motion: ["framer-motion"],
          // GSAP + Lenis — scroll animation engine (~80KB)
          gsap: ["gsap", "@gsap/react", "lenis"],
          // ─── HEAVY LIBS: split into on-demand chunks ───
          // Mermaid — ~1.5MB! Only used in DiagramBlock (rare)
          mermaid: ["mermaid"],
          // Highlight.js — ~100KB, only used in CodeBlock
          hljs: ["highlight.js"],
          // KaTeX — ~250KB, only used in mathRenderer
          katex: ["katex"],
          // Recharts — ~500KB, only used in admin analytics
          charts: ["recharts"],
          // PDF generation — ~600KB, only used when clicking "Download PDF"
          pdf: ["jspdf", "html2canvas"]
        }
      }
    },
    // Increase chunk size warning limit
    chunkSizeWarningLimit: 600
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxjb2xsZWdlXFxcXHNlbSA0XFxcXGlwXFxcXHNhaGxhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxjb2xsZWdlXFxcXHNlbSA0XFxcXGlwXFxcXHNhaGxhXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9jb2xsZWdlL3NlbSUyMDQvaXAvc2FobGEvdml0ZS5jb25maWcuanNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHJlYWN0IGZyb20gJ0B2aXRlanMvcGx1Z2luLXJlYWN0J1xuaW1wb3J0IHBhdGggZnJvbSAncGF0aCdcblxuZXhwb3J0IGRlZmF1bHQgZGVmaW5lQ29uZmlnKHtcbiAgcGx1Z2luczogW3JlYWN0KCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogcGF0aC5yZXNvbHZlKF9fZGlybmFtZSwgJy4vc3JjJyksXG4gICAgfSxcbiAgfSxcbiAgc2VydmVyOiB7XG4gICAgcG9ydDogMzAwMCxcbiAgICBvcGVuOiB0cnVlLFxuICB9LFxuICBidWlsZDoge1xuICAgIC8vIERpc2FibGUgc291cmNlbWFwIGluIHByb2R1Y3Rpb24gZm9yIHNtYWxsZXIgYnVuZGxlc1xuICAgIHNvdXJjZW1hcDogZmFsc2UsXG4gICAgLy8gVGFyZ2V0IG1vZGVybiBicm93c2VycyBmb3Igc21hbGxlciBvdXRwdXRcbiAgICB0YXJnZXQ6ICdlczIwMjAnLFxuICAgIC8vIE1pbmlmeSB3aXRoIGVzYnVpbGQgKGZhc3RlciB0aGFuIHRlcnNlcilcbiAgICBtaW5pZnk6ICdlc2J1aWxkJyxcbiAgICAvLyBFbmFibGUgQ1NTIGNvZGUgc3BsaXR0aW5nIFx1MjAxNCBlYWNoIGxhenkgcm91dGUgZ2V0cyBpdHMgb3duIENTU1xuICAgIGNzc0NvZGVTcGxpdDogdHJ1ZSxcbiAgICAvLyBQcmVsb2FkIGR5bmFtaWMgaW1wb3J0cyBmb3IgZmFzdGVyIG5hdmlnYXRpb25cbiAgICBtb2R1bGVQcmVsb2FkOiB7XG4gICAgICBwb2x5ZmlsbDogdHJ1ZSxcbiAgICB9LFxuICAgIHJvbGx1cE9wdGlvbnM6IHtcbiAgICAgIG91dHB1dDoge1xuICAgICAgICBtYW51YWxDaHVua3M6IHtcbiAgICAgICAgICAvLyBDb3JlIFJlYWN0IFx1MjAxNCBjYWNoZWQgbG9uZy10ZXJtLCB+MTQwS0JcbiAgICAgICAgICB2ZW5kb3I6IFsncmVhY3QnLCAncmVhY3QtZG9tJ10sXG4gICAgICAgICAgLy8gUm91dGVyIFx1MjAxNCBzZXBhcmF0ZSBjaHVuaywgY2hhbmdlcyByYXJlbHksIH4zMEtCXG4gICAgICAgICAgcm91dGVyOiBbJ3JlYWN0LXJvdXRlci1kb20nXSxcbiAgICAgICAgICAvLyBTdXBhYmFzZSBcdTIwMTQgbGFyZ2UsIGNoYW5nZXMgcmFyZWx5LCB+MTAwS0JcbiAgICAgICAgICBzdXBhYmFzZTogWydAc3VwYWJhc2Uvc3VwYWJhc2UtanMnXSxcbiAgICAgICAgICAvLyBTdGF0ZSBtYW5hZ2VtZW50IFx1MjAxNCB+NDBLQlxuICAgICAgICAgIHN0YXRlOiBbJ3p1c3RhbmQnLCAnQHRhbnN0YWNrL3JlYWN0LXF1ZXJ5J10sXG4gICAgICAgICAgLy8gaTE4biBcdTIwMTQgc2VwYXJhdGUgY2h1bmssIH41MEtCXG4gICAgICAgICAgaTE4bjogWydpMThuZXh0JywgJ3JlYWN0LWkxOG5leHQnLCAnaTE4bmV4dC1icm93c2VyLWxhbmd1YWdlZGV0ZWN0b3InXSxcbiAgICAgICAgICAvLyBGcmFtZXIgbW90aW9uIFx1MjAxNCBoZWF2eSAofjEyMEtCKSwgdXNlZCB3aWRlbHkgYnV0IGNhbiBsb2FkIGFmdGVyIGZpcnN0IHBhaW50XG4gICAgICAgICAgbW90aW9uOiBbJ2ZyYW1lci1tb3Rpb24nXSxcbiAgICAgICAgICAvLyBHU0FQICsgTGVuaXMgXHUyMDE0IHNjcm9sbCBhbmltYXRpb24gZW5naW5lICh+ODBLQilcbiAgICAgICAgICBnc2FwOiBbJ2dzYXAnLCAnQGdzYXAvcmVhY3QnLCAnbGVuaXMnXSxcbiAgICAgICAgICAvLyBcdTI1MDBcdTI1MDBcdTI1MDAgSEVBVlkgTElCUzogc3BsaXQgaW50byBvbi1kZW1hbmQgY2h1bmtzIFx1MjUwMFx1MjUwMFx1MjUwMFxuICAgICAgICAgIC8vIE1lcm1haWQgXHUyMDE0IH4xLjVNQiEgT25seSB1c2VkIGluIERpYWdyYW1CbG9jayAocmFyZSlcbiAgICAgICAgICBtZXJtYWlkOiBbJ21lcm1haWQnXSxcbiAgICAgICAgICAvLyBIaWdobGlnaHQuanMgXHUyMDE0IH4xMDBLQiwgb25seSB1c2VkIGluIENvZGVCbG9ja1xuICAgICAgICAgIGhsanM6IFsnaGlnaGxpZ2h0LmpzJ10sXG4gICAgICAgICAgLy8gS2FUZVggXHUyMDE0IH4yNTBLQiwgb25seSB1c2VkIGluIG1hdGhSZW5kZXJlclxuICAgICAgICAgIGthdGV4OiBbJ2thdGV4J10sXG4gICAgICAgICAgLy8gUmVjaGFydHMgXHUyMDE0IH41MDBLQiwgb25seSB1c2VkIGluIGFkbWluIGFuYWx5dGljc1xuICAgICAgICAgIGNoYXJ0czogWydyZWNoYXJ0cyddLFxuICAgICAgICAgIC8vIFBERiBnZW5lcmF0aW9uIFx1MjAxNCB+NjAwS0IsIG9ubHkgdXNlZCB3aGVuIGNsaWNraW5nIFwiRG93bmxvYWQgUERGXCJcbiAgICAgICAgICBwZGY6IFsnanNwZGYnLCAnaHRtbDJjYW52YXMnXSxcbiAgICAgICAgfSxcbiAgICAgIH0sXG4gICAgfSxcbiAgICAvLyBJbmNyZWFzZSBjaHVuayBzaXplIHdhcm5pbmcgbGltaXRcbiAgICBjaHVua1NpemVXYXJuaW5nTGltaXQ6IDYwMCxcbiAgfSxcbn0pXG5cbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBeVEsU0FBUyxvQkFBb0I7QUFDdFMsT0FBTyxXQUFXO0FBQ2xCLE9BQU8sVUFBVTtBQUZqQixJQUFNLG1DQUFtQztBQUl6QyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTLENBQUMsTUFBTSxDQUFDO0FBQUEsRUFDakIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxLQUFLLFFBQVEsa0NBQVcsT0FBTztBQUFBLElBQ3RDO0FBQUEsRUFDRjtBQUFBLEVBQ0EsUUFBUTtBQUFBLElBQ04sTUFBTTtBQUFBLElBQ04sTUFBTTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE9BQU87QUFBQTtBQUFBLElBRUwsV0FBVztBQUFBO0FBQUEsSUFFWCxRQUFRO0FBQUE7QUFBQSxJQUVSLFFBQVE7QUFBQTtBQUFBLElBRVIsY0FBYztBQUFBO0FBQUEsSUFFZCxlQUFlO0FBQUEsTUFDYixVQUFVO0FBQUEsSUFDWjtBQUFBLElBQ0EsZUFBZTtBQUFBLE1BQ2IsUUFBUTtBQUFBLFFBQ04sY0FBYztBQUFBO0FBQUEsVUFFWixRQUFRLENBQUMsU0FBUyxXQUFXO0FBQUE7QUFBQSxVQUU3QixRQUFRLENBQUMsa0JBQWtCO0FBQUE7QUFBQSxVQUUzQixVQUFVLENBQUMsdUJBQXVCO0FBQUE7QUFBQSxVQUVsQyxPQUFPLENBQUMsV0FBVyx1QkFBdUI7QUFBQTtBQUFBLFVBRTFDLE1BQU0sQ0FBQyxXQUFXLGlCQUFpQixrQ0FBa0M7QUFBQTtBQUFBLFVBRXJFLFFBQVEsQ0FBQyxlQUFlO0FBQUE7QUFBQSxVQUV4QixNQUFNLENBQUMsUUFBUSxlQUFlLE9BQU87QUFBQTtBQUFBO0FBQUEsVUFHckMsU0FBUyxDQUFDLFNBQVM7QUFBQTtBQUFBLFVBRW5CLE1BQU0sQ0FBQyxjQUFjO0FBQUE7QUFBQSxVQUVyQixPQUFPLENBQUMsT0FBTztBQUFBO0FBQUEsVUFFZixRQUFRLENBQUMsVUFBVTtBQUFBO0FBQUEsVUFFbkIsS0FBSyxDQUFDLFNBQVMsYUFBYTtBQUFBLFFBQzlCO0FBQUEsTUFDRjtBQUFBLElBQ0Y7QUFBQTtBQUFBLElBRUEsdUJBQXVCO0FBQUEsRUFDekI7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
