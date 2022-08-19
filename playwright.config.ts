import { PlaywrightTestConfig } from '@playwright/test'

const config: PlaywrightTestConfig = {
    outputDir: './test-output/test-results',
    expect: {
        timeout: 30000
    },
    use: {
        browserName: 'firefox',
        viewport: {
            width: 1366,
            height: 768,
        },
        screenshot: 'only-on-failure',
        video: 'on',
        trace: 'on',
    },
    reporter: 'html'
}
export default config