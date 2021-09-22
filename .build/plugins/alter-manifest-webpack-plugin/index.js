const HtmlWebpackPlugin = require('html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin');
class AlterManifestWebpackPlugin {
  constructor(manifest) {
    this.manifest = manifest;
  }

  apply(compiler) {
    compiler.hooks.compilation.tap('AlterManifestWebpackPlugin', (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeEmit.tapAsync('AlterManifestWebpackPlugin', (data, cb) => {
        if (data.html) {
          // console.log(data.html.includes(`<meta name="theme-color" content="${this.manifest.background}">`));
          // console.log(
          //   data.html.includes(`<meta name="msapplication-TileColor" content="${this.manifest.background}">`)
          // );
          // console.log(data.html);
          data.html = data.html
            .replace(
              `<meta name="theme-color" content="${this.manifest.background}">`,
              `<meta name="theme-color" content="${this.manifest.theme_color}">`
            )
            .replace(
              `<meta name="msapplication-TileColor" content="${this.manifest.background}">`,
              `<meta name="msapplication-TileColor" content="${this.manifest.theme_color}">`
            );
          // .split('>')
          // .filter((html) => html.length > 0)
          // .map((html) => {
          //   console.log(html);
          //   // Repair split
          //   html += '>';
          //   // Alter meta theme color, change from background color to theme color
          //   html =
          //     html == `<meta name="theme-color" content="${this.manifest.background}">`
          //       ? `<meta name="theme-color" content="${this.manifest.theme_color}">`
          //       : html;
          //   // Alter meta msapplication tile color, change from background color to theme color
          //   html =
          //     html == `<meta name="msapplication-TileColor" content="${this.manifest.background}">`
          //       ? `<meta name="msapplication-TileColor" content="${this.manifest.theme_color}">`
          //       : html;
          //   // Alter manifest, from manifest.json to manifest.webmanifest, according to example in: https://www.w3.org/TR/appmanifest/#using-a-link-element-to-link-to-a-manifest
          //   // html = /(rel\=.{1}manifest.{1}.*)/.test(html)
          //   //   ? html.replace('manifest.json', 'manifest.webmanifest')
          //   //   : html;
          //   return html;
          // })
          // .reduce((prev, next) => {
          //   // Convert to string
          //   return `${prev}${next}`;
          // });
        }

        cb(null, data);
      });
    });

    // compiler.hooks.make.tapAsync(
    //   'AlterManifestWebpackPlugin',
    //   (compilation, callback) => {
    //     console.log(compilation.hooks.faviconsWebpackPlugin);
    //     console.log(compilation.hooks.faviconsWebpackPluginMake);
    //     console.log(compilation.hooks.faviconsWebpackPluginCompile);
    //     console.log(compilation.hooks.faviconsWebpackPluginEmit);
    //     console.log(compilation.hooks.faviconsWebpackPluginHtmlPluginBefore);

    //     console.log(compilation.hooks.FaviconsWebpackPlugin);
    //     console.log(compilation.hooks.FaviconsWebpackPluginMake);
    //     console.log(compilation.hooks.FaviconsWebpackPluginCompile);
    //     console.log(compilation.hooks.FaviconsWebpackPluginEmit);
    //     console.log(compilation.hooks.FaviconsWebpackPluginHtmlPluginBefore);
    //     // compilation.hooks.webappWebpackPluginBeforeEmit.tapAsync(
    //     //   'B',
    //     //   (result, callback) => {
    //     //     // The result of favicons library can be modified here
    //     //     // and it will be returned to WebApp Plugin to be emitted.
    //     //     // Add your custom functions below
    //     //     console.log(result);
    //     //     // Return the custom result
    //     //     return callback(null, result);
    //     //   }
    //     // );
    //     return callback();
    //   }
    // );
  }
}
module.exports = AlterManifestWebpackPlugin;
