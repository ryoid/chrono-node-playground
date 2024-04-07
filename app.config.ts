import { defineConfig } from "@solidjs/start/config";

export default defineConfig({
    server: {
        routeRules: {
            "/**": { prerender: true },
        }
    },
});
