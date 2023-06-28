// import projects from '@/src/data/projects/projects.json' assert {type: 'json'}
import path from 'path';
import fs from 'fs';

const ProjectDirectory = path.join(process.cwd(), 'src', 'data', 'projects');
export const PreviewDirectory = path.join(process.cwd(), 'public', 'previews');

export const getProjectMetadata = () => {
    const file = path.join(ProjectDirectory, 'projects.json');
    const content = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(content);
    // console.log(data);
    return data;
}