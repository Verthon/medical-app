const webpack = require("webpack");
const { ModuleFederationPlugin } = webpack.container;
const deps = require("./package.json").dependencies;

const buildDate = new Date().toLocaleString();

module.exports = function override(config, env) {
  return {
    ...config,
    plugins: [
      ...config.plugins,
      new webpack.EnvironmentPlugin({ BUILD_DATE: buildDate }),
      new ModuleFederationPlugin({
        name: "shell",
        remotes: {
          "@med-mfe/doctors": "doctors@http://localhost:3001/remoteEntry.js",
          "@med-mfe/diagnostics": "diagnostics@http://localhost:3002/remoteEntry.js"
        },
        // shared: {
        //   ...deps,
        //   react: {
        //     singleton: true,
        //     eager: true,
        //     requiredVersion: deps.react
        //   },
        //   "react-dom": {
        //     singleton: true,
        //     eager: true,
        //     requiredVersion: deps["react-dom"],
        //   },
        // },
      }),
    ]
  };
}
