const defaultConfig = require("@wordpress/scripts/config/webpack.config");
const webpack = require("webpack");

console.log("PREMIUM BUILD:", process.env.WPSUITE_PREMIUM === "true");

module.exports = function () {
  const config = {
    ...defaultConfig,
    externals: {
      ...defaultConfig.externals,
      "@smart-cloud/aws-amplify-ui": "WpSuiteAmplify",
      "@smart-cloud/aws-amplify-ui-react": "WpSuiteAmplify",
      "@smart-cloud/aws-amplify-ui-react-core": "WpSuiteAmplify",
      "@mantine/core": "WpSuiteMantine",
      "@mantine/form": "WpSuiteMantine",
      "@mantine/hooks": "WpSuiteMantine",
      "@mantine/modals": "WpSuiteMantine",
      "@mantine/notifications": "WpSuiteMantine",
      "country-data-list": "WpSuiteAmplify",
      "crypto": "WpSuiteCrypto",
      "jose": "WpSuiteJose",
    },
    plugins: [
      ...defaultConfig.plugins.filter(
        (plugin) => plugin.constructor.name !== "RtlCssPlugin"
      ),
      new webpack.EnvironmentPlugin({
        WPSUITE_PREMIUM: false,
      }),
    ],
  };

  return config;
};
