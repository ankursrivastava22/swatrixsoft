import {DateTime} from 'luxon';

const camelCaseToDashed = (string) => {
    const dashedString = string.replace(/\s+/g, "-").toLowerCase();
    return dashedString;
};

const flatDeep = (arr, d = 1) =>
    d > 0
        ? arr.reduce(
            (acc, val) =>
                acc.concat(Array.isArray(val) ? flatDeep(val, d - 1) : val),
            []
        )
        : arr.slice();

const slugify = (text) => {
    return text
        .toString()
        .toLowerCase()
        .replace('&', "and") // Replace spaces with -
        .replace(/\s+/g, "-") // Replace spaces with -
        .replace(/[^\w-]+/g, "") // Remove all non-word chars
        .replace(/--+/g, "-") // Replace multiple - with single -
        .replace(/^-+/, "") // Trim - from start of text
        .replace(/-+$/, ""); // Trim - from end of text
};

const containsObject = (obj, list) => {
    let i;
    for (i = 0; i < list.length; i++) {
        if (list[i].slug === obj.slug) {
            return i;
        }
    }

    return -1;
};

const getCategories = (blogs) => {
    let allPosts = blogs.map((item) => item.postData),
        cats = allPosts.map((item) => item.categories),
        singleCatArray = flatDeep(cats),
        categories = [];

    singleCatArray.forEach((cat) => {
        const obj = {
                title: cat.trim(),
                slug: slugify(cat),
                count: 1,
            },
            objIndex = containsObject(obj, categories);

        if (objIndex !== -1) {
            const prevCount = categories[objIndex].count;

            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify(cat),
                count: prevCount + 1,
            };
        } else {
            categories.push(obj);
        }
    });

    return categories;
};

const getTags = (blogs) => {
    let allPosts = blogs.map((item) => item.postData),
        allTags = allPosts.map((item) => item.tags),
        singleTagArray = flatDeep(allTags),
        tags = [];

    singleTagArray.forEach((tag) => {
        const obj = {
                title: tag.trim(),
                slug: slugify(tag),
                count: 1,
            },
            objIndex = containsObject(obj, tags);

        if (objIndex !== -1) {
            const prevCount = tags[objIndex].count;

            tags[objIndex] = {
                title: tag.trim(),
                slug: slugify(tag),
                count: prevCount + 1,
            };
        } else {
            tags.push(obj);
        }
    });

    return tags;
};

const sortingByDate = function (posts) {
    return posts.sort((a, b) => {
        const beforeDate = DateTime.fromFormat(a.postData.publishedAt, 'LLL dd yyyy');
        const afterDate = DateTime.fromFormat(b.postData.publishedAt, 'LLL dd yyyy');
        return afterDate - beforeDate;
    });
};

const sortingByLikes = function (posts) {
    return posts.sort((a, b) => parseFloat(a.postData.likes) - parseFloat(b.postData.likes));
};

const getCourseCategories = (courses) => {
    let allCourses = courses.map((item) => item),
        cats = allCourses.map((item) => item.courseCategory),
        singleCatArray = flatDeep(cats),
        categories = [];

    singleCatArray.forEach((cat) => {
        const obj = {
                title: cat.trim(),
                slug: slugify(cat),
                count: 1,
            },
            objIndex = containsObject(obj, categories);

        if (objIndex !== -1) {
            const prevCount = categories[objIndex].count;

            categories[objIndex] = {
                title: cat.trim(),
                slug: slugify(cat),
                count: prevCount + 1,
            };
        } else {
            categories.push(obj);
        }
    });

    return categories;
};

const toggleShowMore = (e) => {
    const button = e.target,
        parent = button.parentElement;

    e.stopPropagation()

    button.classList.toggle('active');
    parent.classList.toggle('active');

    if (button.classList.contains('active')) {
        button.innerText = 'Show Less'
    } else {
        button.innerText = 'Show More'
    }
}

module.exports = {
    camelCaseToDashed,
    flatDeep,
    slugify,
    containsObject,
    getCategories,
    getTags,
    sortingByDate,
    sortingByLikes,
    getCourseCategories,
    toggleShowMore
};
