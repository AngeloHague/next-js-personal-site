import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import sections from '@/data/index/sections.json'
import Markdown from 'markdown-to-jsx';

const SectionsDirectory = path.join(process.cwd(), 'src', 'data','home_sections');

export const getSectionMetadata = () => {
  return(Object.keys(sections))
}

export const getSection = (slug) => {
  return sections[slug]
}

// export const getSection = (slug) => {
//   const file = path.join(SectionsDirectory, slug+'.md');
//   const content = fs.readFileSync(file, 'utf8');
//   // use markdown to separate metadata
//   const matterResults = matter(content);
//   return matterResults.content;
// }

// export const getSectionMetadata = () => {
//   const files = fs.readdirSync(SectionsDirectory);
//   const mdSections = files.filter((file) => file.endsWith('.md'));
//   const slugs = mdSections.map((file) => file.replace('.md', ''));
//   return slugs;
// }
