import fs from 'fs';
import WebpackDevServer from 'webpack-dev-server';
import webpack from 'webpack';
import { ln, mkdir, test } from 'shelljs';
import config from './config';
import webpackConfig from './webpack.dev.config';

const paths = config.UTILS_PATH;
const localContentPath = paths.base(config.DIST_PATH, 'content');
mkdir('-p', paths.base(config.DIST_PATH));

const contentLoc = process.env.LOCAL_CONTENT_URI;
if (contentLoc) {
    if (test('-e', localContentPath)) {
        fs.unlinkSync(localContentPath);
    }
    ln('-s', contentLoc, localContentPath);
}

const compiler = webpack(webpackConfig);
const devServerConfig = {
    contentBase: config.APP_PATH,
    headers: { 'Access-Control-Allow-Origin': '*' },
    historyApiFallback: true,
    quiet: false,
    noInfo: false,
    hot: true,
    inline: true,
    stats: { colors: true }
};

const server = new WebpackDevServer(compiler, devServerConfig);

server.listen(config.DEV_SERVER_PORT, config.HOST);
