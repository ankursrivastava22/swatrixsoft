import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "data/blog");

export const getPostBySlug = async (slug) => {
  let filePath;
  const realSlug = slug.replace(/\.md$/, "");

  filePath = path.join(rootDirectory, `${realSlug}.md`);

  if (!fs.existsSync(filePath)) {
    return null; 
  }

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const post = await getPostBySlug(file);
    if (post) {
      posts.push(post.meta);
    }
  }

  return posts;
};
