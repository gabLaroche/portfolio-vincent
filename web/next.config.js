const withCSS = require('@zeit/next-css')
const withSass = require('@zeit/next-sass');
const withFonts = require('next-fonts');

/*const nextConfig = {};

module.exports = withFonts(withSass(nextConfig));*/


module.exports = withCSS(withFonts(withSass({
    webpack: function (config) {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|gif)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000,
                    name: '[name].[ext]'
                }
            }
        })
        return config
    }
})))