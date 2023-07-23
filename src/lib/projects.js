// import projects from '@/src/data/projects/projects.json' assert {type: 'json'}
import path from 'path';
import fs from 'fs';
import Markdown from 'markdown-to-jsx';
import matter from 'gray-matter';

const ProjectDirectory = path.join(process.cwd(), 'src', 'data', 'projects');
export const PreviewDirectory = path.join(process.cwd(), 'public', 'previews');

export const getProjectContent = (project) => {
    const file = path.join(ProjectDirectory, 'content', project+'.md');
    const content = fs.readFileSync(file, 'utf8');
    const matterResult = matter(content);
    return (<Markdown>{matterResult.content}</Markdown>)
}

export const getProjectMetadata = () => {
    const file = path.join(ProjectDirectory, 'projects.json');
    const content = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(content);
    // console.log(data);
    return data;
}
export const projectMetadata = getProjectMetadata();