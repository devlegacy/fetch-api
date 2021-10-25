const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
class AlterManifestWebpackPlugin {
  constructor(manifest) {
    this.manifest = manifest;
  }

  /**
   * @param {import('webpack').Compiler} compiler
   */
  apply(compiler) {
    const webpack = compiler.webpack;
    const Compilation = webpack.Compilation;

    const publicPath = compiler.options.output.publicPath;

    compiler.hooks.initialize.tap('AlterManifestWebpackPlugin', () => {
      compiler.hooks.thisCompilation.tap('AlterManifestWebpackPlugin', (compilation) => {
        compilation.hooks.processAssets.tap(
          {
            name: 'AlterManifestWebpackPlugin',
            stage: Compilation.PROCESS_ASSETS_STAGE_ADDITIONS, // see below for more stages
          },
          (assets) => {
            if (assets['manifest.json'] && !assets['manifest.webmanifest']) {
              assets['manifest.webmanifest'] = assets['manifest.json'];
            }
          }
        );
      });
      compiler.hooks.compilation.tap('AlterManifestWebpackPlugin', (compilation) => {
        // Static Plugin interface |compilation |HOOK NAME | register listener
        HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync(
          'AlterManifestWebpackPlugin', // <-- Set a meaningful name here for stacktraces
          (data, cb) => {
            // Manipulate the content
            data.html = data.html.replace(
              '<link rel="manifest"',
              `<link rel="manifest" href="${publicPath}manifest.webmanifest"><link rel="manifest"`
            );
            // Tell webpack to move on
            cb(null, data);
          }
        );
      });
    });
  }
}
module.exports = AlterManifestWebpackPlugin;
