"use strict";

/*
  Reusable Webpack config elements
  Initial goal: avoid config duplication between the main webpack config and the storybook webpack config
*/

/*
  Tailwind config
*/
const tailwindWebpackRule = {
  test: /\.css$|\.scss$|\.sass$|\.less$|\.styl$/,
  loader: "postcss-loader",
};

exports.tailwindWebpackRule = tailwindWebpackRule;