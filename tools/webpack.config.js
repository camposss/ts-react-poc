module.exports = (distRoot, optimize) => ({
  mode: "production",
  optimization: {
    minimize: !!optimize,
  },
  entry: "./src/index.tsx",
  output: {
    path: distRoot,
    filename: optimize ? "ts-react-poc.min.js" : "ts-react-poc.js",
    library: "TSReactPOC",
    libraryTarget: "umd",
  },
  module: {
    rules: [
      {
        test: /\.[tj]sx?$/,
        use: {
          loader: "babel-loader",
          options: {
            cacheDirectory: true,
            envName: `dist-${optimize ? "prod" : "dev"}`,
          },
        },
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx", ".css"],
  },
  externals: {
    react: {
      root: "React",
      commonjs2: "react",
      commonjs: "react",
      amd: "react",
    },
    "react-dom": {
      root: "ReactDOM",
      commonjs2: "react-dom",
      commonjs: "react-dom",
      amd: "react-dom",
    },
  },
});
