// import projects from '@/src/data/projects/projects.json' assert {type: 'json'}
import path from 'path';
import fs from 'fs';

const ProjectDirectory = path.join(process.cwd(), 'src', 'data', 'contacts');

export const getContactMetadata = () => {
    const file = path.join(ProjectDirectory, 'links.json');
    const content = fs.readFileSync(file, 'utf8');
    const data = JSON.parse(content);
    return data;
}