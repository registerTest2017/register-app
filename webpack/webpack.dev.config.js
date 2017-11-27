import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import WarnCaseSensitiveModulesPlugin from 'webpack/lib/WarnCaseSensitiveModulesPlugin';
import SimpleProgressPlugin from 'webpack-simple-progress-plugin';
import config from './config';
import CaseSensitivePathsPlugin from 'case-sensitive-paths-webpack-plugin';

const paths = config.UTILS_PATH;

process.traceDeprecation = true;

// https://github.com/webpack/webpack/issues/2362
WarnCaseSensitiveModulesPlugin.prototype.apply = function () {};

const webpackConfig = {
    module: {},
    plugins: [
        new CaseSensitivePathsPlugin(),
        new webpack.LoaderOptionsPlugin({
            debug: true
        }),
        new StyleLintPlugin(),
        new HtmlWebpackPlugin({
            template: `${paths.client('index.html.hbs')}`,
            hash: false,
            filename: 'index.html',
            chunks: ['polyfill', 'app'],
            chunksSortMode: (chunkA, chunkB) => {
                return (chunkA.names[0] < chunkB.names[0]) ? 1 : -1;
            },
            inject: 'body',
            minify: {
                collapseWhitespace: false
            },
            REACT_DEVTOOLS_URL: `<script src="http://${config.HOST}:${config.REACT_DEVTOOLS_PORT}"></script>`
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('development'),
            'process.env.REDUX_DEVTOOLS_PORT': process.env.REDUX_DEVTOOLS_PORT ? JSON.stringify(process.env.REDUX_DEVTOOLS_PORT) : '8000'
        }),
        new webpack.HotModuleReplacementPlugin(),
        new SimpleProgressPlugin()
    ]
};

const APP_ENTRY_PATH = `${paths.base(config.APP_PATH)}/${config.APP_MAIN}`;

webpackConfig.entry = {
    polyfill: ['babel-polyfill'],
    app: [
        `webpack-dev-server/client?http://${config.HOST}:${config.DEV_SERVER_PORT}/`,
        'webpack/hot/only-dev-server',
        APP_ENTRY_PATH
    ]
};

// https://github.com/webpack/webpack/issues/943
webpackConfig.resolve = {
    modules: [
        paths.base(config.APP_PATH),
        paths.base('node_modules')
    ],
    alias: {
        envConfig: paths.base('config', process.env.EXEC_ENV || 'development'),
        localContent: paths.base('content')
        // 'group-digital-wealth-api-client': 'C:\\www\\wealth\\group-digital-wealth-api-client\\src\\index.js'
    }
};

webpackConfig.output = {
    filename: `[name].[hash].js`,
    path: paths.base(config.DIST_PATH),
    publicPath: `http://${config.HOST}:${config.DEV_SERVER_PORT}/`
};

// Webpack loader settings

let scssLoader = ['css-loader?', 'modules', 'localIdentName=[local]:[hash:base64]', 'importLoaders=1', 'sourceMap'];
let cssLoader = ['css-loader?', 'modules', 'localIdentName=[local]:[hash:base64]', 'sourceMap'];

webpackConfig.devtool = 'source-map';

scssLoader = scssLoader.join('&');
cssLoader = cssLoader.join('&');

const jsLoaders = [
    {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        include: [/src/, /config/, /content/],
        use: ['react-hot-loader', 'babel-loader?retainLines=true', 'eslint-loader']
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

webpackConfig.module.rules = [
    ...jsLoaders,
    ...styleLoaders,
    ...fontLoaders,
    ...imageLoader,
    ...jsonLoaders,
    ...handlebarsLoaders
];

export default webpackConfig;
