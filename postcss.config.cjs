const autoprefixer = require("autoprefixer");
const postcssCascadeLayers = require('@csstools/postcss-cascade-layers');

const config = {
  plugins: [
    autoprefixer,
    postcssCascadeLayers()
  ],
};

module.exports = config;
