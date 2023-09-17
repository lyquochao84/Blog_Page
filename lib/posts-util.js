import fs from 'fs';
import path from 'path';

import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts-db');

// Get the post file name
export function getPostFiles() {
    return fs.readdirSync(postsDirectory);
}

// Get Data from the post detail
export function getPostData(postIdentifier) {
    const postSlug = postIdentifier.replace(/\.md$/, '');  // remove the file extension
    const filePath = path.join(postsDirectory, `${postSlug}.md`);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);

    const postData = {
        slug: postSlug,
        ...data,
        content: content,
    };

    return postData;
}

// Get all posts
export function getAllPosts() {
    const postFiles = getPostFiles();

    const allPosts = postFiles.map((postFile) => {
        return getPostData(postFile);
    });

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1);

    return sortedPosts;
}

// Get featured posts
export function getFeaturedPosts() {
    const allPosts = getAllPosts();
    const featuredPosts = allPosts.filter(post => post.isFeatured);

    return featuredPosts;
}