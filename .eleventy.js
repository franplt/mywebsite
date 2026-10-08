import { DateTime } from "luxon";

export default function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "src/assets": "assets" });
  eleventyConfig.addPassthroughCopy({ "src/CNAME": "CNAME" });
  eleventyConfig.addPassthroughCopy({ "src/.nojekyll": ".nojekyll" });

  eleventyConfig.addCollection("articles", (collectionApi) => {
    return collectionApi
      .getFilteredByTag("article")
      .filter((item) => !item.data.draft)
      .sort((a, b) => (b.date?.valueOf?.() ?? 0) - (a.date?.valueOf?.() ?? 0));
  });

  eleventyConfig.addFilter("readableDate", (dateObj) =>
    DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("LLL yyyy")
  );

  eleventyConfig.addFilter("isoDate", (dateObj) =>
    DateTime.fromJSDate(dateObj, { zone: "utc" }).toISODate()
  );

  eleventyConfig.addFilter("rfc822Date", (dateObj) =>
    DateTime.fromJSDate(dateObj, { zone: "utc" }).toRFC2822()
  );

  return {
    dir: {
      input: "src",
      output: "dist",
      includes: "_includes",
      data: "_data"
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    templateFormats: ["njk", "md", "xml"]
  };
}

