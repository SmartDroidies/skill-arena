// module.exports = function(api) {
//   api.cache(true);
//   return {
//     presets: ["babel-preset-expo"],
//   };
// };

module.exports = {
  presets: ['@babel/preset-env'],
  env: {
    test: {
      plugins: ["@babel/plugin-transform-runtime"]
    }
  }
};