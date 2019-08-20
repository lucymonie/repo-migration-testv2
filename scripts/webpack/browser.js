const webpack = require('webpack');
const AssetsManifest = require('webpack-assets-manifest');
const FriendlyErrorsWebpackPlugin = require('friendly-errors-webpack-plugin');
const chalk = require('chalk');
const { siteName } = require('../frontend/config');

const friendlyErrorsWebpackPlugin = new FriendlyErrorsWebpackPlugin({
    compilationSuccessInfo: {
        messages: [
            `DEV server running at ${chalk.blue.underline(
                'http://localhost:3030',
            )}`,
        ],
    },
});

const PROD = process.env.NODE_ENV === 'production';
const DEV = process.env.NODE_ENV === 'development';

const name = PROD ? `[name].[chunkhash].js` : `[name].js`;

// used to stop multiple compilers overwriting other compiler's data
const manifestData = {};

const scriptPath = package =>
    [
        `./packages/frontend/web/browserNew/${package}/init.ts`,
        DEV &&
            'webpack-hot-middleware/client?name=browser&overlayWarnings=true',
    ].filter(Boolean);

module.exports = ({ page }) => ({
    entry: {
        raven: scriptPath('raven'),
        ga: scriptPath('ga'),
        ophan: scriptPath('ophan'),
        react: scriptPath('react'),
    },
    output: {
        filename: name,
        chunkFilename: name,
    },
    plugins: [
        PROD &&
            new AssetsManifest({
                writeToDisk: true,
                assets: manifestData,
            }),
        DEV && new webpack.HotModuleReplacementPlugin(),
        DEV && new webpack.NamedModulesPlugin(),
        DEV && friendlyErrorsWebpackPlugin,
    ].filter(Boolean),
});
