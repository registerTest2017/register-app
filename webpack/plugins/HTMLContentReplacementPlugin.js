import { replace, isFunction, isRegExp } from 'lodash';
// A custom webpack plugin extends the behaviour of HtmlWebpackPlugin.
class HTMLContentReplacementPlugin {
    constructor ({ execSteps = [], enabled = false }) {
        this.execSteps = execSteps;
        this.enabled = enabled
        this.apply = this.apply.bind(this);
    }

    apply (compiler) {
        compiler.plugin('compilation', (compilation) => {
            compilation.plugin('html-webpack-plugin-after-html-processing', (htmlPluginData, callback) => {
                if (this.enabled) {
                    const execSteps = this.execSteps;
                    for (const step of execSteps) {
                        const { match, replacement } = step;
                        if (!match || !replacement || !isRegExp(match) || !isFunction(replacement)) {
                            throw new Error('Invalid configuration for HTMLContentReplacementPlugin.');
                        }
                        htmlPluginData.html = replace(htmlPluginData.html, match, replacement);
                    }
                }
                callback(null, htmlPluginData);
            });
        });
    }
}

export default HTMLContentReplacementPlugin;
