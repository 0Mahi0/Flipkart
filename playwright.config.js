const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
    testDir: './tests',

    use: {
        browserName: 'chromium',
        headless: true,
        screenshot: 'only-on-failure'
    },

    reporter: [['html']]
});