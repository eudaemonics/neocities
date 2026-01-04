// Tells Eleventy to look for the Luxon plugin
const { DateTime } = require('luxon');

// Tells Eleventy to look for the RSS plugin
const pluginRss = require("@11ty/eleventy-plugin-rss");

// This is all the stuff that Eleventy is going to process when it exports your site

module.exports = function (eleventyConfig) {
    // Edit these to include your images, CSS, and other folders and files that you want to copy over to your public folder. "addPassThroughCopy" means it will copy those files over as-is without processing them, and "addWatchTarget" means it tracks changes and updates live when you use the --serve command
    eleventyConfig.addPassthroughCopy("./src/styles");
    eleventyConfig.addWatchTarget("./src/styles/");
    eleventyConfig.addPassthroughCopy("./src/images");
    eleventyConfig.addWatchTarget("./src/images/");
    eleventyConfig.addPassthroughCopy("./src/not_found.html");
    eleventyConfig.addPassthroughCopy("./src/.well-known");
    eleventyConfig.addPassthroughCopy("./src/.htaccess");
    eleventyConfig.addWatchTarget("./src/media/");

    // Load the RSS plugin
    eleventyConfig.addPlugin(pluginRss);

    // Adds Next & Previous links to the bottom of our blog posts
    eleventyConfig.addCollection("posts", function(collection) {
        const coll = collection.getFilteredByTag("posts");
    
        for(let i = 0; i < coll.length ; i++) {
            const prevPost = coll[i-1];
            const nextPost = coll[i + 1];
    
            coll[i].data["prevPost"] = prevPost;
            coll[i].data["nextPost"] = nextPost;
        }
    
        return coll;
    });

    // Return the length of a collection for tag clouds (thank you Claus!!)
    eleventyConfig.addFilter('length', (collection) => {
        return collection[1].length;
    });

    // Add the filter "readableDate" to simplify the way blog dates are presented
    eleventyConfig.addFilter('readableDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc+9' }).toFormat(
            'yyyy-LL-dd'
            );
        });

    // Slices up RSS posts
    eleventyConfig.addFilter("head", function (arr=[], count=1) {
        if (count < 0) {
            return arr.slice(count);
        }
        return arr.slice(0, count);
    });

    // Add the filter "topDate" to simplify the way blog dates are presented at the top of blog posts
    eleventyConfig.addFilter('topDate', (dateObj) => {
        return DateTime.fromJSDate(dateObj, { zone: 'utc+9' }).toFormat(
            'yyyy LLLL dd'
            );
        });

    // These are the folders that Eleventy will use. "src" is where you edit files that Eleventy will then take in and export into "public," which you upload.
        return {
            dir: {
                input: "src/",
                output: "public",
            },
        };
    };