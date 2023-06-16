import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';

const SectionsDirectory = path.join(process.cwd(), 'data','home_sections');

export async function getSortedSectionsData() {
    console.log(SectionsDirectory);
    // Get file names under /Sections
    const fileNames = fs.readdirSync(SectionsDirectory);
    const allSectionsData = fileNames.map(async (fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '');

    // Read markdown file as string
    const fullPath = path.join(SectionsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);
    // Use remark to convert markdown into HTML string
    const processedContent = await remark()
        .use(html)
        .process(matterResult.content);
    const contentHtml = processedContent.toString();

    // Combine the data with the id
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  });
  // Sort Sections by date
  return allSectionsData.sort((a, b) => {
    if (a.index < b.index) {
      return 1;
    } else {
      return -1;
    }
  });
}