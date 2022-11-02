module.exports = {
  verbose: true,
  collectCoverage: true,
  collectCoverageFrom: ["./src/**"],
  coverageThreshold: {
    global: {
      lines: 90,
    },
  },
  preset: "jest-expo",
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  transformIgnorePatterns: [
    "node_modules/(?!((jest-)?react-native|@react-native(-community)?)|expo(nent)?|@expo(nent)?/.*|@expo-google-fonts/.*|react-navigation|@react-navigation/.*|@unimodules/.*|unimodules|sentry-expo|native-base|react-native-svg)",
  ],
};
