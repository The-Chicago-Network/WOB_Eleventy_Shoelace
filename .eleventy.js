module.exports = function(eleventyConfig) {
  // Copy the `img` and `css` folders to the output
  eleventyConfig.addPassthroughCopy("assets/images");
  eleventyConfig.addPassthroughCopy("assets/css");
  eleventyConfig.addPassthroughCopy("assets/js");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("**/profileMaker/**");
  eleventyConfig.ignores.add("**/node_modules/**");
  eleventyConfig.ignores.add("**/assets/images/headshots/originals/**");
  eleventyConfig.addCollection("profiles", function(collection) {
        return collection.getFilteredByGlob("**/profiles/*.md");
    });
  eleventyConfig.setLiquidOptions({
    jsTruthy: true
  });
  eleventyConfig.addLiquidShortcode("encodeIt", function(string) {
      return encodeURIComponent(string);admin
    });
  eleventyConfig.addLiquidShortcode("searchBio", function(string) {
      return string.replace(/'/g, "/'").replace(/"/g, '/"').replace("<br />", "");
    });
  // Pass this an object to parse (such as a YAML attribute) for debugging purposes
  eleventyConfig.addLiquidShortcode("returnString", function(object) {
      return JSON.stringify(object);
    });
}

