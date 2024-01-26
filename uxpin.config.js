module.exports = {
  components: {
    categories: [
      {
        name: "Atoms",
        include: ["components/Button/Button.jsx", "components/Card/Card.jsx"],
      },
    ],
    // wrapper: "src/Wrapper/UXPinWrapper.js",
    webpackConfig: "webpack.uxpin.config.js",
  },
  name: "New Design System",
};
