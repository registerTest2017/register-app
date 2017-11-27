import fs from 'fs';
import webpack from 'webpack';
import gutil from 'gutil';
import ncp from 'ncp';
import { ln, mkdir } from 'shelljs';
import webpackConfig from './webpack.build.config';
import config from './config';

const cp = ncp.ncp;
cp.limit = 16;

const paths = config.UTILS_PATH;
const localContentPath = paths.base(config.DIST_PATH, 'content');
mkdir('-p', paths.base(config.DIST_PATH));

const contentLoc = process.env.LOCAL_CONTENT_URI;
if (contentLoc) {
    ln('-s', contentLoc, localContentPath);
}

const compiler = webpack(webpackConfig);

compiler.run((err, stats) => {
    if (err) {
        gutil.log(err);
        throw new gutil.PluginError('webpack:build', err);
    }
    const execEnv = process.env.EXEC_ENV;
    if (execEnv === 'staging') {
        cp(`${paths.base('server/static')}`, `${paths.base('build/static')}`, (err) => {
            if (err) {
                gutil.log(err);
                throw new gutil.PluginError('webpack:build', err);
            }
            gutil.log('static mock copied.');
        });
    }
    if (contentLoc) {
        fs.unlinkSync(localContentPath);
    }
    gutil.log('[webpack:build]', stats.toString({
        chunks: false, // Makes the build much quieter
        colors: true
    }));
});

