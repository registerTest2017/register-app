import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import WarnCaseSensitiveModulesPlugin from 'webpack/lib/WarnCaseSensitiveModulesPlugin';
import Visualizer from 'webpack-visualizer-plugin';
import SimpleProgressPlugin from 'webpack-simple-progress-plugin';
import constants from '../config/constants';
import HTMLContentReplacementPlugin from './plugins/HTMLContentReplacementPlugin';
import config from './config';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

const paths = config.UTILS_PATH;

// https://github.com/webpack/webpack/issues/2362
WarnCaseSensitiveModulesPlugin.prototype.apply = function () {};

const webpackConfig = {
    bail: true,
    module: {},
    plugins: [
        new CaseSensitivePathsPlugin(),
        new SimpleProgressPlugin(),
        new StyleLintPlugin(),
        new HtmlWebpackPlugin({
            template: `${paths.client('index.html.hbs')}`,
            hash: false,
            filename: 'search.html',
            chunks: ['polyfill', 'app'],
            chunksSortMode: (chunkA, chunkB) => {
                return (chunkA.names[0] < chunkB.names[0]) ? 1 : -1;
            },
            inject: 'body',
            minify: {
                collapseWhitespace: false
            }
        }),
        new HTMLContentReplacementPlugin({
            execSteps: [{
                match: /\/polyfill.(.*?).js/,
                replacement: (content) => {
                    return content.substring(1);
                }
            }, {
                match: /\/app.(.*?).js/,
                replacement: (content) => {
                    return content.substring(1);
                }
            }],
            enabled: process.env.CORDOVA_SUPPORT_ENABLED
        }),
        new webpack.DefinePlugin({
            ...constants,
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'production'),
            'process.env.REDUX_DEVTOOLS_PORT': process.env.REDUX_DEVTOOLS_PORT ? JSON.stringify(process.env.REDUX_DEVTOOLS_PORT) : '8000'
        }),
        new ExtractTextPlugin({
            filename: '[name].[hash].css',
            allChunks: true
        }),
        new webpack.optimize.UglifyJsPlugin(),
        new Visualizer()
    ]
};

const APP_ENTRY_PATH = `${paths.base(config.APP_PATH)}/${config.APP_MAIN}`;

webpackConfig.entry = {
    polyfill: ['babel-polyfill'],
    app: APP_ENTRY_PATH
};

// https://github.com/webpack/webpack/issues/943
webpackConfig.resolve = {
    modules: [
        paths.base(config.APP_PATH),
        paths.base('node_modules')
    ],
    alias: {
        envConfig: paths.base('config', process.env.EXEC_ENV || 'production'),
        localContent: paths.base('content')
    }
};

webpackConfig.output = {
    filename: `[name].[hash].js`,
    path: paths.base(config.DIST_PATH),
    publicPath: config.COMPILER_PUBLIC_PATH
};

// Webpack loader settings
let scssLoader = ['css-loader?', 'modules', 'importLoaders=1', 'minimize'];
let cssLoader = ['css-loader?', 'modules', 'minimize'];

if (process.env.EXEC_ENV !== 'production') {
    scssLoader.push('localIdentName=[local]:[hash:base64]');
    cssLoader.push('localIdentName=[local]:[hash:base64]');
}

scssLoader = scssLoader.join('&');
cssLoader = cssLoader.join('&');

const jsLoaders = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [/src/, /config/, /content/],
        use: ['babel-loader', 'eslint-loader']
    }
];

const styleLoaders = [
    {
        test: /\.scss$/,
        use: [
            'style-loader',
            scssLoader,
            'postcss-loader',
            'sass-loader'
        ]
    },
    {
        test: /\.css$/,
        use: [
            'style-loader',
            cssLoader,
            'postcss-loader'
        ]
    }
];

const fontLoaders = [
    {
        test: /\.(woff|woff2|eot|ttf|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
            name: 'fonts/[name].[ext]',
            limit: '10000'
        }
    }
];

const imageLoader = [
    {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        exclude: /node_modules/,
        loader: 'url-loader',
        options: {
            name: 'img/img-[hash:6].[ext]',
            limit: '5000'
        }
    }
];

const jsonLoaders = [
    {
        test: /\.json$/,
        use: ['json-loader']
    }
];

const handlebarsLoaders = [
    {
        test: /\.hbs$/,
        loader: 'handlebars-loader'
    }
];

webpackConfig.module.loaders = [
    ...jsLoaders,
    ...styleLoaders,
    ...fontLoaders,
    ...imageLoader,
    ...jsonLoaders,
    ...handlebarsLoaders
];

webpackConfig.module.loaders.filter((loader) =>
    loader.loaders && loader.loaders.find((name) => /css/.test(name.split('?')[0]))
).forEach((loader) => {
    const [first, ...rest] = loader.loaders;
    loader.loader = ExtractTextPlugin.extract({
        fallback: first,
        use: rest
    });
    delete loader.loaders;
});

export default webpackConfig;
