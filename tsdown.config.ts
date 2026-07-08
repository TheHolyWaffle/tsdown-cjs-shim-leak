import { defineConfig } from 'tsdown';

export default defineConfig({
    entry: ['src/index.ts'],
    format: ['cjs'],
    // Both options are required to trigger the bug. Removing either one
    // produces valid CommonJS.
    shims: true,
    unbundle: true,
    dts: false,
    sourcemap: false,
});
