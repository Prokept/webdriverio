import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
    test: {
        testTimeout: 1000 * 60,
        include: [path.join(__dirname, '**', '*.test.ts')]
    }
})