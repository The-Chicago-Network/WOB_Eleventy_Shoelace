module.exports = function (eleventyConfig) {
  // Copy folders to the output
  eleventyConfig.addPassthroughCopy("assets/");
  eleventyConfig.addPassthroughCopy("admin");
  eleventyConfig.addPassthroughCopy("node_modules/@orama");

  // Ignore during site generation:
  eleventyConfig.ignores.add("README.md");
  eleventyConfig.ignores.add("**/profileMaker/**");
  eleventyConfig.ignores.add("**/assets/images/headshots/originals/**");

  // Create "Profiles" collection
  eleventyConfig.addCollection("profiles", function (collection) {
    return collection.getFilteredByGlob("**/profiles/*.md");
  });

  // Use JS truthiness in Liquid
  eleventyConfig.setLiquidOptions({
    jsTruthy: true,
  });

  // Custom Shortcodes
  eleventyConfig.addLiquidShortcode("encodeIt", function (string) {
    return encodeURIComponent(string);
  });
  eleventyConfig.addLiquidShortcode("searchBio", function (string) {
    return string.replace(/'/g, "/'").replace(/"/g, '/"').replace("<br />", "");
  });
  // Pass this an object to parse (such as a YAML attribute) for debugging purposes
  eleventyConfig.addLiquidShortcode("returnString", function (object) {
    return JSON.stringify(object);
  });
};
