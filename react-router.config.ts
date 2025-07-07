import type { Config } from "@react-router/dev/config";

export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: true, // pre-render all static routes
  // appDirectory: ".", // Use current directory if you don't have src
} satisfies Config;
