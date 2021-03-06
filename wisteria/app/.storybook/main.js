const path = require('path');

module.exports = {
    stories: ['../stories/*.stories.[tj]s'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-actions',
        '@storybook/addon-storysource',
        '@storybook/addon-knobs',
    ],
    webpackFinal: async (config, { configType }) => {
        config.module.rules.push({
            test: /\.scss$/,
            use: ['style-loader', 'css-loader', 'sass-loader'],
            include: path.resolve(__dirname, '../'),
        });
        let rule = config.module.rules.find(r =>
            r.test && r.test.toString().includes('svg') && r.loader && r.loader.includes('file-loader')
        );
        rule.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
        config.module.rules.push({
            test: /\.svg(\?.*)?$/,
            use: ['vue-svg-loader'],
            resolve: {
                alias: {
                    '@/static': path.resolve(__dirname, '../static'),
                },
            },
        });
        config.module.rules.push({
            test: /\.ts$/,
            exclude: /node_modules/,
            use: [{
                loader: 'ts-loader',
                options: {
                    appendTsSuffixTo: [/\.vue$/],
                    transpileOnly: true
                },
            }],
        });
        config.module.rules.push({
            test: /\.(ts|vue)$/,
            resolve: {
                alias: {
                    '@/static': path.resolve(__dirname, '../static'),
                },
            },
        });
        return config;
    },
};
