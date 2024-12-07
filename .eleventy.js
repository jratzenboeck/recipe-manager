module.exports = function (eleventyConfig) {
  // Copy CSS and JavaScript files to the output folder
  eleventyConfig.addPassthroughCopy('src/scripts');

  return {
    dir: {
      input: 'src',
      output: '_site',
    },
  };
};
